import { memo } from "react";
import { 
  row4Images, row5Images, row6Images,
  row7Images, row8Images, row9Images,
  row10Images, row11Images, row12Images,
  row13Images, row14Images, row15Images 
} from "@/data/showcaseImages";
import { CarouselRow } from "./ShowcaseSection";

interface ThemeCarouselSectionProps {
  variant?: 1 | 2 | 3 | 4;
}

// Componente reutilizable de 3 filas de carrusel
// Cada variant usa un conjunto diferente de imágenes barajadas
export const ThemeCarouselSection = memo(({ variant = 1 }: ThemeCarouselSectionProps) => {
  const imagesSets = {
    1: { r1: row4Images, r2: row5Images, r3: row6Images },
    2: { r1: row7Images, r2: row8Images, r3: row9Images },
    3: { r1: row10Images, r2: row11Images, r3: row12Images },
    4: { r1: row13Images, r2: row14Images, r3: row15Images },
  };

  const { r1, r2, r3 } = imagesSets[variant];

  return (
    <div className="space-y-3 md:space-y-4 overflow-hidden">
      <CarouselRow images={r1} speed={0.5} startOffset={0} />
      <CarouselRow images={r2} speed={0.6} reverse startOffset={0.33} />
      <CarouselRow images={r3} speed={0.4} startOffset={0.66} />
    </div>
  );
});

ThemeCarouselSection.displayName = "ThemeCarouselSection";
