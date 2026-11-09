export type ObstacleKind = "technology" | "hazard";

/** Everything the game and the lesson modal need to know about one obstacle. */
export interface TechInfo {
  /** Stable id, also used as the persistence key for "discovered" entries. */
  id: string;
  name: string;
  kind: ObstacleKind;
  category: string;
  /** Brand/accent color used for glows and particles. */
  color: string;
  /** SVG markup (64×64 viewBox). */
  logo: string;
  description: string;
  /** For technologies: what it's used for. For hazards: how to deal with it. */
  highlights: string[];
  funFact: string;
  url: string;
  /** Relative spawn frequency. Defaults to 1. */
  spawnWeight?: number;
}

/**
 * Compact format for catalog entries (src/content/catalog/*). The logo is
 * filled in later: a Simple Icons logo if one matches, else a text badge.
 */
export interface CatalogEntry {
  /** Unique kebab-case id, e.g. "spring-boot". */
  id: string;
  name: string;
  /** 1–2 character label for the text badge (shown when there's no logo), e.g. "C#", "PG", "LL". */
  abbr: string;
  /** Short category shown in the modal, e.g. "Web Framework". */
  category: string;
  /** Brand color (or a fitting color) as #rrggbb. */
  color: string;
  description: string;
  /** Exactly three short bullet points: what it's used for. */
  highlights: string[];
  funFact: string;
  url: string;
  /** Relative spawn frequency. Defaults to 1; niche entries use 0.5. */
  spawnWeight?: number;
}

/** A single-color brand icon from Simple Icons (24×24 viewBox path). */
export interface BrandIcon {
  title: string;
  /** Brand color without "#". */
  hex: string;
  path: string;
}
