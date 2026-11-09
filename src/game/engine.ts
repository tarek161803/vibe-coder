import type { TechInfo } from "@/content/types";
import { formatTokens } from "@/lib/tokens";
import { CRASH_FREEZE_SECONDS, PLAYER, SCORE, SPEED, WORLD } from "./config";
import { obstacleHitbox, obstacleTop, ObstacleSpawner, type Obstacle } from "./entities/obstacles";
import { ParticleSystem } from "./entities/particles";
import { Player } from "./entities/player";
import { Background } from "./rendering/background";
import { LogoAtlas } from "./rendering/logoAtlas";
import { createPlayerSprites, type PlayerSprites } from "./rendering/playerSprites";
import { intersects, type GameCallbacks, type GameFonts, type GamePhase } from "./types";

/** Physics runs in sub-steps no longer than this to avoid tunneling at high speed. */
const MAX_STEP = 1 / 120;

/**
 * Owns the simulation and canvas rendering. React talks to it through the
 * public methods and receives phase changes / game over via callbacks.
 */
export class Game {
  private ctx: CanvasRenderingContext2D;
  private sprites: PlayerSprites;
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

  private time = 0;
  private elapsed = 0;
  private speed: number = SPEED.start;
  private distance = 0;
  private score = 0;

  private crashTimer = 0;
  private hitObstacle: Obstacle | null = null;
  private shake = 0;
  private milestoneFlash = 0;
  private toast: { text: string; t: number } | null = null;
  private agents = 1;
  private trailTimer = 0;
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
    this.ctx = canvas.getContext("2d")!;
    this.sprites = createPlayerSprites();
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
    this.dpr = dpr;
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
    // Clamp long gaps (tab switches, breakpoints) so the world doesn't jump.
    let dt = Math.min((now - this.lastFrame) / 1000, 1 / 20);
    this.lastFrame = now;
    while (dt > 0) {
      const step = Math.min(dt, MAX_STEP);
      this.update(step);
      dt -= step;
    }
    this.render();
    this.rafId = requestAnimationFrame(this.frame);
  };

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
    this.elapsed = this.distance = this.score = 0;
    this.speed = SPEED.start;
    this.hitObstacle = null;
    this.shake = this.milestoneFlash = 0;
    this.toast = null;
    this.setAgents(1);
    this.setPhase("playing");
  }

  private update(dt: number) {
    if (this.phase === "paused") return;
    this.time += dt;

    if (this.phase === "ready") {
      this.background.update(SPEED.idle * dt);
      return;
    }

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
    if (this.toast) {
      this.toast.t -= dt;
      if (this.toast.t <= 0) this.toast = null;
    }
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
    if (player.jumped) this.dust(PLAYER.x + 20, 8);
    if (player.landed) this.dust(PLAYER.x + 24, 12);

    // Speed trail once things get fast.
    this.trailTimer -= dt;
    if (this.speed > 640 && this.trailTimer <= 0) {
      this.trailTimer = 0.03;
      this.particles.burst(PLAYER.x + 4, player.y - (player.sliding ? 18 : 34), {
        count: 1,
        colors: ["#22d3ee", "#e879f9"],
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

    const difficulty = (this.speed - SPEED.start) / (SPEED.max - SPEED.start);
    this.obstacles.push(...this.spawner.update(dx, this.speed, difficulty, this.width + 40));

    const previous = this.score;
    this.score = Math.floor(this.distance / SCORE.distancePerPoint);
    if (Math.floor(this.score / SCORE.milestone) > Math.floor(previous / SCORE.milestone)) {
      this.milestoneFlash = 1;
    }
    if (Math.floor(this.score / SCORE.release) > Math.floor(previous / SCORE.release)) {
      this.toast = { text: `${formatTokens(this.score)} TOKENS BURNED!`, t: 2 };
    }

    const box = player.hitbox();
    for (const o of this.obstacles) {
      if (intersects(box, obstacleHitbox(o, this.time))) {
        this.crash(o);
        break;
      }
    }
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
    this.setPhase("crashed");
  }

  private dust(x: number, count: number) {
    this.particles.burst(x, WORLD.groundY - 2, {
      count,
      colors: ["#c4b5fd", "#a5b4fc", "#e9d5ff"],
      speed: [30, 120],
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

    this.background.draw(ctx, this.width, this.time);
    for (const o of this.obstacles) this.drawObstacle(o);

    const flash = this.phase === "crashed" && Math.floor(this.time * 16) % 2 === 0;
    this.player.draw(ctx, this.sprites, this.phase === "ready", flash);
    this.particles.draw(ctx);

    ctx.setTransform(k, 0, 0, k, 0, 0);
    this.drawHud();
  }

  private drawObstacle(o: Obstacle) {
    const ctx = this.ctx;
    const y = obstacleTop(o, this.time);
    const { x, size } = o;

    if (o.airborne) {
      // Ground shadow
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      ctx.beginPath();
      ctx.ellipse(x + size / 2, WORLD.groundY + 2, size * 0.35, 3, 0, 0, Math.PI * 2);
      ctx.fill();
      // Drone rotors
      ctx.fillStyle = "#94a3b8";
      ctx.fillRect(x + size / 2 - 1, y - 6, 2, 6);
      ctx.fillRect(x + 4, y - 7, size - 8, 2);
      const blade = 6 + Math.abs(Math.sin(this.time * 40)) * 8;
      ctx.fillStyle = "rgba(226, 232, 240, 0.8)";
      ctx.fillRect(x + 6 - blade / 2, y - 9, blade, 2);
      ctx.fillRect(x + size - 6 - blade / 2, y - 9, blade, 2);
    }

    // Neon glow plate
    ctx.save();
    ctx.shadowColor = o.tech.color;
    ctx.shadowBlur = o.hit ? 26 : 10;
    ctx.fillStyle = "#0b0d1a";
    ctx.beginPath();
    ctx.roundRect(x - 2, y - 2, size + 4, size + 4, 10);
    ctx.fill();
    ctx.restore();

    const logo = this.logos.get(o.tech, size * this.scale * this.dpr);
    if (logo) {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(logo, x, y, size, size);
    } else {
      ctx.fillStyle = o.tech.color;
      ctx.beginPath();
      ctx.roundRect(x, y, size, size, 8);
      ctx.fill();
    }

    if (o.hit) {
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(x - 2, y - 2, size + 4, size + 4, 10);
      ctx.stroke();
    }
  }

  private drawHud() {
    if (this.phase === "ready") return;
    const ctx = this.ctx;
    const right = this.width - 16;

    ctx.font = `12px ${this.fonts.pixel}`;
    ctx.textBaseline = "top";
    ctx.textAlign = "right";

    const blinkHidden = this.milestoneFlash > 0 && Math.floor(this.milestoneFlash * 8) % 2 === 1;
    const scoreText = formatTokens(this.score);
    if (!blinkHidden) {
      ctx.fillStyle = "#f8fafc";
      ctx.fillText(scoreText, right, 16);
    }

    // Burn rate: tokens burn faster as the run speeds up
    ctx.textAlign = "left";
    ctx.font = `9px ${this.fonts.pixel}`;
    ctx.fillStyle = "#fb923c";
    ctx.fillText(`BURN RATE x${this.burnRate().toFixed(1)}`, 16, 18);

    if (this.toast) {
      const alpha = Math.min(1, this.toast.t * 2);
      const rise = (2 - this.toast.t) * 6;
      ctx.globalAlpha = alpha;
      ctx.textAlign = "center";
      ctx.font = `16px ${this.fonts.pixel}`;
      ctx.fillStyle = "#000000";
      ctx.fillText(this.toast.text, this.width / 2 + 2, 62 - rise + 2);
      ctx.fillStyle = "#facc15";
      ctx.fillText(this.toast.text, this.width / 2, 62 - rise);
      ctx.globalAlpha = 1;
    }
  }


}
