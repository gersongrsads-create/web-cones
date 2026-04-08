import { scrollToOferta } from "@/lib/scroll";
import { ArrowRight } from "lucide-react";

const occasions = [
  { emoji: "🐰", label: "Pascua", highlight: false },
  { emoji: "👩", label: "Día de la Mujer", highlight: false },
  { emoji: "💝", label: "Día de Enamorados", highlight: false },
  { emoji: "👩‍👧", label: "Día de Madres", highlight: true },
  { emoji: "👨‍👧", label: "Día de Padres", highlight: false },
  { emoji: "🎂", label: "Cumpleaños", highlight: false },
  { emoji: "🤝", label: "Día de Amistad", highlight: false },
  { emoji: "🎄", label: "Navidad", highlight: false },
  { emoji: "🍼", label: "Baby Showers", highlight: false },
  { emoji: "🎓", label: "Graduaciones", highlight: false },
  { emoji: "💐", label: "Buquets de Flores", highlight: false },
  { emoji: "🍫", label: "Buquets de Caramelos", highlight: false },
  { emoji: "💄", label: "Kits de Maquillaje", highlight: false },
  { emoji: "🎁", label: "Regalos Creativos", highlight: false },
  { emoji: "🎃", label: "Halloween", highlight: false },
];

export const OccasionsSectionES = () => {
  return (
    <section className="py-8 md:py-14 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold mb-3">
            🎉 PARA CADA OCASIÓN
          </span>
          <h2 className="text-2xl md:text-4xl font-black mb-2">
            Diseños Para <span className="text-gradient-blue">Cada Día Especial</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            ¡200+ plantillas exclusivas cubriendo cada celebración del año!
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3 justify-center max-w-2xl mx-auto mb-6 md:mb-8">
          {occasions.map((occasion, index) => (
            <span
              key={index}
              className={`inline-flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2.5 rounded-full text-xs md:text-sm font-semibold border transition-all ${
                occasion.highlight
                  ? "bg-gradient-to-r from-primary to-pink-600 text-white border-primary shadow-blue animate-pulse-soft"
                  : "bg-white text-foreground border-primary/15 shadow-soft hover:shadow-blue hover:-translate-y-0.5"
              }`}
            >
              <span className="text-base">{occasion.emoji}</span>
              {occasion.label}
              {occasion.highlight && (
                <span className="bg-white/20 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  ¡NUEVO!
                </span>
              )}
            </span>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToOferta}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-accent-foreground font-bold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-green transition-all text-sm md:text-lg group animate-cta-pulse"
          >
            QUIERO TODAS LAS PLANTILLAS
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
