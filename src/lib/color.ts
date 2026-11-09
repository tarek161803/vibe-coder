/** Relative luminance (0–1) of a #rrggbb color, per WCAG. */
export function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Dark or white text, whichever reads better on `background`. */
export function readableInk(background: string): string {
  return luminance(background) > 0.38 ? "#0b0d17" : "#ffffff";
}
