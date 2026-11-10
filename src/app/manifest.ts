import type { MetadataRoute } from "next";

/** Web app manifest: lets the game be installed to the home screen and launch fullscreen. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Vibe Coder · Every crash is a lesson",
    short_name: "Vibe Coder",
    description:
      "Jump and slide past React, Docker, Git and 1,100 more technologies. Crash into one and learn what it is.",
    start_url: "/",
    scope: "/",
    display: "fullscreen",
    background_color: "#05060d",
    theme_color: "#05060d",
    categories: ["games", "education"],
    // PNGs come from scripts/generate-pwa-icons.mts.
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
