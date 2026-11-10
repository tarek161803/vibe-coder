import type { GameEvent } from "@/game/types";

/** Vibration patterns (ms). Only the crash buzzes: vibrating during play felt like noise. */
const PATTERNS: Partial<Record<GameEvent, number | number[]>> = {
  crash: [60, 40, 120],
};

/** Buzzes the phone where supported (Android browsers; iOS Safari has no Vibration API). */
export function vibrate(event: GameEvent) {
  const pattern = PATTERNS[event];
  if (pattern === undefined || typeof navigator === "undefined" || !("vibrate" in navigator)) return;
  try {
    navigator.vibrate(pattern);
  } catch {
    // Some browsers throw when vibration isn't allowed yet; it's only a nicety.
  }
}
