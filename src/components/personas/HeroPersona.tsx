import { CheckCircle2, Sparkles, Users, Gift, MessageCircle } from "lucide-react";
import heroCones from "@/assets/hero-mockup-200.webp";
import canvaLogo from "@/assets/canva-logo.png";
import { scrollToOferta } from "@/lib/scroll";

interface HeroBenefit {
  title: string;
  desc: string;
}

interface HeroPersonaProps {
  badgeText: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  description: string;
  descriptionHighlight: string;
  benefits: HeroBenefit[];
  ctaText: string;
  socialProofText?: string;
}

const formats = [
  "📄 PDF", "🖼️ PNG", "✂️ SVG", "📸 JPG", "🎥 Vídeo Tutorial", "🎁 Bônus Grátis",
];

export const HeroPersona = ({
  badgeText,
  titleLine1,
  titleLine2,
  subtitle,
  description,
  descriptionHighlight,
  benefits,
  ctaText,
  socialProofText = "+3.500 Clientes Satisfeitas",
}: HeroPersonaProps) => {
  return (
    <section className="bg-gradient-hero py-6 md:py-14">
      <div className="container">
        <div className="flex justify-center mb-1.5 md:mb-4">
          <span className="inline-flex items-center gap-1 bg-highlight text-highlight-foreground px-2 md:px-4 py-1 md:py-2 rounded-full text-[10px] md:text-sm font-bold animate-pulse">
            <span className="text-xs">🔥</span>
            Dia das Mães incluído
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-center leading-[1.1] md:leading-tight mb-1.5 md:mb-4">
          <span className="block text-lg md:text-2xl font-bold text-primary mb-1">{titleLine1}</span>
          <span className="text-gradient-blue">{titleLine2}</span>
        </h1>

        <p className="text-center text-base md:text-xl font-bold text-primary mb-1 md:mb-2">
          {subtitle} — <span className="font-black underline">EDITÁVEIS NO CANVA</span>
        </p>

        <p className="text-center text-foreground font-semibold text-sm md:text-lg mb-4 md:mb-6 max-w-xl mx-auto leading-snug">
          {description}
          <span className="text-primary"> {descriptionHighlight}</span>
        </p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center mb-4 md:mb-6">
          <div className="relative order-1">
            <div className="relative animate-float">
              <img
                src={heroCones}
                alt="Super Pack +200 Modelos de Cones de Coração"
                className="w-full max-w-sm mx-auto drop-shadow-xl rounded-xl"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute -top-1 -right-1 md:top-2 md:right-4 w-16 h-16 md:w-20 md:h-20 animate-pulse-soft">
                <img src={canvaLogo} alt="Editável no Canva" className="w-full h-full object-contain drop-shadow-lg" />
              </div>
            </div>
          </div>

          <div className="order-2 space-y-2 md:space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground text-sm md:text-base leading-snug">
                  <span className="font-bold">{benefit.title}</span>{" "}
                  <span className="text-muted-foreground">{benefit.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-4 md:mb-6">
          {formats.map((format, index) => (
            <span key={index} className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs md:text-sm font-medium shadow-soft">
              {format}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 mb-4 md:mb-6">
          <span className="inline-flex items-center justify-center gap-1.5 bg-white px-3 py-2 rounded-full shadow-soft text-sm font-medium">
            <Sparkles className="w-4 h-4 text-primary" />
            +200 Modelos
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 bg-white px-3 py-2 rounded-full shadow-soft text-sm font-medium">
            <MessageCircle className="w-4 h-4 text-green-500" />
            Receba no WhatsApp
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 bg-white px-3 py-2 rounded-full shadow-soft text-sm font-medium">
            <Users className="w-4 h-4 text-primary" />
            {socialProofText}
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 bg-white px-3 py-2 rounded-full shadow-soft text-sm font-medium">
            <Gift className="w-4 h-4 text-accent" />
            4 Bônus Grátis
          </span>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={scrollToOferta}
            className="w-full md:w-auto bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-base md:text-lg px-6 md:px-10 py-4 rounded-xl shadow-green transition-all duration-300 hover:scale-105 active:scale-100 flex items-center justify-center gap-2 animate-cta-pulse"
          >
            <span>{ctaText}</span>
            <span className="text-xl">👆</span>
          </button>
          <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1.5">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-medium">87 pessoas</span> estão vendo agora
          </p>
        </div>
      </div>
    </section>
  );
};
