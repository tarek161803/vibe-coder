import { WORLD } from "../config";
import type { GameFonts } from "../types";
import { Clouds } from "./clouds";
import { Road } from "./road";
import { Skyline } from "./skyline";

/** Deterministic RNG so the scenery looks the same every run. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Star { x: number; y: number; size: number; phase: number }

/** Repeating tile widths per layer (must exceed WORLD.maxWidth + margin). */
const STAR_TILE = 1500;

function wrap(x: number, tile: number, margin: number) {
  return ((((x + margin) % tile) + tile) % tile) - margin;
}

export class Background {
  private distance = 0;
  private stars: Star[] = [];
  private clouds: Clouds;
  private skyline: Skyline;
  private road: Road;
  private skyGradient: CanvasGradient | null = null;

  constructor(fonts: GameFonts) {
    const rnd = mulberry32(1337);

    for (let i = 0; i < 70; i++) {
      this.stars.push({ x: rnd() * STAR_TILE, y: 6 + rnd() * 240, size: rnd() > 0.85 ? 2 : 1, phase: rnd() * 10 });
    }

    this.clouds = new Clouds(rnd);
    this.skyline = new Skyline(rnd, fonts);
    this.road = new Road();
  }

  reset() {
    this.distance = 0;
  }

  update(dx: number) {
    this.distance += dx;
  }

  get scroll() {
    return this.distance;
  }

  draw(ctx: CanvasRenderingContext2D, width: number, time: number) {
    this.drawSky(ctx, width, time);
    this.clouds.draw(ctx, width, time, this.distance);
    this.skyline.draw(ctx, width, time, this.distance);
    this.road.draw(ctx, width, this.distance);
  }

  private drawSky(ctx: CanvasRenderingContext2D, width: number, time: number) {
    if (!this.skyGradient) {
      const g = ctx.createLinearGradient(0, 0, 0, WORLD.horizonY);
      g.addColorStop(0, "#070a1c");
      g.addColorStop(0.55, "#140f36");
      g.addColorStop(1, "#2a1250");
      this.skyGradient = g;
    }
    ctx.fillStyle = this.skyGradient;
    ctx.fillRect(0, 0, width, WORLD.horizonY);

    // Stars
    const starOffset = this.distance * 0.03;
    for (const s of this.stars) {
      const x = wrap(s.x - starOffset, STAR_TILE, 4);
      if (x > width) continue;
      ctx.globalAlpha = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(time * 1.6 + s.phase));
      ctx.fillStyle = "#e0e7ff";
      ctx.fillRect(Math.round(x), s.y, s.size, s.size);
    }
    ctx.globalAlpha = 1;
  }
}
