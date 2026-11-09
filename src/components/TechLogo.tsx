import { svgToDataUri } from "@/content/logos";
import type { TechInfo } from "@/content/types";

interface TechLogoProps {
  tech: TechInfo;
  size: number;
  className?: string;
}

export function TechLogo({ tech, size, className }: TechLogoProps) {
  return (
    // Inline data-URI SVG: next/image optimization adds nothing here.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={svgToDataUri(tech.logo)}
      alt={`${tech.name} logo`}
      width={size}
      height={size}
      className={className}
      draggable={false}
    />
  );
}
