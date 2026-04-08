import type { LucideIcon } from "lucide-react";
import { scrollToOferta } from "@/lib/scroll";

interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitsPersonaProps {
  badgeText: string;
  title: string;
  titleHighlight: string;
  benefits: BenefitItem[];
  ctaText: string;
}

export const BenefitsPersona = ({ badgeText, title, titleHighlight, benefits, ctaText }: BenefitsPersonaProps) => {
  return (
    <section className="py-8 md:py-12 bg-gradient-hero">
      <div className="container">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">
            {badgeText}
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            {title} <span className="text-gradient-blue">{titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-3 md:p-4 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-sm md:text-base mb-1">{benefit.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
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
