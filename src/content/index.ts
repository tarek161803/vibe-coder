/**
 * All learning content for the game: what each obstacle is, its logo and its
 * lesson. The game engine never imports this directly; React passes it in.
 */
import { CORE_TECHNOLOGIES } from "./coreTechnologies";
import { HAZARDS } from "./hazards";
import type { TechInfo } from "./types";

export type { ObstacleKind, TechInfo } from "./types";

/** Obstacles available immediately: core technologies plus hazards. */
export const STARTER_OBSTACLES: TechInfo[] = [...CORE_TECHNOLOGIES, ...HAZARDS];

/**
 * Loads the extended catalog (~1,100 entries) as a separate chunk.
 * Entries whose id already exists in the starter set are dropped.
 */
export async function loadCatalog(): Promise<TechInfo[]> {
  const { CATALOG } = await import("./catalog");
  const starterIds = new Set(STARTER_OBSTACLES.map((tech) => tech.id));
  return CATALOG.filter((tech) => !starterIds.has(tech.id));
}
