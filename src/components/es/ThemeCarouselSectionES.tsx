import { memo, useState, useCallback } from "react";
import {
  row4ImagesES, row5ImagesES, row6ImagesES,
  row7ImagesES, row8ImagesES, row9ImagesES,
  row10ImagesES, row11ImagesES, row12ImagesES,
  row13ImagesES, row14ImagesES, row15ImagesES,
  getImageUrlES,
} from "@/data/showcaseImagesES";

interface ImageData { file: string; alt: string; }

const CarouselImageES = memo(({ image, isLoaded, onLoad }: { image: ImageData; isLoaded: boolean; onLoad: () => void; }) => (
  <div className="relative w-44 md:w-56 lg:w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-soft bg-muted">
    <img src={getImageUrlES(image.file)} alt={image.alt} width={256} height={256} loading="lazy" decoding="async" onLoad={onLoad}
      className={`w-full h-auto transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`} />
    {!isLoaded && <div className="absolute inset-0 bg-muted min-h-[176px] md:min-h-[224px]" />}
  </div>
));
CarouselImageES.displayName = "CarouselImageES";

const CarouselRowES = memo(({ images, speed, reverse = false, startOffset = 0 }: { images: ImageData[]; speed: number; reverse?: boolean; startOffset?: number; }) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const handleImageLoad = useCallback((file: string) => { setLoadedImages(prev => new Set(prev).add(file)); }, []);
  const duration = Math.round(images.length * 3 / speed);
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className="flex gap-3 md:gap-4 w-max" style={{ animation: `${reverse ? 'scroll-reverse' : 'scroll-forward'} ${duration}s linear infinite`, animationDelay: `${-duration * startOffset}s` }}>
        {duplicatedImages.map((image, index) => (
          <CarouselImageES key={`${image.file}-${index}`} image={image} isLoaded={loadedImages.has(image.file)} onLoad={() => handleImageLoad(image.file)} />
        ))}
      </div>
    </div>
  );
});
CarouselRowES.displayName = "CarouselRowES";

interface ThemeCarouselSectionESProps {
  variant?: 1 | 2 | 3 | 4;
  onClick?: () => void;
}

export const ThemeCarouselSectionES = memo(({ variant = 1, onClick }: ThemeCarouselSectionESProps) => {
  const imagesSets = {
    1: { r1: row4ImagesES, r2: row5ImagesES, r3: row6ImagesES },
    2: { r1: row7ImagesES, r2: row8ImagesES, r3: row9ImagesES },
    3: { r1: row10ImagesES, r2: row11ImagesES, r3: row12ImagesES },
    4: { r1: row13ImagesES, r2: row14ImagesES, r3: row15ImagesES },
  };

  const { r1, r2, r3 } = imagesSets[variant];

  return (
    <div className="space-y-3 md:space-y-4 overflow-hidden cursor-pointer" onClick={onClick}>
      <CarouselRowES images={r1} speed={0.5} startOffset={0} />
      <CarouselRowES images={r2} speed={0.6} reverse startOffset={0.33} />
      <CarouselRowES images={r3} speed={0.4} startOffset={0.66} />
    </div>
  );
});

ThemeCarouselSectionES.displayName = "ThemeCarouselSectionES";
