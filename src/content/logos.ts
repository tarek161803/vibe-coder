/**
 * Builds 64×64 app-icon style logos: real brand icons from Simple Icons, and a
 * text badge (color + short label) for everything that isn't in the package.
 */
import { luminance, readableInk } from "@/lib/color";
import type { BrandIcon } from "./types";

export function svgToDataUri(svgMarkup: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgMarkup)}`;
}

const escapeXml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");


/** Rough Arial Bold advance widths (in em) so long labels can be squeezed to fit. */
function estimateWidth(text: string, fontSize: number): number {
  let em = 0;
  for (const ch of text) {
    if (/[MW]/.test(ch)) em += 0.9;
    else if (/[A-Z]/.test(ch)) em += 0.7;
    else if (/[mw]/.test(ch)) em += 0.85;
    else if (/[a-z]/.test(ch)) em += 0.58;
    else if (/[0-9]/.test(ch)) em += 0.56;
    else em += 0.45;
  }
  return em * fontSize;
}

const FONT_SIZE_BY_LENGTH = [34, 34, 28, 22, 17, 14];
const MAX_TEXT_WIDTH = 50;

export function badgeLogo(abbr: string, color: string): string {
  // At most 2 characters: longer labels can't be read on a moving obstacle.
  const label = [...abbr].slice(0, 2).join("");
  const fontSize = FONT_SIZE_BY_LENGTH[Math.min(label.length, 5)];
  const ink = readableInk(color);
  const width = estimateWidth(label, fontSize);
  const squeeze =
    width > MAX_TEXT_WIDTH ? ` textLength="${MAX_TEXT_WIDTH}" lengthAdjust="spacingAndGlyphs"` : "";
  const baseline = 30 + fontSize * 0.36;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
    <rect width="64" height="64" rx="12" fill="${color}"/>
    <text x="32" y="${baseline.toFixed(1)}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${fontSize}" fill="${ink}"${squeeze}>${escapeXml(label)}</text>
    <text x="32" y="57" text-anchor="middle" font-family="Menlo, Consolas, monospace" font-weight="700" font-size="7" fill="${ink}" fill-opacity="0.5">&lt;/&gt;</text>
  </svg>`;
}

/** Brands darker than this get a light tile so they stay visible on the dark scene. */
const DARK_BRAND_LUMINANCE = 0.06;

export function brandLogo(icon: BrandIcon): string {
  const color = `#${icon.hex}`;
  const isDark = luminance(color) < DARK_BRAND_LUMINANCE;
  const tile = isDark ? "#f1f5f9" : "#151a2e";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
    <rect width="64" height="64" rx="12" fill="${tile}"/>
    <path transform="translate(14 14) scale(1.5)" fill="${color}" d="${icon.path}"/>
  </svg>`;
}
