/**
 * Writes src/app/icon.svg (favicon, also used on the share image) by drawing the
 * game's own vector runner through a canvas-to-SVG recorder, so the icon always
 * matches the character in the game. Run: npx tsx scripts/generate-app-icon.mts
 */
import { writeFileSync } from "node:fs";
import { drawCharacter, runPose } from "../src/game/rendering/character";

type Matrix = [number, number, number, number, number, number];

const multiply = (m: Matrix, n: Matrix): Matrix => [
  m[0] * n[0] + m[2] * n[1],
  m[1] * n[0] + m[3] * n[1],
  m[0] * n[2] + m[2] * n[3],
  m[1] * n[2] + m[3] * n[3],
  m[0] * n[4] + m[2] * n[5] + m[4],
  m[1] * n[4] + m[3] * n[5] + m[5],
];

const fmt = (n: number) => String(Math.round(n * 1000) / 1000);

/** Just enough of CanvasRenderingContext2D for drawCharacter, emitting SVG elements. */
class SvgRecorder {
  fillStyle = "#000";
  strokeStyle = "#000";
  lineWidth = 1;
  lineCap = "butt";
  lineJoin = "miter";

  private m: Matrix = [1, 0, 0, 1, 0, 0];
  private stack: { m: Matrix; closesGroup: boolean }[] = [];
  private closesGroup = false;
  private d = "";
  private hasPoint = false;
  private clipCount = 0;
  readonly defs: string[] = [];
  readonly body: string[] = [];
  /** Device-space points touched, for fitting the viewBox. */
  readonly bounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
  private pathPoints: [number, number, number][] = [];

  save() {
    this.stack.push({ m: [...this.m] as Matrix, closesGroup: this.closesGroup });
    this.closesGroup = false;
  }
  restore() {
    if (this.closesGroup) this.body.push("</g>");
    const frame = this.stack.pop()!;
    this.m = frame.m;
    this.closesGroup = frame.closesGroup;
  }
  translate(x: number, y: number) {
    this.m = multiply(this.m, [1, 0, 0, 1, x, y]);
  }
  rotate(a: number) {
    this.m = multiply(this.m, [Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]);
  }
  scale(x: number, y: number) {
    this.m = multiply(this.m, [x, 0, 0, y, 0, 0]);
  }

  beginPath() {
    this.d = "";
    this.hasPoint = false;
    this.pathPoints = [];
  }
  private point(x: number, y: number, r = 0) {
    this.pathPoints.push([x, y, r]);
  }
  moveTo(x: number, y: number) {
    this.d += `M${fmt(x)} ${fmt(y)}`;
    this.hasPoint = true;
    this.point(x, y);
  }
  lineTo(x: number, y: number) {
    this.d += `${this.hasPoint ? "L" : "M"}${fmt(x)} ${fmt(y)}`;
    this.hasPoint = true;
    this.point(x, y);
  }
  quadraticCurveTo(cx: number, cy: number, x: number, y: number) {
    this.d += `Q${fmt(cx)} ${fmt(cy)} ${fmt(x)} ${fmt(y)}`;
    this.point(cx, cy);
    this.point(x, y);
  }
  closePath() {
    this.d += "Z";
  }
  arc(cx: number, cy: number, r: number, a0: number, a1: number) {
    this.ellipse(cx, cy, r, r, 0, a0, a1);
  }
  ellipse(cx: number, cy: number, rx: number, ry: number, _rotation: number, a0: number, a1: number) {
    const at = (a: number) => `${fmt(cx + rx * Math.cos(a))} ${fmt(cy + ry * Math.sin(a))}`;
    const sweep = a1 - a0;
    this.d += `${this.hasPoint ? "L" : "M"}${at(a0)}`;
    if (sweep >= Math.PI * 2 - 1e-6) {
      this.d += `A${fmt(rx)} ${fmt(ry)} 0 1 1 ${at(a0 + Math.PI)}A${fmt(rx)} ${fmt(ry)} 0 1 1 ${at(a0)}`;
    } else {
      this.d += `A${fmt(rx)} ${fmt(ry)} 0 ${sweep > Math.PI ? 1 : 0} 1 ${at(a1)}`;
    }
    this.hasPoint = true;
    this.point(cx, cy, Math.max(rx, ry));
  }
  roundRect(x: number, y: number, w: number, h: number, r: number) {
    r = Math.min(r, w / 2, h / 2);
    this.d +=
      `M${fmt(x + r)} ${fmt(y)}H${fmt(x + w - r)}A${fmt(r)} ${fmt(r)} 0 0 1 ${fmt(x + w)} ${fmt(y + r)}` +
      `V${fmt(y + h - r)}A${fmt(r)} ${fmt(r)} 0 0 1 ${fmt(x + w - r)} ${fmt(y + h)}` +
      `H${fmt(x + r)}A${fmt(r)} ${fmt(r)} 0 0 1 ${fmt(x)} ${fmt(y + h - r)}` +
      `V${fmt(y + r)}A${fmt(r)} ${fmt(r)} 0 0 1 ${fmt(x + r)} ${fmt(y)}Z`;
    this.hasPoint = true;
    this.point(x, y);
    this.point(x + w, y + h);
  }

  private transformAttr() {
    return `transform="matrix(${this.m.map(fmt).join(" ")})"`;
  }
  private track(pad: number) {
    const [a, b, c, d, e, f] = this.m;
    const k = Math.hypot(a, b);
    for (const [x, y, r] of this.pathPoints) {
      const px = a * x + c * y + e;
      const py = b * x + d * y + f;
      const extent = (r + pad) * k;
      this.bounds.minX = Math.min(this.bounds.minX, px - extent);
      this.bounds.minY = Math.min(this.bounds.minY, py - extent);
      this.bounds.maxX = Math.max(this.bounds.maxX, px + extent);
      this.bounds.maxY = Math.max(this.bounds.maxY, py + extent);
    }
  }
  fill() {
    this.body.push(`<path d="${this.d}" fill="${this.fillStyle}" ${this.transformAttr()}/>`);
    this.track(0);
  }
  stroke() {
    this.body.push(
      `<path d="${this.d}" fill="none" stroke="${this.strokeStyle}" stroke-width="${fmt(this.lineWidth)}" ` +
        `stroke-linecap="${this.lineCap}" stroke-linejoin="${this.lineJoin}" ${this.transformAttr()}/>`,
    );
    this.track(this.lineWidth / 2);
  }
  fillRect(x: number, y: number, w: number, h: number) {
    this.body.push(
      `<rect x="${fmt(x)}" y="${fmt(y)}" width="${fmt(w)}" height="${fmt(h)}" fill="${this.fillStyle}" ${this.transformAttr()}/>`,
    );
  }
  clip() {
    const id = `clip${this.clipCount++}`;
    this.defs.push(`<clipPath id="${id}"><path d="${this.d}" ${this.transformAttr()}/></clipPath>`);
    this.body.push(`<g clip-path="url(#${id})">`);
    this.closesGroup = true;
  }
}

/** A mid-stride frame: legs spread, front knee lifting, arms swinging. */
const STRIDE_PHASE = 1.15;
const recorder = new SvgRecorder();
drawCharacter(recorder as unknown as CanvasRenderingContext2D, 0, 0, runPose(STRIDE_PHASE, 1));

// Fit the runner into a 64×64 tile with even padding.
const TILE = 64;
const PADDING = 6;
const { minX, minY, maxX, maxY } = recorder.bounds;
const scale = Math.min((TILE - PADDING * 2) / (maxX - minX), (TILE - PADDING * 2) / (maxY - minY));
const offsetX = (TILE - (maxX - minX) * scale) / 2 - minX * scale;
const offsetY = (TILE - (maxY - minY) * scale) / 2 - minY * scale;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${TILE} ${TILE}">
  <defs>
    <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#22d3ee"/>
      <stop offset="0.5" stop-color="#8b5cf6"/>
      <stop offset="1" stop-color="#d946ef"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.35" r="0.65">
      <stop offset="0" stop-color="#7c3aed" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    ${recorder.defs.join("\n    ")}
  </defs>
  <rect x="1.5" y="1.5" width="61" height="61" rx="13" fill="#0b0d1f" stroke="url(#edge)" stroke-width="3"/>
  <rect x="3" y="3" width="58" height="58" rx="11.5" fill="url(#glow)"/>
  <g transform="matrix(${fmt(scale)} 0 0 ${fmt(scale)} ${fmt(offsetX)} ${fmt(offsetY)})">
    ${recorder.body.join("\n    ")}
  </g>
</svg>
`;

writeFileSync(new URL("../src/app/icon.svg", import.meta.url), svg);
console.log(`Wrote src/app/icon.svg (${recorder.body.length} shapes)`);
