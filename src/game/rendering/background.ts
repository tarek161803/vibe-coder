import { WORLD } from "../config";
import type { GameFonts } from "../types";

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

const SNIPPETS = [
  "const vibe = await ship();",
  'git commit -m "fix: everything"',
  "npm run dev",
  "if (works) { dontTouch(); }",
  "// TODO: refactor later",
  'console.log("here 2");',
  "export default App;",
  "while (!coffee) brew();",
  "return <Vibes />;",
  "SELECT * FROM bugs;",
  "docker compose up -d",
  'it("works on my machine")',
  "rm -rf node_modules && npm i",
  "git push --force # yolo",
  "type Mood = 'flow' | 'stuck';",
];

const GLYPHS = ["{ }", "</>", "=>", "( )", "[ ]", "&&", "//", "!=", "++", ";", "#", "$_"];
const NEON = ["#22d3ee", "#e879f9", "#a78bfa", "#4ade80", "#facc15"];

interface Star { x: number; y: number; size: number; phase: number }
interface CodeLine { x: number; y: number; text: string }
interface Glyph { x: number; y: number; text: string; size: number; color: string; phase: number }
interface Light { x: number; y: number; color: string; phase: number; rate: number }
interface Building { x: number; w: number; h: number; lights: Light[]; antenna: boolean }

/** Repeating tile widths per layer (must exceed WORLD.maxWidth + margin). */
const STAR_TILE = 1500;
const CODE_TILE = 1800;
const SKYLINE_TILE = 1500;
const GLYPH_TILE = 1400;

function wrap(x: number, tile: number, margin: number) {
  return ((((x + margin) % tile) + tile) % tile) - margin;
}

export class Background {
  private distance = 0;
  private stars: Star[] = [];
  private code: CodeLine[] = [];
  private glyphs: Glyph[] = [];
  private buildings: Building[] = [];
  private skyGradient: CanvasGradient | null = null;

  constructor(private fonts: GameFonts) {
    const rnd = mulberry32(1337);

    for (let i = 0; i < 70; i++) {
      this.stars.push({ x: rnd() * STAR_TILE, y: 6 + rnd() * 240, size: rnd() > 0.85 ? 2 : 1, phase: rnd() * 10 });
    }

    for (let i = 0; i < 9; i++) {
      this.code.push({
        x: (i / 9) * CODE_TILE + rnd() * 80,
        y: 30 + (i % 5) * 54 + rnd() * 10,
        text: SNIPPETS[Math.floor(rnd() * SNIPPETS.length)],
      });
    }

    for (let i = 0; i < 10; i++) {
      this.glyphs.push({
        x: (i / 10) * GLYPH_TILE + rnd() * 60,
        y: 40 + rnd() * 200,
        text: GLYPHS[Math.floor(rnd() * GLYPHS.length)],
        size: 14 + Math.floor(rnd() * 10),
        color: NEON[Math.floor(rnd() * NEON.length)],
        phase: rnd() * 10,
      });
    }

    let x = 0;
    while (x < SKYLINE_TILE) {
      const w = 36 + Math.floor(rnd() * 70);
      const h = 34 + Math.floor(rnd() * 84);
      const lights: Light[] = [];
      for (let ly = 8; ly < h - 6; ly += 9) {
        for (let lx = 6; lx < w - 6; lx += 9) {
          if (rnd() > 0.72) {
            lights.push({
              x: lx,
              y: ly,
              color: NEON[Math.floor(rnd() * NEON.length)],
              phase: rnd() * 10,
              rate: 0.4 + rnd() * 1.6,
            });
          }
        }
      }
      this.buildings.push({ x, w, h, lights, antenna: rnd() > 0.7 });
      x += w + 4 + Math.floor(rnd() * 26);
    }
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
    this.drawSkyline(ctx, width, time);
    this.drawGlyphs(ctx, width, time);
    this.drawGround(ctx, width);
  }

  private drawSky(ctx: CanvasRenderingContext2D, width: number, time: number) {
    if (!this.skyGradient) {
      const g = ctx.createLinearGradient(0, 0, 0, WORLD.groundY);
      g.addColorStop(0, "#070a1c");
      g.addColorStop(0.55, "#140f36");
      g.addColorStop(1, "#2a1250");
      this.skyGradient = g;
    }
    ctx.fillStyle = this.skyGradient;
    ctx.fillRect(0, 0, width, WORLD.groundY);

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

    // Synthwave sun with horizontal cut-outs
    const cx = width * 0.74;
    const cy = WORLD.groundY - 98;
    const r = 62;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.clip();
    const sun = ctx.createLinearGradient(0, cy - r, 0, cy + r);
    sun.addColorStop(0, "#fde047");
    sun.addColorStop(0.5, "#fb7185");
    sun.addColorStop(1, "#c026d3");
    ctx.fillStyle = sun;
    ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
    ctx.fillStyle = this.skyGradient;
    for (let i = 0; i < 6; i++) {
      const y = cy + 4 + i * 10;
      ctx.fillRect(cx - r, y, r * 2, 1.5 + i * 1.1);
    }
    ctx.restore();

    // Faint code scrolling far in the distance
    const codeOffset = this.distance * 0.08;
    ctx.font = `11px ${this.fonts.mono}`;
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillStyle = "rgba(167, 139, 250, 0.13)";
    for (const line of this.code) {
      const x = wrap(line.x - codeOffset, CODE_TILE, 260);
      if (x > width) continue;
      ctx.fillText(line.text, x, line.y);
    }
  }

  private drawSkyline(ctx: CanvasRenderingContext2D, width: number, time: number) {
    const offset = this.distance * 0.22;
    const base = WORLD.groundY;
    for (const b of this.buildings) {
      const x = Math.round(wrap(b.x - offset, SKYLINE_TILE, 120));
      if (x > width) continue;
      const top = base - b.h;
      ctx.fillStyle = "#120d2e";
      ctx.fillRect(x, top, b.w, b.h);
      ctx.fillStyle = "#2b2063";
      ctx.fillRect(x, top, b.w, 2);
      if (b.antenna) {
        ctx.fillRect(x + Math.floor(b.w / 2), top - 10, 2, 10);
        const on = Math.sin(time * 3 + b.x) > 0;
        ctx.fillStyle = on ? "#f43f5e" : "#4c0519";
        ctx.fillRect(x + Math.floor(b.w / 2) - 1, top - 13, 4, 3);
      }
      for (const l of b.lights) {
        const on = Math.sin(time * l.rate + l.phase) > -0.5;
        ctx.globalAlpha = on ? 0.75 : 0.12;
        ctx.fillStyle = l.color;
        ctx.fillRect(x + l.x, top + l.y, 4, 3);
      }
      ctx.globalAlpha = 1;
    }
  }

  private drawGlyphs(ctx: CanvasRenderingContext2D, width: number, time: number) {
    const offset = this.distance * 0.45;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    for (const g of this.glyphs) {
      const x = wrap(g.x - offset, GLYPH_TILE, 60);
      if (x > width) continue;
      ctx.font = `700 ${g.size}px ${this.fonts.mono}`;
      ctx.globalAlpha = 0.22;
      ctx.fillStyle = g.color;
      ctx.fillText(g.text, x, g.y + Math.sin(time * 0.8 + g.phase) * 5);
    }
    ctx.globalAlpha = 1;
  }

  private drawGround(ctx: CanvasRenderingContext2D, width: number) {
    const top = WORLD.groundY;
    const bottom = WORLD.height;

    const floor = ctx.createLinearGradient(0, top, 0, bottom);
    floor.addColorStop(0, "#1d0f3d");
    floor.addColorStop(1, "#07051a");
    ctx.fillStyle = floor;
    ctx.fillRect(0, top, width, bottom - top);

    // Perspective grid
    ctx.strokeStyle = "rgba(232, 121, 249, 0.28)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (const d of [7, 16, 28, 43, 62]) {
      ctx.moveTo(0, top + d + 0.5);
      ctx.lineTo(width, top + d + 0.5);
    }
    const spacing = 48;
    const vanishX = width / 2;
    const shift = this.distance % spacing;
    for (let x = -spacing * 6 - shift; x < width + spacing * 6; x += spacing) {
      ctx.moveTo(x, top);
      ctx.lineTo(vanishX + (x - vanishX) * 2.4, bottom);
    }
    ctx.stroke();

    // Neon horizon line
    ctx.save();
    ctx.shadowColor = "#22d3ee";
    ctx.shadowBlur = 10;
    ctx.fillStyle = "#67e8f9";
    ctx.fillRect(0, top, width, 2);
    ctx.restore();
  }
}
