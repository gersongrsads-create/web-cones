import { CheckCircle2 } from "lucide-react";
import { ThemeCarouselSectionES } from "@/components/es/ThemeCarouselSectionES";
import { scrollToOferta } from "@/lib/scroll";

const problems = [
  { emoji: "🎁", text: "¿Quieres crear regalos únicos que deleiten y vendan?" },
  { emoji: "💰", text: "¿Buscas una fuente de ingresos rentable con baja inversión?" },
  { emoji: "⏰", text: "¿No tienes tiempo para diseñar plantillas desde cero?" },
  { emoji: "🌸", text: "¿Quieres destacar con diseños exclusivos?" },
  { emoji: "📱", text: "¿Quieres empezar un negocio desde la comodidad de tu hogar?" },
];

export const TargetAudienceSectionES = () => {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="mb-6">
        <ThemeCarouselSectionES variant={1} onClick={scrollToOferta} />
      </div>

      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
              Esto es para ti si...
            </span>
            <p className="text-muted-foreground text-sm md:text-base">
              Ya seas <span className="font-bold text-foreground">dueña de una tienda de regalos</span>, <span className="font-bold text-foreground">artesana</span>, <span className="font-bold text-foreground">organizadora de eventos</span> o <span className="font-bold text-foreground">mamá que quiere ganar dinero extra</span>
            </p>
          </div>

          <div className="bg-gradient-hero rounded-xl p-4 md:p-6 space-y-3">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-soft">
                <span className="text-xl flex-shrink-0">{problem.emoji}</span>
                <p className="text-foreground text-sm md:text-base font-medium">{problem.text}</p>
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 ml-auto" />
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-base md:text-lg font-semibold mb-2">
              ✅ Si marcaste al menos <span className="text-primary">1 punto</span>, ¡este pack es para ti!
            </p>
            <p className="text-muted-foreground text-sm">
              📧 Recibe todo por email y comienza a ganar hoy 👇
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={scrollToOferta}
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98]"
            >
              QUIERO COMENZAR AHORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
