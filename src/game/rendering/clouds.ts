/**
 * A few soft night clouds in two depths. Each cloud is built from overlapping
 * puffs on a flat base, pre-rendered once to an offscreen canvas, then drawn
 * with parallax and a slow drift. Kept sparse so the sky stays calm.
 */

type Rng = () => number;
type CloudKind = "puffy" | "long" | "small";

interface Cloud {
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Layer {
  clouds: Cloud[];
  tile: number;
  parallax: number;
  /** Extra drift in world units per second, independent of running. */
  drift: number;
  alpha: number;
}

/** Offscreen resolution multiplier, so clouds stay smooth when the canvas is scaled up. */
const RES = 3;

function makeCloud(rnd: Rng, kind: CloudKind, scale: number): Omit<Cloud, "x" | "y"> {
  const spec = {
    puffy: { w: [120, 170], aspect: 0.42, puffs: 26 },
    long: { w: [180, 250], aspect: 0.22, puffs: 28 },
    small: { w: [55, 85], aspect: 0.45, puffs: 12 },
  }[kind];
  const coreW = (spec.w[0] + rnd() * (spec.w[1] - spec.w[0])) * scale;
  const coreH = coreW * spec.aspect;
  // Padding so the soft edges of the outer puffs aren't clipped.
  const pad = coreH * 0.6;
  const w = coreW + pad * 2;
  const h = coreH + pad * 2;

  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(w * RES);
  canvas.height = Math.ceil(h * RES);
  const ctx = canvas.getContext("2d")!;
  ctx.scale(RES, RES);

  // Soft puffs scattered in an elongated blob: fuller and higher in the middle,
  // thinner toward the ends, with an uneven rounded underside.
  for (let i = 0; i < spec.puffs; i++) {
    const across = (rnd() + rnd()) / 2 - 0.5; // -0.5..0.5, biased to the centre
    const centreWeight = Math.cos(across * Math.PI); // 1 in the middle, 0 at the ends
    const x = pad + coreW / 2 + across * coreW * 0.9;
    const y = pad + coreH * 0.62 - centreWeight * coreH * 0.3 + (rnd() - 0.5) * coreH * 0.3;
    const r = coreH * (0.22 + 0.3 * centreWeight) * (0.75 + rnd() * 0.5);

    // Lower puffs catch more pink light from the city below.
    const low = Math.min(1, Math.max(0, (y - pad) / coreH));
    const red = Math.round(46 + 50 * low);
    const green = Math.round(30 + 12 * low);
    const blue = Math.round(96 + 24 * low);
    const puff = ctx.createRadialGradient(x, y, 0, x, y, r);
    // Mostly solid with a short soft edge, so the cloud keeps a readable outline.
    puff.addColorStop(0, `rgba(${red}, ${green}, ${blue}, 0.95)`);
    puff.addColorStop(0.72, `rgba(${red}, ${green}, ${blue}, 0.9)`);
    puff.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);
    ctx.fillStyle = puff;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  return { canvas, w, h };
}

function makeLayer(
  rnd: Rng,
  options: { count: number; tile: number; parallax: number; drift: number; alpha: number; scale: number; y: [number, number] },
): Layer {
  const kinds: CloudKind[] = ["puffy", "long", "small", "puffy", "long"];
  const clouds: Cloud[] = [];
  for (let i = 0; i < options.count; i++) {
    const cloud = makeCloud(rnd, kinds[i % kinds.length], options.scale);
    clouds.push({
      ...cloud,
      // Spread evenly across the tile with some jitter, so they never bunch up.
      x: (i / options.count) * options.tile + rnd() * (options.tile / options.count) * 0.5,
      y: options.y[0] + rnd() * (options.y[1] - options.y[0]),
    });
  }
  return { clouds, tile: options.tile, parallax: options.parallax, drift: options.drift, alpha: options.alpha };
}

export class Clouds {
  private layers: Layer[];

  constructor(rnd: Rng) {
    this.layers = [
      makeLayer(rnd, { count: 4, tile: 1700, parallax: 0.04, drift: 3, alpha: 0.5, scale: 0.75, y: [25, 100] }),
      makeLayer(rnd, { count: 3, tile: 1500, parallax: 0.1, drift: 6, alpha: 0.75, scale: 1, y: [60, 150] }),
    ];
  }

  draw(ctx: CanvasRenderingContext2D, width: number, time: number, distance: number) {
    for (const layer of this.layers) {
      const offset = distance * layer.parallax + time * layer.drift;
      ctx.globalAlpha = layer.alpha;
      for (const c of layer.clouds) {
        const x = ((((c.x - offset + c.w) % layer.tile) + layer.tile) % layer.tile) - c.w;
        if (x > width) continue;
        ctx.drawImage(c.canvas, x, c.y, c.w, c.h);
      }
    }
    ctx.globalAlpha = 1;
  }
}
