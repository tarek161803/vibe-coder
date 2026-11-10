import { WORLD } from "../config";
import type { GameFonts } from "../types";

/**
 * A developer-themed city: server-rack towers, buildings with giant code
 * screens, neon rooftop signs and Wi-Fi masts, plus a dim far layer for depth.
 * Generated once from a seeded RNG and scrolled with parallax.
 */

type Rng = () => number;

const LED_COLORS = ["#4ade80", "#22d3ee", "#22d3ee", "#fbbf24", "#4ade80"];
const CODE_COLORS = ["#c084fc", "#67e8f9", "#f9a8d4", "#86efac", "#fde68a"];
const NEON = ["#22d3ee", "#e879f9", "#a78bfa", "#4ade80", "#facc15", "#fb7185"];
const SIGNS = ["</>", "{ }", "git", "npm", "AI", "200 OK", "404", "sudo", "$_", "=>"];

const BODY = "#120d2e";
const BODY_EDGE = "#2b2063";
const PANEL = "#0c0922";

/** Repeating tile widths (must exceed WORLD.maxWidth + margin). */
const NEAR_TILE = 1600;
const FAR_TILE = 1500;

interface Led { x: number; y: number; color: string; phase: number; rate: number }

interface BaseBuilding { x: number; w: number; h: number }
interface RackTower extends BaseBuilding { kind: "rack"; units: number; leds: Led[]; vents: number[] }
interface ScreenTower extends BaseBuilding {
  kind: "screen";
  screenH: number;
  /** Either scrolling code lines or a deploy progress bar. */
  mode: "code" | "deploy";
  lines: { indent: number; len: number; color: string }[];
  windows: Led[];
}
interface SignTower extends BaseBuilding { kind: "sign"; text: string; color: string; windows: Led[] }
interface AntennaTower extends BaseBuilding { kind: "antenna"; mast: number; windows: Led[] }
type Building = RackTower | ScreenTower | SignTower | AntennaTower;

interface FarBuilding { x: number; w: number; h: number; lights: { x: number; y: number }[] }

function wrap(x: number, tile: number, margin: number) {
  return ((((x + margin) % tile) + tile) % tile) - margin;
}

const pick = <T,>(rnd: Rng, items: T[]) => items[Math.floor(rnd() * items.length)];

/** Neon sign sprites are drawn at this many pixels per world unit (sharp up to a 2x canvas). */
const SIGN_SPRITE_SCALE = 3;
const SIGN_GLOW = 10;

interface SignSprite {
  canvas: HTMLCanvasElement;
  w: number;
  h: number;
  /** Distance from the sprite's top edge to the text baseline. */
  baseline: number;
}

function windowGrid(rnd: Rng, w: number, h: number, top: number, density: number): Led[] {
  const lights: Led[] = [];
  for (let y = top; y < h - 6; y += 8) {
    for (let x = 5; x < w - 7; x += 8) {
      if (rnd() < density) {
        lights.push({ x, y, color: pick(rnd, NEON), phase: rnd() * 10, rate: 0.3 + rnd() * 1.2 });
      }
    }
  }
  return lights;
}

export class Skyline {
  /** Glowing sign text, pre-rendered once per text/colour: shadowBlur every frame is very slow on phones. */
  private signSprites = new Map<string, SignSprite>();

  private near: Building[] = [];
  private far: FarBuilding[] = [];

  constructor(
    rnd: Rng,
    private fonts: GameFonts,
  ) {
    let x = 0;
    while (x < FAR_TILE) {
      const w = 30 + Math.floor(rnd() * 50);
      const h = 85 + Math.floor(rnd() * 120);
      const lights = Array.from({ length: Math.floor(w * h * 0.004) }, () => ({
        x: 3 + Math.floor(rnd() * (w - 6)),
        y: 4 + Math.floor(rnd() * (h - 8)),
      }));
      this.far.push({ x, w, h, lights });
      x += w + Math.floor(rnd() * 14);
    }

    // Cycle through kinds so every screen-width shows a good mix.
    const kinds: Building["kind"][] = ["rack", "screen", "sign", "rack", "antenna", "screen", "rack", "sign"];
    x = 0;
    let i = 0;
    while (x < NEAR_TILE) {
      const kind = kinds[i++ % kinds.length];
      const building = this.makeBuilding(rnd, kind, x);
      this.near.push(building);
      x += building.w + 6 + Math.floor(rnd() * 30);
    }
  }

  private makeBuilding(rnd: Rng, kind: Building["kind"], x: number): Building {
    switch (kind) {
      case "rack": {
        const w = 34 + Math.floor(rnd() * 22);
        const units = 11 + Math.floor(rnd() * 10);
        const h = units * 9 + 8;
        const leds: Led[] = [];
        for (let u = 0; u < units; u++) {
          const count = 1 + Math.floor(rnd() * 3);
          for (let k = 0; k < count; k++) {
            leds.push({
              x: w - 8 - k * 4,
              y: 6 + u * 9 + 3,
              color: pick(rnd, LED_COLORS),
              phase: rnd() * 10,
              rate: 1 + rnd() * 5,
            });
          }
        }
        const vents = Array.from({ length: units }, (_, u) => u).filter(() => rnd() < 0.35);
        return { kind, x, w, h, units, leds, vents };
      }
      case "screen": {
        const w = 58 + Math.floor(rnd() * 30);
        const h = 95 + Math.floor(rnd() * 70);
        const screenH = 34 + Math.floor(rnd() * 10);
        const lines = Array.from({ length: 10 }, () => ({
          indent: Math.floor(rnd() * 3) * 4,
          len: 0.25 + rnd() * 0.6,
          color: pick(rnd, CODE_COLORS),
        }));
        return {
          kind,
          x,
          w,
          h,
          screenH,
          mode: rnd() < 0.35 ? "deploy" : "code",
          lines,
          windows: windowGrid(rnd, w, h, screenH + 14, 0.3),
        };
      }
      case "sign": {
        const w = 44 + Math.floor(rnd() * 26);
        const h = 70 + Math.floor(rnd() * 80);
        return { kind, x, w, h, text: pick(rnd, SIGNS), color: pick(rnd, NEON), windows: windowGrid(rnd, w, h, 7, 0.32) };
      }
      case "antenna": {
        const w = 26 + Math.floor(rnd() * 12);
        const h = 95 + Math.floor(rnd() * 55);
        return { kind, x, w, h, mast: 18 + Math.floor(rnd() * 10), windows: windowGrid(rnd, w, h, 7, 0.3) };
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D, width: number, time: number, distance: number) {
    this.drawFar(ctx, width, distance * 0.12);
    const offset = distance * 0.24;
    for (const b of this.near) {
      const x = Math.round(wrap(b.x - offset, NEAR_TILE, 140));
      if (x > width || x + b.w < 0) continue;
      const top = WORLD.horizonY - b.h;
      this.drawBody(ctx, x, top, b.w, b.h);
      if (b.kind === "rack") this.drawRack(ctx, b, x, top, time);
      else if (b.kind === "screen") this.drawScreen(ctx, b, x, top, time);
      else if (b.kind === "sign") this.drawSign(ctx, b, x, top, time);
      else this.drawAntenna(ctx, b, x, top, time);
    }
  }

  private drawFar(ctx: CanvasRenderingContext2D, width: number, offset: number) {
    for (const b of this.far) {
      const x = Math.round(wrap(b.x - offset, FAR_TILE, 100));
      if (x > width || x + b.w < 0) continue;
      const top = WORLD.horizonY - b.h;
      ctx.fillStyle = "#0d0a24";
      ctx.fillRect(x, top, b.w, b.h);
      ctx.fillStyle = "rgba(167, 139, 250, 0.18)";
      for (const l of b.lights) ctx.fillRect(x + l.x, top + l.y, 2, 2);
    }
  }

  private drawBody(ctx: CanvasRenderingContext2D, x: number, top: number, w: number, h: number) {
    ctx.fillStyle = BODY;
    ctx.fillRect(x, top, w, h);
    ctx.fillStyle = BODY_EDGE;
    ctx.fillRect(x, top, w, 2);
    ctx.fillRect(x, top, 1, h);
  }

  private drawLeds(ctx: CanvasRenderingContext2D, leds: Led[], x: number, top: number, time: number, w = 4, h = 3) {
    for (const l of leds) {
      const on = Math.sin(time * l.rate + l.phase) > -0.4;
      ctx.globalAlpha = on ? 0.8 : 0.12;
      ctx.fillStyle = l.color;
      ctx.fillRect(x + l.x, top + l.y, w, h);
    }
    ctx.globalAlpha = 1;
  }

  /** Stacked rack units with status LEDs and vent grilles. */
  private drawRack(ctx: CanvasRenderingContext2D, b: RackTower, x: number, top: number, time: number) {
    for (let u = 0; u < b.units; u++) {
      const uy = top + 6 + u * 9;
      ctx.fillStyle = PANEL;
      ctx.fillRect(x + 4, uy, b.w - 8, 7);
      if (b.vents.includes(u)) {
        ctx.fillStyle = "#1d1645";
        for (let vx = x + 7; vx < x + b.w - 16; vx += 3) ctx.fillRect(vx, uy + 2, 1, 3);
      }
    }
    this.drawLeds(ctx, b.leds, x, top, time, 2, 2);
  }

  /** A giant monitor on the facade showing code, or a deploy progress bar. */
  private drawScreen(ctx: CanvasRenderingContext2D, b: ScreenTower, x: number, top: number, time: number) {
    const sx = x + 5;
    const sy = top + 6;
    const sw = b.w - 10;
    const sh = b.screenH;
    ctx.fillStyle = BODY_EDGE;
    ctx.fillRect(sx - 2, sy - 2, sw + 4, sh + 4);
    ctx.fillStyle = "#050b1c";
    ctx.fillRect(sx, sy, sw, sh);

    if (b.mode === "code") {
      // Lines scroll upward one row at a time.
      const rows = Math.floor((sh - 4) / 5);
      const scroll = Math.floor(time * 1.5);
      for (let r = 0; r < rows; r++) {
        const line = b.lines[(r + scroll) % b.lines.length];
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = line.color;
        ctx.fillRect(sx + 3 + line.indent, sy + 3 + r * 5, Math.max(4, (sw - 8 - line.indent) * line.len), 2);
      }
      ctx.globalAlpha = 1;
      if (Math.floor(time * 2) % 2 === 0) {
        ctx.fillStyle = "#67e8f9";
        ctx.fillRect(sx + 3, sy + 3 + rows * 5 - 5, 3, 3);
      }
    } else {
      ctx.font = `700 7px ${this.fonts.mono}`;
      ctx.textBaseline = "top";
      ctx.textAlign = "left";
      ctx.fillStyle = "#86efac";
      const dots = ".".repeat(Math.floor(time * 2) % 4);
      ctx.fillText(`DEPLOYING${dots}`, sx + 4, sy + 6);
      const progress = (time * 0.15 + b.x * 0.001) % 1;
      ctx.fillStyle = "#14532d";
      ctx.fillRect(sx + 4, sy + sh - 12, sw - 8, 5);
      ctx.fillStyle = "#4ade80";
      ctx.fillRect(sx + 4, sy + sh - 12, (sw - 8) * progress, 5);
    }
    // Screen glow on the facade below it
    ctx.fillStyle = "rgba(103, 232, 249, 0.06)";
    ctx.fillRect(x + 1, sy + sh + 2, b.w - 1, 10);
    this.drawLeds(ctx, b.windows, x, top, time);
  }

  /** A neon sign on poles above the roof. */
  private drawSign(ctx: CanvasRenderingContext2D, b: SignTower, x: number, top: number, time: number) {
    this.drawLeds(ctx, b.windows, x, top, time);
    ctx.font = `700 13px ${this.fonts.mono}`;
    ctx.textBaseline = "alphabetic";
    ctx.textAlign = "center";
    const cx = x + b.w / 2;
    const textW = ctx.measureText(b.text).width;
    ctx.fillStyle = BODY_EDGE;
    ctx.fillRect(cx - textW / 2 + 2, top - 6, 2, 6);
    ctx.fillRect(cx + textW / 2 - 4, top - 6, 2, 6);
    // Occasional neon flicker
    const flicker = Math.sin(time * 13 + b.x) > 0.97 ? 0.35 : 1;
    ctx.globalAlpha = flicker;
    const sprite = this.signSprite(ctx.font, b.text, b.color);
    if (sprite) {
      ctx.drawImage(sprite.canvas, cx - sprite.w / 2, top - 8 - sprite.baseline, sprite.w, sprite.h);
    } else {
      // Font not loaded yet: plain text until the sprite can be built with the right font.
      ctx.fillStyle = b.color;
      ctx.fillText(b.text, cx, top - 8);
    }
    ctx.globalAlpha = 1;
  }

  private signSprite(font: string, text: string, color: string): SignSprite | null {
    const key = `${text}|${color}`;
    const cached = this.signSprites.get(key);
    if (cached) return cached;
    if (!document.fonts.check(font)) return null;

    const canvas = document.createElement("canvas");
    const sctx = canvas.getContext("2d")!;
    sctx.font = font;
    const metrics = sctx.measureText(text);
    const ascent = Math.ceil(metrics.actualBoundingBoxAscent);
    const descent = Math.ceil(metrics.actualBoundingBoxDescent);
    const pad = SIGN_GLOW * 1.5;
    const w = Math.ceil(metrics.width + pad * 2);
    const h = ascent + descent + pad * 2;
    canvas.width = w * SIGN_SPRITE_SCALE;
    canvas.height = h * SIGN_SPRITE_SCALE;
    sctx.scale(SIGN_SPRITE_SCALE, SIGN_SPRITE_SCALE);
    sctx.font = font;
    sctx.textAlign = "center";
    sctx.textBaseline = "alphabetic";
    sctx.shadowColor = color;
    sctx.shadowBlur = SIGN_GLOW * SIGN_SPRITE_SCALE;
    sctx.fillStyle = color;
    sctx.fillText(text, w / 2, pad + ascent);

    const sprite = { canvas, w, h, baseline: pad + ascent };
    this.signSprites.set(key, sprite);
    return sprite;
  }

  /** A thin mast with pulsing Wi-Fi arcs and a red beacon. */
  private drawAntenna(ctx: CanvasRenderingContext2D, b: AntennaTower, x: number, top: number, time: number) {
    this.drawLeds(ctx, b.windows, x, top, time);
    const cx = x + Math.floor(b.w / 2);
    const tipY = top - b.mast;
    ctx.fillStyle = BODY_EDGE;
    ctx.fillRect(cx - 1, tipY, 2, b.mast);
    ctx.fillRect(cx - 4, top - 4, 8, 4);

    ctx.lineWidth = 1.5;
    ctx.lineCap = "round";
    for (let i = 0; i < 3; i++) {
      // Arcs light up outward in sequence, like a signal pulse.
      const pulse = (time * 1.5 - i * 0.25) % 1;
      ctx.globalAlpha = Math.max(0.12, 1 - pulse * 1.6) * 0.85;
      ctx.strokeStyle = "#22d3ee";
      ctx.beginPath();
      ctx.arc(cx, tipY + 4, 4 + i * 4, Math.PI * 1.25, Math.PI * 1.75);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    const on = Math.sin(time * 3 + b.x) > 0;
    ctx.fillStyle = on ? "#f43f5e" : "#4c0519";
    ctx.fillRect(cx - 1.5, tipY - 2, 3, 3);
  }
}
