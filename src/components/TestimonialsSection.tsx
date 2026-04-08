import { ThemeCarouselSection } from "./ThemeCarouselSection";
import testimonialModelos from "@/assets/testimonial-modelos-branco.webp";
import testimonialPersonalizado from "@/assets/testimonial-personalizado.webp";
import testimonialDesiree from "@/assets/testimonial-desiree.webp";
import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";
import testimonialNuevo1 from "@/assets/testimonial-nuevo1.webp";
import testimonialMarzo from "@/assets/testimonial-marzo.webp";

interface TestimonialsSectionProps {
  badgeText?: string;
  headline?: string;
  headlineHighlight?: string;
  subtitle?: string;
  ctaText?: string;
}

export const TestimonialsSection = ({
  badgeText = "Resultados Reais",
  headline = "+3.500",
  headlineHighlight = "Empreendedoras Satisfeitas",
  subtitle = "Veja o que estão falando sobre os Cones de Coração",
  ctaText = "QUERO O MESMO RESULTADO 👆",
}: TestimonialsSectionProps) => {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
            {badgeText}
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            {headline} <span className="text-gradient-blue">{headlineHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            {subtitle}
          </p>
        </div>

        <div className="max-w-lg mx-auto mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-soft border-2 border-accent/20 bg-gradient-to-b from-accent/5 to-white">
            <img src={testimonialMarzo} alt="Depoimento de cliente Laine - Cone impecável com acabamento profissional" className="w-full h-auto" loading="lazy" />
          </div>
        </div>

        <div className="max-w-lg mx-auto mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-soft border-2 border-accent/20 bg-gradient-to-b from-accent/5 to-white">
            <img src={testimonialDesiree} alt="Depoimento Desirée - Cones personalizados" className="w-full h-auto" loading="lazy" />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                <span className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">WhatsApp</span>
              </div>
              <p className="text-sm text-foreground italic leading-relaxed">
                "Fiz vários moldes personalizados com o Canva, fiz de presente de aniversário pra minha mãe e o outro personalizado de anime. Super satisfeita com minha compra! Muito obrigada! 😍"
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-semibold">— Desirée • Cliente verificada ✅</p>
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-soft border-2 border-accent/20 bg-gradient-to-b from-accent/5 to-white">
            <img src={testimonialPersonalizado} alt="Cone de coração personalizado feito por cliente" className="w-full h-auto" loading="lazy" />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                <span className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">WhatsApp</span>
              </div>
              <p className="text-sm text-foreground italic leading-relaxed">
                "Gente, ficou PERFEITO! 😍 Fiz pra festinha da minha filha e todo mundo perguntou onde eu comprei. Nem acreditaram que fui eu que fiz! Super fácil de montar, valeu muito a pena!"
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-semibold">— Camila R. • Cliente verificada ✅</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-center mb-3">
            <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold">
              ✨ Criados por clientes com o Bônus do Molde Branco Editável
            </span>
          </div>
          <div className="rounded-xl overflow-hidden shadow-soft max-w-lg mx-auto">
            <img src={testimonialModelos} alt="Modelos personalizados criados por clientes usando o molde branco editável" className="w-full h-auto" loading="lazy" />
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="font-bold text-base mb-1">Feedback de Clientes</h3>
          <p className="text-muted-foreground text-xs">Mensagens reais de clientes</p>
        </div>

        <div className="flex flex-col gap-3 max-w-lg mx-auto">
          {[
            { img: testimonial1, label: "Instagram", color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" },
            { img: testimonial2, label: "WhatsApp", color: "bg-green-500" },
            { img: testimonial3, label: "WhatsApp", color: "bg-green-500" },
            { img: testimonialNuevo1, label: "WhatsApp", color: "bg-green-500" },
          ].map((item, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden shadow-soft">
              <img src={item.img} alt={`Depoimento ${item.label}`} className="w-full h-auto" loading="lazy" />
              <div className={`absolute top-2 right-2 ${item.color} text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full font-medium`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98]"
          >
            {ctaText}
          </button>
        </div>
      </div>

      <div className="mt-8">
        <ThemeCarouselSection variant={2} />
      </div>
    </section>
  );
};
