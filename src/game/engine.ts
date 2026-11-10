import type { TechInfo } from "@/content/types";
import { luminance, withAlpha } from "@/lib/color";
import { formatTokens } from "@/lib/tokens";
import { CRASH_FREEZE_SECONDS, OBSTACLE, PLAYER, SCORE, SPEED, WORLD } from "./config";
import { obstacleHitbox, obstacleTop, ObstacleSpawner, type Obstacle } from "./entities/obstacles";
import { ParticleSystem } from "./entities/particles";
import { Player } from "./entities/player";
import { Background } from "./rendering/background";
import { LogoAtlas } from "./rendering/logoAtlas";
import { intersects, type GameCallbacks, type GameFonts, type GamePhase } from "./types";

/** Physics runs in sub-steps no longer than this to avoid tunneling at high speed. */
const MAX_STEP = 1 / 120;
/** CSS px the score keeps from the canvas's right edge: corner bracket (8px inset + 16px) plus a gap. */
const HUD_CORNER_CLEARANCE = 32;
/** Smallest on-screen (CSS px) size of the score text. */
const HUD_SCORE_MIN_CSS = 10;
/** Adaptive resolution: if frames average slower than this over a sample window, render at a lower pixel ratio. */
const SLOW_FRAME_MS = 1000 / 45;
const QUALITY_SAMPLE_SECONDS = 2;
/** Seconds of play to skip before sampling (startup work and the catalog loading skew the first frames). */
const QUALITY_WARMUP_SECONDS = 1.5;

/**
 * Owns the simulation and canvas rendering. React talks to it through the
 * public methods and receives phase changes / game over via callbacks.
 */
export class Game {
  private ctx: CanvasRenderingContext2D;
  private logos = new LogoAtlas();
  private background: Background;
  private player = new Player();
  private spawner: ObstacleSpawner;
  private particles = new ParticleSystem();
  private obstacles: Obstacle[] = [];

  private phase: GamePhase = "ready";
  private width: number = WORLD.minWidth;
  private scale = 1;
  private dpr = 1;
  /** Pixel ratio the page asked for; `dprCap` lowers what's actually used on slow devices. */
  private requestedDpr = 1;
  private dprCap = 2;
  private sampleMs = 0;
  private sampleFrames = 0;

  private time = 0;
  /** Clock for the scenery; it stays frozen on the start screen. */
  private sceneTime = 0;
  private elapsed = 0;
  private speed: number = SPEED.start;
  private distance = 0;
  private score = 0;

  private crashTimer = 0;
  private hitObstacle: Obstacle | null = null;
  private shake = 0;
  private milestoneFlash = 0;
  /** 0 until top speed is reached, then ramps to 1 over OBSTACLE.overdriveSeconds. */
  private overdrive = 0;
  private overdriveFlash = 0;
  private overdriveGlow: CanvasGradient | null = null;
  private overdriveGlowWidth = 0;
  private toast: { text: string; color: string; t: number } | null = null;
  /** Toasts waiting for the current one to finish, so simultaneous milestones don't overwrite each other. */
  private toastQueue: { text: string; color: string }[] = [];
  /** Skills (non-hazard obstacles) that have scrolled safely past the player this run. */
  private dodged = 0;
  private agents = 1;
  private trailTimer = 0;
  private slideDustTimer = 0;
  private reducedMotion = false;

  private rafId = 0;
  private lastFrame = 0;

  constructor(
    private canvas: HTMLCanvasElement,
    private callbacks: GameCallbacks,
    private fonts: GameFonts,
    /** Obstacles available from the first run; more can be added via addTechnologies(). */
    starterObstacles: TechInfo[],
  ) {
    this.spawner = new ObstacleSpawner(starterObstacles);
    // Every frame paints the whole canvas, so it can be opaque: the browser then skips blending it with the page.
    this.ctx = canvas.getContext("2d", { alpha: false })!;
    this.background = new Background(fonts);
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.lastFrame = performance.now();
    this.rafId = requestAnimationFrame(this.frame);
  }

  // ── Public API ────────────────────────────────────────────────────────

  /** Resizes the backing store. `width` is in world units, `scale` is CSS px per unit. */
  resize(width: number, scale: number, dpr: number) {
    this.width = width;
    this.scale = scale;
    this.requestedDpr = dpr;
    this.dpr = Math.min(dpr, this.dprCap);
    this.canvas.width = Math.round(width * scale * dpr);
    this.canvas.height = Math.round(WORLD.height * scale * dpr);
    this.logos.invalidate();
    this.render();
  }

  /** Adds more obstacle types; they start spawning immediately. */
  addTechnologies(techs: TechInfo[]) {
    this.spawner.addToPool(techs);
  }

  start() {
    if (this.phase === "ready") this.reset();
  }

  restart() {
    if (this.phase === "over" || this.phase === "paused" || this.phase === "crashed") this.reset();
  }

  pause() {
    if (this.phase !== "playing") return;
    this.player.releaseJump();
    this.player.releaseSlide();
    this.setPhase("paused");
  }

  resume() {
    if (this.phase === "paused") this.setPhase("playing");
  }

  jumpPress() {
    if (this.phase === "playing") this.player.pressJump();
  }

  jumpRelease() {
    this.player.releaseJump();
  }

  slidePress() {
    if (this.phase === "playing") this.player.pressSlide();
  }

  slideRelease() {
    this.player.releaseSlide();
  }

  destroy() {
    cancelAnimationFrame(this.rafId);
  }

  // ── Loop ──────────────────────────────────────────────────────────────

  private frame = (now: number) => {
    const frameMs = now - this.lastFrame;
    // Clamp long gaps (tab switches, breakpoints) so the world doesn't jump.
    let dt = Math.min(frameMs / 1000, 1 / 20);
    this.lastFrame = now;
    while (dt > 0) {
      const step = Math.min(dt, MAX_STEP);
      this.update(step);
      dt -= step;
    }
    this.adaptQuality(frameMs);
    // Paused and game-over screens are still: skip redrawing so the overlays on top stay smooth.
    if (this.phase !== "paused" && this.phase !== "over") this.render();
    this.rafId = requestAnimationFrame(this.frame);
  };

  /** Drops the canvas resolution a step (2 → 1.5 → 1) while play keeps running slower than SLOW_FRAME_MS. */
  private adaptQuality(frameMs: number) {
    if (this.phase !== "playing" || this.elapsed < QUALITY_WARMUP_SECONDS || frameMs > 250) return;
    this.sampleMs += frameMs;
    this.sampleFrames++;
    if (this.sampleMs < QUALITY_SAMPLE_SECONDS * 1000) return;
    const average = this.sampleMs / this.sampleFrames;
    this.sampleMs = this.sampleFrames = 0;
    if (average > SLOW_FRAME_MS && this.dpr > 1) {
      this.dprCap = Math.max(1, this.dpr - 0.5);
      this.resize(this.width, this.scale, this.requestedDpr);
    }
  }

  private setPhase(phase: GamePhase) {
    this.phase = phase;
    this.callbacks.onPhaseChange(phase);
  }

  /** How much faster tokens burn than at the start of a run (1.0 → ~2.5). */
  private burnRate() {
    return this.speed / SPEED.start;
  }

  private setAgents(agents: number) {
    if (agents === this.agents) return;
    this.agents = agents;
    this.callbacks.onAgentsChange(agents);
  }

  private reset() {
    this.player.reset();
    this.spawner.reset();
    this.particles.clear();
    this.background.reset();
    this.obstacles = [];
    this.elapsed = this.distance = this.score = this.dodged = 0;
    this.speed = SPEED.start;
    this.hitObstacle = null;
    this.shake = this.milestoneFlash = this.overdrive = this.overdriveFlash = 0;
    this.toast = null;
    this.toastQueue = [];
    this.setAgents(1);
    this.setPhase("playing");
  }

  private update(dt: number) {
    if (this.phase === "paused") return;
    this.time += dt;
    // The start screen shows a still scene; only the character idles.
    if (this.phase === "ready") return;
    this.sceneTime += dt;

    if (this.phase === "playing") this.updatePlaying(dt);
    else this.particles.update(dt);

    if (this.phase === "crashed") {
      this.crashTimer -= dt;
      if (this.crashTimer <= 0 && this.hitObstacle) {
        this.setPhase("over");
        this.callbacks.onGameOver({ tech: this.hitObstacle.tech, score: this.score });
      }
    }

    this.shake = Math.max(0, this.shake - dt * 3);
    this.milestoneFlash = Math.max(0, this.milestoneFlash - dt);
    this.overdriveFlash = Math.max(0, this.overdriveFlash - dt);
    if (this.toast) {
      this.toast.t -= dt;
      if (this.toast.t <= 0) this.toast = null;
    }
    if (!this.toast && this.toastQueue.length > 0) this.toast = { ...this.toastQueue.shift()!, t: 2 };
  }

  private updatePlaying(dt: number) {
    this.elapsed += dt;
    this.speed = Math.min(SPEED.max, SPEED.start + SPEED.acceleration * this.elapsed);
    // One more agent for every 0.1 of burn rate shown in the HUD (x1.0 = 1 agent).
    this.setAgents(Math.round(this.burnRate() * 10) - 9);
    const dx = this.speed * dt;
    this.distance += dx;
    this.background.update(dx);

    const player = this.player;
    player.update(dt, this.speed);
    if (player.jumped) {
      this.dust(PLAYER.x + 20, 8);
      this.callbacks.onEvent("jump");
    }
    if (player.landed) this.dust(PLAYER.x + 24, 12);
    if (player.stepped) this.dust(PLAYER.x + 30, 3, 0.6);
    if (player.slid) {
      this.dust(PLAYER.x + 30, 12);
      this.callbacks.onEvent("slide");
    }
    // Friction dust trails behind the body while sliding.
    this.slideDustTimer -= dt;
    if (player.sliding && this.slideDustTimer <= 0) {
      this.slideDustTimer = 0.045;
      this.dust(PLAYER.x + 22, 2);
    }

    // Speed trail once things get fast.
    this.trailTimer -= dt;
    if (this.speed > 640 && this.trailTimer <= 0) {
      this.trailTimer = 0.03;
      this.particles.burst(PLAYER.x + 4, player.y - (player.sliding ? 18 : 34), {
        count: 1,
        colors: this.overdrive > 0 ? ["#f472b6", "#f87171"] : ["#22d3ee", "#e879f9"],
        speed: [40, 90],
        angle: [Math.PI * 0.9, Math.PI * 1.1],
        life: [0.2, 0.4],
        size: [2, 3],
        gravity: 0,
      });
    }
    this.particles.update(dt, dx);

    for (const o of this.obstacles) o.x -= dx;
    this.obstacles = this.obstacles.filter((o) => o.x + o.size > -60);

    // 0..1 while speeding up, then 1..2 ("overdrive") over the first stretch at top speed.
    const timeToMax = (SPEED.max - SPEED.start) / SPEED.acceleration;
    const overdrive = Math.min(1, Math.max(0, (this.elapsed - timeToMax) / OBSTACLE.overdriveSeconds));
    if (overdrive > 0 && this.overdrive === 0) {
      this.overdriveFlash = 1;
      this.shake = this.reducedMotion ? 0 : 0.6;
      this.showToast("OVERDRIVE!", "#f472b6");
      this.callbacks.onEvent("overdrive");
    }
    this.overdrive = overdrive;
    const difficulty = (this.speed - SPEED.start) / (SPEED.max - SPEED.start) + overdrive;
    this.obstacles.push(...this.spawner.update(dx, this.speed, difficulty, this.width + 40));

    const previous = this.score;
    this.score = Math.floor(this.distance / SCORE.distancePerPoint);
    if (Math.floor(this.score / SCORE.milestone) > Math.floor(previous / SCORE.milestone)) {
      this.milestoneFlash = 1;
    }
    if (Math.floor(this.score / SCORE.release) > Math.floor(previous / SCORE.release)) {
      this.showToast(`${formatTokens(this.score)} TOKENS BURNED!`, "#facc15");
      this.callbacks.onEvent("tokens");
    }

    for (const o of this.obstacles) {
      if (o.passed || o.x + o.size >= PLAYER.x) continue;
      o.passed = true;
      if (o.tech.kind === "hazard") continue;
      this.dodged++;
      if (this.dodged % SCORE.dodgeMilestone === 0) {
        this.showToast(`${this.dodged} SKILLS DODGED!`, "#22d3ee");
        this.callbacks.onEvent("dodged");
      }
    }

    const box = player.hitbox();
    for (const o of this.obstacles) {
      if (intersects(box, obstacleHitbox(o, this.time))) {
        this.crash(o);
        break;
      }
    }
  }

  private showToast(text: string, color: string) {
    if (this.toast) this.toastQueue.push({ text, color });
    else this.toast = { text, color, t: 2 };
  }

  private crash(o: Obstacle) {
    o.hit = true;
    this.hitObstacle = o;
    this.crashTimer = CRASH_FREEZE_SECONDS;
    this.shake = this.reducedMotion ? 0 : 1;
    this.player.releaseJump();
    this.player.releaseSlide();
    const top = obstacleTop(o, this.time);
    this.particles.burst(o.x + 4, top + o.size / 2, {
      count: 34,
      colors: [o.tech.color, "#ffffff", "#f472b6"],
      speed: [120, 420],
      angle: [-Math.PI, Math.PI],
      life: [0.4, 0.9],
      size: [2, 5],
    });
    this.callbacks.onEvent("crash");
    this.setPhase("crashed");
  }

  /** `strength` scales how far the dust is kicked (footsteps are lighter than landings). */
  private dust(x: number, count: number, strength = 1) {
    this.particles.burst(x, WORLD.groundY - 2, {
      count,
      colors: ["#c4b5fd", "#a5b4fc", "#e9d5ff"],
      speed: [30 * strength, 120 * strength],
      angle: [Math.PI * 0.95, Math.PI * 1.45],
      life: [0.25, 0.5],
      size: [2, 3],
      gravity: 300,
    });
  }

  // ── Rendering ─────────────────────────────────────────────────────────

  private render() {
    const ctx = this.ctx;
    const k = this.scale * this.dpr;
    ctx.setTransform(k, 0, 0, k, 0, 0);

    if (this.shake > 0) {
      const m = this.shake * 6;
      ctx.translate((Math.random() - 0.5) * m, (Math.random() - 0.5) * m);
    }

    this.background.draw(ctx, this.width, this.sceneTime);
    if (this.overdrive > 0 || this.overdriveFlash > 0) this.drawOverdrive();
    for (const o of this.obstacles) this.drawObstacle(o);

    const flash = this.phase === "crashed" && Math.floor(this.time * 16) % 2 === 0;
    this.player.draw(ctx, this.phase === "ready", flash, this.time);
    this.particles.draw(ctx);

    ctx.setTransform(k, 0, 0, k, 0, 0);
    this.drawHud();
  }

  /** Pulsing red edge glow while in overdrive, plus a flash the moment it starts. */
  private drawOverdrive() {
    const ctx = this.ctx;
    const w = this.width;
    const h = WORLD.height;
    const pulse = this.reducedMotion ? 0.5 : 0.5 + 0.5 * Math.sin(this.time * 4);
    const alpha = (0.1 + 0.08 * pulse) * Math.max(0.4, this.overdrive);
    // One cached gradient at full strength; the pulse just changes globalAlpha.
    if (!this.overdriveGlow || this.overdriveGlowWidth !== w) {
      this.overdriveGlow = ctx.createRadialGradient(w / 2, h / 2, h * 0.35, w / 2, h / 2, Math.max(w, h) * 0.75);
      this.overdriveGlow.addColorStop(0, withAlpha("#f43f5e", 0));
      this.overdriveGlow.addColorStop(1, withAlpha("#f43f5e", 1));
      this.overdriveGlowWidth = w;
    }
    ctx.globalAlpha = Math.min(1, alpha * 2.5);
    ctx.fillStyle = this.overdriveGlow;
    ctx.fillRect(0, 0, w, h);
    ctx.globalAlpha = 1;
    if (this.overdriveFlash > 0) {
      ctx.fillStyle = withAlpha("#f472b6", this.overdriveFlash * 0.35);
      ctx.fillRect(0, 0, w, h);
    }
  }

  /** The energy pillar a flying obstacle hangs from (part of its hitbox, so it can't be jumped). */
  private drawEnergyPillar(x: number, tileTop: number, size: number, accent: string) {
    const ctx = this.ctx;
    const inset = OBSTACLE.hitboxInset;
    const left = x + inset;
    const width = size - inset * 2;

    const body = ctx.createLinearGradient(0, 0, 0, tileTop);
    body.addColorStop(0, withAlpha(accent, 0.04));
    body.addColorStop(1, withAlpha(accent, 0.3));
    ctx.fillStyle = body;
    ctx.fillRect(left, 0, width, tileTop);

    // Bright edges
    const edge = ctx.createLinearGradient(0, 0, 0, tileTop);
    edge.addColorStop(0, withAlpha(accent, 0.1));
    edge.addColorStop(1, withAlpha(accent, 0.85));
    ctx.fillStyle = edge;
    ctx.fillRect(left, 0, 1.5, tileTop);
    ctx.fillRect(left + width - 1.5, 0, 1.5, tileTop);

    // Energy pulses flowing down into the tile
    ctx.fillStyle = withAlpha(accent, 0.55);
    const spacing = 22;
    const flow = (this.time * 90) % spacing;
    for (let py = flow - spacing; py < tileTop - 2; py += spacing) {
      const fade = Math.max(0, py / tileTop);
      ctx.globalAlpha = 0.25 + 0.6 * fade;
      ctx.fillRect(left + 3, py, width - 6, 2);
    }
    ctx.globalAlpha = 1;
  }

  private drawObstacle(o: Obstacle) {
    const ctx = this.ctx;
    const y = obstacleTop(o, this.time);
    const { x, size } = o;
    // Near-black brand colors would vanish on the dark scene; use a light accent instead.
    const accent = luminance(o.tech.color) < 0.06 ? "#cbd5e1" : o.tech.color;

    if (o.airborne) {
      // Ground shadow
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      ctx.beginPath();
      ctx.ellipse(x + size / 2, WORLD.groundY + 2, size * 0.35, 3, 0, 0, Math.PI * 2);
      ctx.fill();
      this.drawEnergyPillar(x, y, size, accent);
    } else if (o.y + size >= WORLD.groundY) {
      // Contact shadow so ground obstacles sit on the road
      ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
      ctx.beginPath();
      ctx.ellipse(x + size / 2, WORLD.groundY + 1, size * 0.55, 4, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Logo tiles use a 12/64 corner radius; the plate and border hug them exactly.
    const radius = size * (12 / 64);

    // Flat backing plate (shows only if a logo hasn't loaded yet)
    ctx.fillStyle = "#0b0d1a";
    ctx.beginPath();
    ctx.roundRect(x, y, size, size, radius);
    ctx.fill();

    const logo = this.logos.get(o.tech, size * this.scale * this.dpr);
    if (logo) {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(logo, x, y, size, size);
    } else {
      ctx.fillStyle = o.tech.color;
      ctx.beginPath();
      ctx.roundRect(x, y, size, size, radius);
      ctx.fill();
    }

    // Border, right on the tile's edge
    ctx.strokeStyle = withAlpha(accent, 0.8);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(x, y, size, size, radius);
    ctx.stroke();

    if (o.bracket) this.drawBrackets(x, y, o.bracket, accent);

    if (o.hit) {
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(x, y, size, size, radius);
      ctx.stroke();
    }
  }


  /** HUD target brackets at the corners of a tile, or of a whole group of touching tiles. */
  private drawBrackets(x: number, y: number, bracket: NonNullable<Obstacle["bracket"]>, accent: string) {
    const ctx = this.ctx;
    // A group of several brands gets a neutral color rather than borrowing one tile's.
    const color = bracket.hazard ? "#f87171" : bracket.multi ? "#cbd5e1" : accent;
    // Hazard brackets blink as a warning; everything else stays steady.
    const warningBlink = 0.5 + 0.5 * Math.sin(this.time * 7 + x * 0.05);
    const g = 6; // gap outside the tiles
    const l = 7; // bracket arm length
    const left = x + bracket.dx - g;
    const right = x + bracket.dx + bracket.w + g;
    const top = y + bracket.dy - g;
    const bottom = y + bracket.dy + bracket.h + g;
    ctx.strokeStyle = withAlpha(color, bracket.hazard ? 0.45 + 0.5 * warningBlink : 0.75);
    ctx.lineWidth = 1.5;
    ctx.lineCap = "square";
    ctx.beginPath();
    ctx.moveTo(left, top + l);
    ctx.lineTo(left, top);
    ctx.lineTo(left + l, top);
    ctx.moveTo(right - l, top);
    ctx.lineTo(right, top);
    ctx.lineTo(right, top + l);
    ctx.moveTo(right, bottom - l);
    ctx.lineTo(right, bottom);
    ctx.lineTo(right - l, bottom);
    ctx.moveTo(left + l, bottom);
    ctx.lineTo(left, bottom);
    ctx.lineTo(left, bottom - l);
    ctx.stroke();
  }

  private drawHud() {
    if (this.phase === "ready") return;
    const ctx = this.ctx;
    // Keep clear of the targeting brackets drawn over the canvas corners (fixed CSS size),
    // which cover more of the world when the canvas is scaled down on phones.
    const right = this.width - Math.max(16, HUD_CORNER_CLEARANCE / this.scale);

    // At least HUD_SCORE_MIN_CSS on screen, so it stays readable when the canvas is scaled down.
    ctx.font = `${Math.max(14, HUD_SCORE_MIN_CSS / this.scale)}px ${this.fonts.pixel}`;
    ctx.textBaseline = "top";
    ctx.textAlign = "right";

    const blinkHidden = this.milestoneFlash > 0 && Math.floor(this.milestoneFlash * 8) % 2 === 1;
    const scoreText = formatTokens(this.score);
    if (!blinkHidden) {
      ctx.fillStyle = "#f8fafc";
      ctx.fillText(scoreText, right, 16);
    }

    if (this.toast) {
      const alpha = Math.min(1, this.toast.t * 2);
      const rise = (2 - this.toast.t) * 6;
      ctx.globalAlpha = alpha;
      ctx.textAlign = "center";
      ctx.font = `16px ${this.fonts.pixel}`;
      ctx.fillStyle = "#000000";
      ctx.fillText(this.toast.text, this.width / 2 + 2, 62 - rise + 2);
      ctx.fillStyle = this.toast.color;
      ctx.fillText(this.toast.text, this.width / 2, 62 - rise);
      ctx.globalAlpha = 1;
    }
  }


}
