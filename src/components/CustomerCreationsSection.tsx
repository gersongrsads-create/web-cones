import { scrollToOferta } from "@/lib/scroll";
import creation1 from "@/assets/creations/1.webp";
import creation2 from "@/assets/creations/2.webp";
import creation3 from "@/assets/creations/3.webp";
import creation4 from "@/assets/creations/4.webp";
import creation5 from "@/assets/creations/5.webp";
import creation6 from "@/assets/creations/6.webp";
import creation7 from "@/assets/creations/7.webp";
import creation8 from "@/assets/creations/8.webp";
import creation9 from "@/assets/creations/9.webp";
import creation10 from "@/assets/creations/10.webp";
import creation11 from "@/assets/creations/11.webp";
import creation12 from "@/assets/creations/12.webp";
import creationFeatured from "@/assets/creations/featured.webp";

const images = [
  { src: creation2, alt: "Mesa de vendas com cones de coração variados" },
  { src: creation1, alt: "Cone de coração com rosas e chocolates" },
  { src: creation12, alt: "Cone sendo impresso em impressora Epson" },
  { src: creation5, alt: "Cone de coração tema anime com laço rosa" },
  { src: creation7, alt: "Cone de coração Snoopy" },
  { src: creation11, alt: "Cone de coração Mickey e Minnie" },
  { src: creation9, alt: "Cone de coração floral com mensagem" },
  { src: creation3, alt: "Cone de coração ursinhos carinhosos" },
  { src: creation6, alt: "Cone de coração gatinho com rosas" },
  { src: creation8, alt: "Cones impressos tema Dia das Mães" },
  { src: creation10, alt: "Cones de coração para Dia das Mães" },
  { src: creation4, alt: "Mesa de vendas com vários cones decorados" },
];

interface CustomerCreationsSectionProps {
  badgeText?: string;
  headline?: string;
  headlineHighlight?: string;
  subtitle?: string;
  ctaText?: string;
}

export const CustomerCreationsSection = ({
  badgeText = "📸 Feitos por Clientes Reais",
  headline = "Elas Imprimiram, Montaram e",
  headlineHighlight = "Lucraram!",
  subtitle = "Veja o que nossas clientes criaram com o Super Pack — e você pode fazer igual hoje!",
  ctaText = "QUERO CRIAR OS MEUS TAMBÉM 👆",
}: CustomerCreationsSectionProps) => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-white to-background">
      <div className="container px-4">
        <div className="text-center mb-5">
          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-3">
            {badgeText}
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-1.5">
            {headline} <span className="text-gradient-blue">{headlineHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-2 md:mb-3">
          <div className="rounded-xl overflow-hidden shadow-soft md:max-w-md md:mx-auto">
            <img
              src={creationFeatured}
              alt="Cone de coração com rosas vermelhas"
              className="w-full h-auto"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3 max-w-4xl mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-2 md:mb-3 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300"
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
            onClick={scrollToOferta}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};
