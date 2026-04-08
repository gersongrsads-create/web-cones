import { memo, useState, useCallback } from "react";
import { coneRow1ES, coneRow2ES, coneRow3ES, getConeImageUrlES } from "@/data/coneImagesES";
import { scrollToOferta } from "@/lib/scroll";

interface ImageData { file: string; alt: string; }

const ConeCarouselImageES = memo(({ image, isLoaded, onLoad, onClick }: { image: ImageData; isLoaded: boolean; onLoad: () => void; onClick?: () => void; }) => (
  <div className="relative w-44 md:w-56 lg:w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-soft bg-muted cursor-pointer" onClick={onClick}>
    <img src={getConeImageUrlES(image.file)} alt={image.alt} width={256} height={256} loading="lazy" decoding="async" onLoad={onLoad}
      className={`w-full h-auto transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`} />
    {!isLoaded && <div className="absolute inset-0 bg-muted min-h-[176px] md:min-h-[224px]" />}
  </div>
));
ConeCarouselImageES.displayName = "ConeCarouselImageES";

const ConeCarouselRowES = memo(({ images, speed, reverse = false, startOffset = 0, onClick }: { images: ImageData[]; speed: number; reverse?: boolean; startOffset?: number; onClick?: () => void; }) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const handleImageLoad = useCallback((file: string) => { setLoadedImages(prev => new Set(prev).add(file)); }, []);
  const duration = Math.round(images.length * 3 / speed);
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className="flex gap-3 md:gap-4 w-max" style={{ animation: `${reverse ? 'scroll-reverse' : 'scroll-forward'} ${duration}s linear infinite`, animationDelay: `${-duration * startOffset}s` }}>
        {duplicatedImages.map((image, index) => (
          <ConeCarouselImageES key={`${image.file}-${index}`} image={image} isLoaded={loadedImages.has(image.file)} onLoad={() => handleImageLoad(image.file)} onClick={onClick} />
        ))}
      </div>
    </div>
  );
});
ConeCarouselRowES.displayName = "ConeCarouselRowES";

export const ConeShowcaseSectionES = memo(() => {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="container mb-5">
        <div className="text-center">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
            Vista Previa de Corazones
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            200+ Corazones <span className="text-gradient-blue">Listos para Imprimir</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            ¡Corazones personalizados para cada ocasión! 🎉
          </p>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        <ConeCarouselRowES images={coneRow1ES} speed={0.5} startOffset={0} onClick={scrollToOferta} />
        <ConeCarouselRowES images={coneRow2ES} speed={0.6} reverse startOffset={0.33} onClick={scrollToOferta} />
        <ConeCarouselRowES images={coneRow3ES} speed={0.4} startOffset={0.66} onClick={scrollToOferta} />
      </div>

      <div className="container mt-6">
        <div className="flex justify-center">
          <button onClick={scrollToOferta} className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse">
            QUIERO TODOS LOS CORAZONES 👆
          </button>
        </div>
      </div>
    </section>
  );
});
ConeShowcaseSectionES.displayName = "ConeShowcaseSectionES";
