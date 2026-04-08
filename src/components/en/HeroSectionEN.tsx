import { CheckCircle2, Sparkles, Users, Gift, Mail, Heart, Download } from "lucide-react";
import heroCones from "@/assets/hero-mockup-en-200.webp";
import bonusCanvaLogo from "@/assets/bonus-canva-new.webp";
import { scrollToOferta } from "@/lib/scroll";

const benefits = [
  { title: "Print-Ready:", desc: "Download, print, assemble. No design skills needed!" },
  { title: "One-Time Purchase:", desc: "Pay once, print unlimited copies forever." },
  { title: "High Profit:", desc: "200+ exclusive templates. Profit $20–$60 per cone!" },
  { title: "Super Easy:", desc: "Video tutorial included. Assemble in minutes, zero experience." },
];

const formats = [
  "📄 PDF",
  "🖼️ PNG",
  "✂️ SVG",
  "📸 JPG",
  "🎥 Video Tutorial",
  "🎁 Free Bonuses",
];

export const HeroSectionEN = () => {
  return (
    <section className="bg-gradient-hero py-6 md:py-14 cursor-pointer" onClick={scrollToOferta}>
      <div className="container">
        <div className="flex justify-center mb-1.5 md:mb-4">
          <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 md:px-4 py-1 md:py-2 rounded-full text-[10px] md:text-sm font-medium hover:bg-primary/20 transition-colors">
            <span className="text-xs">🔥</span>
            Mother's Day Included!
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-center leading-[1.1] md:leading-tight mb-1.5 md:mb-4 hover:scale-105 transition-transform">
          <span className="block text-lg md:text-2xl font-bold text-primary mb-1">🎀 SUPER PACK</span>
          <span className="text-gradient-blue">200+ Heart Cone Templates</span>
        </h1>

        <p className="text-center text-base md:text-xl font-black text-pink-600 underline decoration-2 underline-offset-2 mb-1 md:mb-2 hover:text-pink-700 transition-colors">
          +200 PROFESSIONAL EDITABLE TEMPLATES ON CANVA — READY FOR MOTHER'S DAY
        </p>

        <p className="text-center text-foreground font-semibold text-sm md:text-lg mb-4 md:mb-6 max-w-xl mx-auto leading-snug hover:text-primary transition-colors">
          Ready to print, assemble & impress. Create stunning, sturdy favors perfect for candy bouquets, flowers & gift kits.
          <span className="text-primary"> 📥 Instant Digital Download!</span>
        </p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center mb-4 md:mb-6">
          <div className="relative order-1">
            <div className="relative animate-float">
              <img
                src={heroCones}
                alt="Super Pack 200+ Heart Cone Templates - Ready to Print"
                className="w-full max-w-sm mx-auto drop-shadow-xl rounded-xl hover:scale-110 transition-transform"
                loading="eager"
                fetchPriority="high"
              />
              <img
                src={bonusCanvaLogo}
                alt="Canva Logo"
                className="absolute -top-1 -right-1 md:top-2 md:right-4 w-16 h-16 md:w-20 md:h-20 shadow-green animate-pulse-soft"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-2 space-y-2 md:space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2 md:gap-3 hover:translate-x-1 transition-transform">
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
            <span key={index} className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs md:text-sm font-medium shadow-soft hover:bg-white hover:shadow-green transition-all">
              {format}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 mb-4 md:mb-6">
          <span className="inline-flex items-center justify-center gap-1.5 bg-white px-3 py-2 rounded-full shadow-soft text-sm font-medium hover:shadow-green hover:-translate-y-1 transition-all">
            <Sparkles className="w-4 h-4 text-primary" />
            200+ Templates
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 bg-white px-3 py-2 rounded-full shadow-soft text-sm font-medium hover:shadow-green hover:-translate-y-1 transition-all">
            <Download className="w-4 h-4 text-primary" />
            Instant Digital Download
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 bg-white px-3 py-2 rounded-full shadow-soft text-sm font-medium hover:shadow-green hover:-translate-y-1 transition-all">
            <Users className="w-4 h-4 text-primary" />
            3,500+ Happy Crafters
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 bg-white px-3 py-2 rounded-full shadow-soft text-sm font-medium hover:shadow-green hover:-translate-y-1 transition-all">
            <Gift className="w-4 h-4 text-accent" />
            4 Free Bonuses
          </span>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={scrollToOferta}
            className="w-full md:w-auto bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-base md:text-lg px-6 md:px-10 py-4 rounded-xl shadow-green transition-all duration-300 hover:scale-105 active:scale-100 flex items-center justify-center gap-2 animate-cta-pulse"
          >
            <span>I WANT MY SUPER PACK NOW</span>
            <span className="text-xl">👆</span>
          </button>
          <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1.5">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-medium">87 people</span> are viewing this right now
          </p>
        </div>
      </div>
    </section>
  );
};
