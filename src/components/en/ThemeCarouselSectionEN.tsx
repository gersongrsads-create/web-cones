import { memo, useState, useCallback } from "react";
import {
  row4ImagesEN, row5ImagesEN, row6ImagesEN,
  row7ImagesEN, row8ImagesEN, row9ImagesEN,
  row10ImagesEN, row11ImagesEN, row12ImagesEN,
  row13ImagesEN, row14ImagesEN, row15ImagesEN,
  getImageUrlEN,
} from "@/data/showcaseImagesEN";

interface ImageData { file: string; alt: string; }

const CarouselImageEN = memo(({ image, isLoaded, onLoad }: { image: ImageData; isLoaded: boolean; onLoad: () => void; }) => (
  <div className="relative w-44 md:w-56 lg:w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-soft bg-muted">
    <img src={getImageUrlEN(image.file)} alt={image.alt} width={256} height={256} loading="lazy" decoding="async" onLoad={onLoad}
      className={`w-full h-auto transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`} />
    {!isLoaded && <div className="absolute inset-0 bg-muted min-h-[176px] md:min-h-[224px]" />}
  </div>
));
CarouselImageEN.displayName = "CarouselImageEN";

const CarouselRowEN = memo(({ images, speed, reverse = false, startOffset = 0 }: { images: ImageData[]; speed: number; reverse?: boolean; startOffset?: number; }) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const handleImageLoad = useCallback((file: string) => { setLoadedImages(prev => new Set(prev).add(file)); }, []);
  const duration = Math.round(images.length * 3 / speed);
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className="flex gap-3 md:gap-4 w-max" style={{ animation: `${reverse ? 'scroll-reverse' : 'scroll-forward'} ${duration}s linear infinite`, animationDelay: `${-duration * startOffset}s` }}>
        {duplicatedImages.map((image, index) => (
          <CarouselImageEN key={`${image.file}-${index}`} image={image} isLoaded={loadedImages.has(image.file)} onLoad={() => handleImageLoad(image.file)} />
        ))}
      </div>
    </div>
  );
});
CarouselRowEN.displayName = "CarouselRowEN";

interface ThemeCarouselSectionENProps {
  variant?: 1 | 2 | 3 | 4;
  onClick?: () => void;
}

export const ThemeCarouselSectionEN = memo(({ variant = 1, onClick }: ThemeCarouselSectionENProps) => {
  const imagesSets = {
    1: { r1: row4ImagesEN, r2: row5ImagesEN, r3: row6ImagesEN },
    2: { r1: row7ImagesEN, r2: row8ImagesEN, r3: row9ImagesEN },
    3: { r1: row10ImagesEN, r2: row11ImagesEN, r3: row12ImagesEN },
    4: { r1: row13ImagesEN, r2: row14ImagesEN, r3: row15ImagesEN },
  };

  const { r1, r2, r3 } = imagesSets[variant];

  return (
    <div className="space-y-3 md:space-y-4 overflow-hidden cursor-pointer" onClick={onClick}>
      <CarouselRowEN images={r1} speed={0.5} startOffset={0} />
      <CarouselRowEN images={r2} speed={0.6} reverse startOffset={0.33} />
      <CarouselRowEN images={r3} speed={0.4} startOffset={0.66} />
    </div>
  );
});

ThemeCarouselSectionEN.displayName = "ThemeCarouselSectionEN";
