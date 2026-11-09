import { svgToDataUri } from "@/content/logos";
import type { TechInfo } from "@/content/types";

/** Rasters are tiny, but with 1,000+ technologies the cache needs a ceiling. */
const MAX_RASTERS = 160;

/**
 * Lazily loads each technology's SVG logo the first time it's needed and
 * caches crisp rasterized copies at the exact device-pixel size drawn.
 */
export class LogoAtlas {
  private images = new Map<string, HTMLImageElement>();
  private rasters = new Map<string, HTMLCanvasElement>();

  /** Returns a raster `devicePx` pixels wide, or null while still loading. */
  get(tech: TechInfo, devicePx: number): CanvasImageSource | null {
    let img = this.images.get(tech.id);
    if (!img) {
      img = new Image();
      img.decoding = "async";
      img.src = svgToDataUri(tech.logo);
      this.images.set(tech.id, img);
    }
    if (!img.complete || img.naturalWidth === 0) return null;

    const px = Math.max(8, Math.round(devicePx));
    const key = `${tech.id}@${px}`;
    let raster = this.rasters.get(key);
    if (!raster) {
      if (this.rasters.size >= MAX_RASTERS) this.rasters.clear();
      raster = document.createElement("canvas");
      raster.width = raster.height = px;
      raster.getContext("2d")!.drawImage(img, 0, 0, px, px);
      this.rasters.set(key, raster);
    }
    return raster;
  }

  /** Call when the render scale changes. */
  invalidate() {
    this.rasters.clear();
  }
}
