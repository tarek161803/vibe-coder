/**
 * Writes the PNG icons the web app manifest and iOS home screen need, rendered
 * from src/app/icon.svg (run generate-app-icon.mts first if the runner changed).
 * Run: npx tsx scripts/generate-pwa-icons.mts
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { ImageResponse } from "next/og";
import { createElement as h } from "react";

const svg = readFileSync(new URL("../src/app/icon.svg", import.meta.url));
const iconSrc = `data:image/svg+xml;base64,${svg.toString("base64")}`;
const publicIcons = new URL("../public/icons/", import.meta.url);

/**
 * `fill` paints the background edge to edge with the icon scaled to `inset`:
 * maskable icons must keep their artwork inside the central 80% safe zone, and
 * iOS shows transparent corners as black, so both get a solid square.
 */
const ICONS = [
  { file: "public/icons/icon-192.png", size: 192, fill: false, inset: 1 },
  { file: "public/icons/icon-512.png", size: 512, fill: false, inset: 1 },
  { file: "public/icons/maskable-512.png", size: 512, fill: true, inset: 0.72 },
  // Next.js links src/app/apple-icon.png as the apple-touch-icon automatically.
  { file: "src/app/apple-icon.png", size: 180, fill: true, inset: 0.86 },
];

mkdirSync(publicIcons, { recursive: true });
for (const { file, size, fill, inset } of ICONS) {
  const image = new ImageResponse(
    h(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: fill ? "#0b0d1f" : "transparent",
        },
      },
      h("img", { src: iconSrc, width: size * inset, height: size * inset, alt: "" }),
    ),
    { width: size, height: size },
  );
  writeFileSync(new URL(`../${file}`, import.meta.url), Buffer.from(await image.arrayBuffer()));
  console.log(`Wrote ${file}`);
}
