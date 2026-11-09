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

export class Road {
  draw(ctx: CanvasRenderingContext2D, width: number, distance: number) {
    const top = WORLD.horizonY;
    const bottom = WORLD.height;
    const depth = bottom - top;
    // Grid scale at the player's depth, so the floor under their feet moves at world speed.
    const feetScale = 1 + (SPREAD - 1) * ((WORLD.groundY - top) / depth);

    // Floor
    const floor = ctx.createLinearGradient(0, top, 0, bottom);
    floor.addColorStop(0, "#1d0f3d");
    floor.addColorStop(1, "#07051a");
    ctx.fillStyle = floor;
    ctx.fillRect(0, top, width, depth);

    // Glow spilling from the horizon onto the floor
    const glow = ctx.createLinearGradient(0, top, 0, top + 22);
    glow.addColorStop(0, "rgba(34, 211, 238, 0.07)");
    glow.addColorStop(1, "rgba(34, 211, 238, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, top, width, 22);

    // Depth lines: faint at the horizon, brighter close to the viewer.
    const vanishX = width / 2;
    const shift = (distance / feetScale) % LINE_SPACING;
    const reach = Math.ceil(vanishX / LINE_SPACING) + 2;
    const fade = ctx.createLinearGradient(0, top, 0, bottom);
    fade.addColorStop(0, "rgba(232, 121, 249, 0.06)");
    fade.addColorStop(1, "rgba(232, 121, 249, 0.42)");
    ctx.strokeStyle = fade;
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
    const vignette = ctx.createLinearGradient(0, top + depth * 0.5, 0, bottom);
    vignette.addColorStop(0, "rgba(5, 4, 15, 0)");
    vignette.addColorStop(1, "rgba(5, 4, 15, 0.6)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, top + depth * 0.5, width, depth * 0.5);

    // Neon horizon at the road's far edge
    ctx.save();
    ctx.shadowColor = "rgba(34, 211, 238, 0.5)";
    ctx.shadowBlur = 4;
    ctx.fillStyle = "rgba(103, 232, 249, 0.45)";
    ctx.fillRect(0, top, width, 1.5);
    ctx.restore();
  }
}
