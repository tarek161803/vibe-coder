import { WORLD } from "../config";

/**
 * The running surface: a neon synthwave grid floor seen in perspective, from
 * the horizon (where the city stands) down to the bottom edge. The player runs
 * on it at WORLD.groundY, partway down. Depth lines converge on a vanishing
 * point and slide with parallax, tuned so the floor at the player's depth moves
 * exactly with the world; cross lines bunch up and fade toward the horizon.
 */

/** Spacing of the depth lines at the horizon, in world units. */
const LINE_SPACING = 48;
/** How much wider the grid is at the bottom edge than at the horizon. */
const SPREAD = 2.2;
/** Cross lines from the horizon to the bottom edge. */
const CROSS_LINES = 6;
/** >1 bunches cross lines toward the horizon, like a floor receding into the distance. */
const PERSPECTIVE = 1.9;

const TOP = WORLD.horizonY;
const BOTTOM = WORLD.height;
const DEPTH = BOTTOM - TOP;

/** The gradients never change, so they're built once instead of every frame. */
function makeGradients(ctx: CanvasRenderingContext2D) {
  const gradient = (y0: number, y1: number, from: string, to: string) => {
    const g = ctx.createLinearGradient(0, y0, 0, y1);
    g.addColorStop(0, from);
    g.addColorStop(1, to);
    return g;
  };
  return {
    floor: gradient(TOP, BOTTOM, "#1d0f3d", "#07051a"),
    glow: gradient(TOP, TOP + 22, "rgba(34, 211, 238, 0.07)", "rgba(34, 211, 238, 0)"),
    fade: gradient(TOP, BOTTOM, "rgba(232, 121, 249, 0.06)", "rgba(232, 121, 249, 0.42)"),
    vignette: gradient(TOP + DEPTH * 0.5, BOTTOM, "rgba(5, 4, 15, 0)", "rgba(5, 4, 15, 0.6)"),
  };
}

export class Road {
  private gradients: ReturnType<typeof makeGradients> | null = null;

  draw(ctx: CanvasRenderingContext2D, width: number, distance: number) {
    const top = TOP;
    const bottom = BOTTOM;
    const depth = DEPTH;
    // Grid scale at the player's depth, so the floor under their feet moves at world speed.
    const feetScale = 1 + (SPREAD - 1) * ((WORLD.groundY - top) / depth);
    const g = (this.gradients ??= makeGradients(ctx));

    // Floor
    ctx.fillStyle = g.floor;
    ctx.fillRect(0, top, width, depth);

    // Glow spilling from the horizon onto the floor
    ctx.fillStyle = g.glow;
    ctx.fillRect(0, top, width, 22);

    // Depth lines: faint at the horizon, brighter close to the viewer.
    const vanishX = width / 2;
    const shift = (distance / feetScale) % LINE_SPACING;
    const reach = Math.ceil(vanishX / LINE_SPACING) + 2;
    ctx.strokeStyle = g.fade;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = -reach; i <= reach; i++) {
      const x = vanishX + i * LINE_SPACING - shift;
      ctx.moveTo(x, top);
      ctx.lineTo(vanishX + (x - vanishX) * SPREAD, bottom);
    }
    ctx.stroke();

    // Cross lines, closer together near the horizon
    for (let i = 1; i <= CROSS_LINES; i++) {
      const t = i / CROSS_LINES;
      const y = Math.round(top + depth * t ** PERSPECTIVE) + 0.5;
      ctx.strokeStyle = `rgba(232, 121, 249, ${0.08 + 0.34 * t})`;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Darken toward the bottom edge
    ctx.fillStyle = g.vignette;
    ctx.fillRect(0, top + depth * 0.5, width, depth * 0.5);

    // Neon horizon at the road's far edge, with a soft halo (layered rects: shadowBlur is slow on phones)
    ctx.fillStyle = "rgba(34, 211, 238, 0.12)";
    ctx.fillRect(0, top - 2, width, 5.5);
    ctx.fillStyle = "rgba(34, 211, 238, 0.18)";
    ctx.fillRect(0, top - 1, width, 3.5);
    ctx.fillStyle = "rgba(103, 232, 249, 0.45)";
    ctx.fillRect(0, top, width, 1.5);
  }
}
