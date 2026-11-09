import { useSyncExternalStore } from "react";

/** Player progress persisted to localStorage (client-only, no backend). */
export interface Progress {
  highScore: number;
  /** Ids of technologies the player has crashed into (and learned about). */
  discovered: string[];
}

const STORAGE_KEY = "vibe-coder:progress:v1";
const EMPTY: Progress = { highScore: 0, discovered: [] };

let cache: Progress | null = null;
const listeners = new Set<() => void>();

function read(): Progress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return {
      highScore: typeof parsed.highScore === "number" ? parsed.highScore : 0,
      discovered: Array.isArray(parsed.discovered) ? parsed.discovered.filter((id) => typeof id === "string") : [],
    };
  } catch {
    return EMPTY;
  }
}

function write(next: Progress) {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable (private mode, quota) — progress just won't persist.
  }
  listeners.forEach((listener) => listener());
}

function getSnapshot(): Progress {
  if (!cache) cache = read();
  return cache;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export interface RunRecord {
  isNewHighScore: boolean;
}

export function recordRun(score: number, techId: string): RunRecord {
  const current = getSnapshot();
  const isNewHighScore = score > current.highScore;
  const isNewDiscovery = !current.discovered.includes(techId);
  if (isNewHighScore || isNewDiscovery) {
    write({
      highScore: Math.max(current.highScore, score),
      discovered: isNewDiscovery ? [...current.discovered, techId] : current.discovered,
    });
  }
  return { isNewHighScore };
}

export function useProgress(): Progress {
  return useSyncExternalStore(subscribe, getSnapshot, () => EMPTY);
}
