import type { GameEvent } from "@/game/types";

/** Vibration patterns (ms). Jumps and slides are left out: buzzing on every input gets tiring. */
const PATTERNS: Partial<Record<GameEvent, number | number[]>> = {
  crash: [60, 40, 120],
  tokens: 30,
  dodged: 30,
  overdrive: [40, 30, 40],
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
