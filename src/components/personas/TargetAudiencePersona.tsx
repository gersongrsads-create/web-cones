import { CheckCircle2 } from "lucide-react";
import { ThemeCarouselSection } from "@/components/ThemeCarouselSection";
import { scrollToOferta } from "@/lib/scroll";

interface Problem {
  emoji: string;
  text: string;
}

interface TargetAudiencePersonaProps {
  problems: Problem[];
  ctaText: string;
  closingText?: string;
}

export const TargetAudiencePersona = ({ 
  problems, 
  ctaText,
  closingText = "Então o Super Pack de Cones de Coração foi feito sob medida pra você!",
}: TargetAudiencePersonaProps) => {
  return (
    <section className="py-6 md:py-10 bg-white overflow-hidden">
      <ThemeCarouselSection variant={1} />

      <div className="container mt-6 md:mt-8">
        <div className="text-center mb-4 md:mb-6">
          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-3">
            🎯 ISSO É PRA VOCÊ SE...
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            Se Identificou Com <span className="text-gradient-blue">Alguma Dessas?</span>
          </h2>
        </div>

        <div className="max-w-lg mx-auto space-y-2 md:space-y-3 mb-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-2.5 bg-gradient-to-r from-white to-accent/5 rounded-xl p-3 shadow-soft"
            >
              <span className="text-xl flex-shrink-0">{problem.emoji}</span>
              <p className="text-foreground text-sm md:text-base font-medium leading-snug flex-1">
                {problem.text}
              </p>
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
            </div>
          ))}
        </div>

        <div className="text-center mb-4">
          <p className="text-primary font-bold text-sm md:text-base">
            ✨ {closingText}
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={scrollToOferta}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse"
          >
            {ctaText} 👆
          </button>
        </div>
      </div>
    </section>
  );
};
