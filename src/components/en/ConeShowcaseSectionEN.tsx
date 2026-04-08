import { memo, useState, useCallback } from "react";
import { coneRow1EN, coneRow2EN, coneRow3EN, getConeImageUrlEN } from "@/data/coneImagesEN";
import { scrollToOferta } from "@/lib/scroll";

interface ImageData { file: string; alt: string; }

const ConeCarouselImageEN = memo(({ image, isLoaded, onLoad, onClick }: { image: ImageData; isLoaded: boolean; onLoad: () => void; onClick?: () => void; }) => (
  <div className="relative w-44 md:w-56 lg:w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-soft bg-muted cursor-pointer" onClick={onClick}>
    <img src={getConeImageUrlEN(image.file)} alt={image.alt} width={256} height={256} loading="lazy" decoding="async" onLoad={onLoad}
      className={`w-full h-auto transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`} />
    {!isLoaded && <div className="absolute inset-0 bg-muted min-h-[176px] md:min-h-[224px]" />}
  </div>
));
ConeCarouselImageEN.displayName = "ConeCarouselImageEN";

const ConeCarouselRowEN = memo(({ images, speed, reverse = false, startOffset = 0, onClick }: { images: ImageData[]; speed: number; reverse?: boolean; startOffset?: number; onClick?: () => void; }) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const handleImageLoad = useCallback((file: string) => { setLoadedImages(prev => new Set(prev).add(file)); }, []);
  const duration = Math.round(images.length * 3 / speed);
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className="flex gap-3 md:gap-4 w-max" style={{ animation: `${reverse ? 'scroll-reverse' : 'scroll-forward'} ${duration}s linear infinite`, animationDelay: `${-duration * startOffset}s` }}>
        {duplicatedImages.map((image, index) => (
          <ConeCarouselImageEN key={`${image.file}-${index}`} image={image} isLoaded={loadedImages.has(image.file)} onLoad={() => handleImageLoad(image.file)} onClick={onClick} />
        ))}
      </div>
    </div>
  );
});
ConeCarouselRowEN.displayName = "ConeCarouselRowEN";

export const ConeShowcaseSectionEN = memo(() => {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="container mb-5">
        <div className="text-center">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
            Cone Preview
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            200+ Cones <span className="text-gradient-blue">Ready to Print</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Custom cones for every occasion! 🎉
          </p>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        <ConeCarouselRowEN images={coneRow1EN} speed={0.5} startOffset={0} onClick={scrollToOferta} />
        <ConeCarouselRowEN images={coneRow2EN} speed={0.6} reverse startOffset={0.33} onClick={scrollToOferta} />
        <ConeCarouselRowEN images={coneRow3EN} speed={0.4} startOffset={0.66} onClick={scrollToOferta} />
      </div>

      <div className="container mt-6">
        <div className="flex justify-center">
          <button onClick={scrollToOferta} className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse">
            I WANT ALL THE CONES 👆
          </button>
        </div>
      </div>
    </section>
  );
});
ConeShowcaseSectionEN.displayName = "ConeShowcaseSectionEN";
