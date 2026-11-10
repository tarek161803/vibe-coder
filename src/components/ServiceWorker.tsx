"use client";

import { useEffect } from "react";

/**
 * Registers public/sw.js so the game installs as an app and works offline.
 * Skipped in development, where cached chunks would fight hot reloading.
 */
export function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker
      .register("/sw.js", { scope: "/", updateViaCache: "none" })
      .then(() => navigator.serviceWorker.ready)
      .then((registration) => {
        // Assets fetched before the worker took control (the first visit) aren't cached yet; hand them over.
        const urls = performance
          .getEntriesByType("resource")
          .map((entry) => entry.name)
          .filter((url) => new URL(url).origin === location.origin && !url.includes("_rsc="));
        registration.active?.postMessage({ type: "CACHE_URLS", urls });
      })
      .catch((error) => console.error("Service worker registration failed", error));
  }, []);

  return null;
}
