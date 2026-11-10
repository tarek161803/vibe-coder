import { useSyncExternalStore } from "react";

/** Player settings persisted to localStorage (client-only). */
export interface Settings {
  /** Silences sound, music and vibration. */
  muted: boolean;
}

const STORAGE_KEY = "vibe-coder:settings:v1";
const DEFAULTS: Settings = { muted: false };

let cache: Settings | null = null;
const listeners = new Set<() => void>();

function read(): Settings {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    const parsed = JSON.parse(raw) as Partial<Settings>;
    return { muted: typeof parsed.muted === "boolean" ? parsed.muted : DEFAULTS.muted };
  } catch {
    return DEFAULTS;
  }
}

export function getSettings(): Settings {
  if (!cache) cache = read();
  return cache;
}

export function updateSettings(patch: Partial<Settings>) {
  cache = { ...getSettings(), ...patch };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
  } catch {
    // Storage unavailable (private mode, quota) — the setting just won't persist.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useSettings(): Settings {
  return useSyncExternalStore(subscribe, getSettings, () => DEFAULTS);
}
