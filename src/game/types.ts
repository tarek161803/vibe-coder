import type { TechInfo } from "@/content/types";

export type GamePhase = "ready" | "playing" | "paused" | "crashed" | "over";

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface GameOverResult {
  tech: TechInfo;
  score: number;
}

/** Moments the UI reacts to with sound and vibration. */
export type GameEvent = "jump" | "slide" | "crash" | "tokens" | "dodged" | "overdrive";

export interface GameCallbacks {
  onPhaseChange: (phase: GamePhase) => void;
  onGameOver: (result: GameOverResult) => void;
  /** Fired when the number of "agents running" changes (it grows with the burn rate). */
  onAgentsChange: (agents: number) => void;
  onEvent: (event: GameEvent) => void;
}

export interface GameFonts {
  /** Pixel font for the HUD. */
  pixel: string;
  /** Monospace font for the scrolling code backdrop. */
  mono: string;
}

export function intersects(a: Rect, b: Rect): boolean {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}
