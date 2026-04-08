import creation1 from "@/assets/creations-en/1.webp";
import creation2 from "@/assets/creations-en/2.webp";
import creation3 from "@/assets/creations-en/3.webp";
import creation4 from "@/assets/creations-en/4.webp";
import creation5 from "@/assets/creations-en/5.webp";
import creation6 from "@/assets/creations-en/6.webp";
import creation7 from "@/assets/creations-en/7.webp";
import creation8 from "@/assets/creations-en/8.webp";
import creation9 from "@/assets/creations-en/9.webp";
import creationFeatured from "@/assets/creations-en/featured.webp";

const scrollToOffer = () => {
  document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
};

const images = [
  { src: creation2, alt: "Corazón de girasol - Hermoso y Radiante" },
  { src: creation3, alt: "Corazones impresos para el Día de Madres" },
  { src: creation4, alt: "Corazones para el Día de Madres lado a lado" },
  { src: creation5, alt: "Corazón Snoopy - Te Amo Día Feliz" },
  { src: creation6, alt: "Corazón Aniversario Feliz con rosas" },
  { src: creation7, alt: "Corazón Mickey y Minnie - Día Feliz" },
  { src: creation8, alt: "Mesa con corazones variados para vender" },
  { src: creation9, alt: "Corazón Care Bears - Feliz" },
];

export const CustomerCreationsSectionES = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-white to-background">
      <div className="container px-4">
        <div className="text-center mb-5">
          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-3">
            📸 Creado por Clientes Reales
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-1.5">
            Imprimieron, Armaron & <span className="text-gradient-blue">¡Ganaron!</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            Mira lo que nuestros clientes crearon con el Super Pack — ¡y tú puedes hacer lo mismo hoy!
          </p>
        </div>

        {/* Imagen destacada - ancho completo en móvil */}
        <div className="max-w-4xl mx-auto mb-2 md:mb-3">
          <div className="rounded-xl overflow-hidden shadow-soft md:max-w-md md:mx-auto cursor-pointer hover:shadow-green transition-shadow" onClick={scrollToOffer}>
            <img
              src={creationFeatured}
              alt="Testimonio del cliente mostrando corazones para el Día de Madres"
              className="w-full h-auto"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Resto de imágenes en mampostería */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3 max-w-4xl mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-2 md:mb-3 rounded-xl overflow-hidden shadow-soft hover:shadow-green transition-shadow duration-300 cursor-pointer"
              onClick={scrollToOffer}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto"
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={scrollToOffer}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse"
          >
            YO TAMBIÉN QUIERO CREAR LA MÍA 👆
          </button>
        </div>
      </div>
    </section>
  );
};
