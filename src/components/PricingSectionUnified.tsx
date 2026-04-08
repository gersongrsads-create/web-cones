import { Check, Star, Shield, Crown, Zap, Mail, Download, Flame, X } from "lucide-react";
import { useEffect, useState } from "react";
import { buildCheckoutUrl } from "@/lib/utm";
import { useTranslations, useLanguage } from "@/hooks/useTranslations";
import { getPackImageES } from "@/data/bonusesES";
import kitBasico from "@/assets/offer-basic-200.webp";
import kitPremium from "@/assets/offer-premium-200.webp";

// Checkout URLs - same for all languages
const CHECKOUT_URLS = {
  // ES
  basicES: "https://pay.hotmart.com/S105191801G?off=96z9v2ge&checkoutMode=10",
  premiumES: "https://pay.hotmart.com/C105191822D?off=00cucpjf&checkoutMode=10",
  // EN
  basicEN: "https://pay.hotmart.com/J104505178H?off=8x3fx53q&checkoutMode=10",
  premiumEN: "https://pay.hotmart.com/F104505244V?off=u227ddpk&checkoutMode=10",
};

interface PricingSectionUnifiedProps {
  onBasicClick: () => void;
}

export const PricingSectionUnified = ({ onBasicClick }: PricingSectionUnifiedProps) => {
  const t = useTranslations();
  const lang = useLanguage();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const dateStr = date.toLocaleDateString(lang === "en" ? "en-US" : lang === "es" ? "es-ES" : "pt-BR", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    setCurrentDate(dateStr);
  }, [lang]);

  // Get checkout URLs based on language
  const basicCheckout = lang === "en" ? CHECKOUT_URLS.basicEN : CHECKOUT_URLS.basicES;
  const premiumCheckout = lang === "en" ? CHECKOUT_URLS.premiumEN : CHECKOUT_URLS.premiumES;

  // Get correct pack image
  const basicImage = lang === "en" ? kitBasico : getPackImageES("basic");
  const premiumImage = lang === "en" ? kitPremium : getPackImageES("premium");

  return (
    <section id="oferta" className="py-10 md:py-14 bg-white scroll-mt-4">
      <div className="container">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-highlight text-highlight-foreground px-4 py-1.5 rounded-full text-xs font-bold mb-3 animate-pulse">
            {lang === "en" ? "📅 TODAY ONLY SPECIAL!" : "🔥 PRECIO ESPECIAL HOY"} - {currentDate}
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            {lang === "en" ? "Choose Your " : "Elige Tu "}
            <span className="text-gradient-blue">{lang === "en" ? "Perfect Pack" : "Camino al Éxito"}</span>
          </h2>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <Download className="w-4 h-4 text-primary" />
            {lang === "en" ? "⚡ Instant Digital Download — delivered to your email!" : "⚡ Acceso inmediato por correo — Comienza hoy mismo"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto">
          {/* Basic Pack */}
          <div className="bg-white rounded-2xl border-2 border-muted p-5 md:p-6 shadow-soft">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-foreground mb-1">
                {lang === "en" ? "BASIC PACK" : "👶 PACK BÁSICO"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {lang === "en" ? "Print and cut with scissors" : "Comienza tu negocio con lo esencial"}
              </p>
            </div>
            <div className="flex justify-center mb-4">
              <img
                src={basicImage}
                alt={lang === "en" ? "Basic Pack" : "Pack Básico"}
                className="w-full max-w-[220px] h-auto rounded-xl"
                loading="lazy"
              />
            </div>
            <ul className="space-y-2.5 mb-5">
              <li className="flex items-center gap-2 text-sm text-foreground">
                <span className="text-lg">✅</span>
                <span>{lang === "en" ? "200+ Heart Cone Templates (PDF)" : "+200 Diseños de Cono Corazón (PDF)"}</span>
              </li>
              {[
                lang === "en"
                  ? "PNG, SVG & JPG Formats"
                  : "Formatos PNG, SVG y JPG",
                lang === "en"
                  ? "Editable Canva Template"
                  : "Plantilla Editable en Canva",
                lang === "en" ? "4 Exclusive Bonuses" : "4 Bonos Exclusivos",
                lang === "en" ? "Video Tutorial" : "Tutorial en Video",
                lang === "en"
                  ? "Lifetime Access + Updates"
                  : "Acceso Vitalicio + Actualizaciones",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="line-through">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-0.5">
                <span className="text-lg font-bold text-foreground">$</span>
                <span className="text-6xl font-black text-foreground">{lang === "en" ? "10" : "4"}</span>
                <span className="text-lg font-bold text-foreground">{lang === "en" ? "" : ".99"}</span>
              </div>
            </div>
            <button
              onClick={onBasicClick}
              className="block w-full bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold text-center py-3 rounded-xl transition-all text-base border border-foreground/20"
            >
              {lang === "en" ? "I WANT THE BASIC PACK 📥" : "QUIERO EL BÁSICO"}
            </button>
          </div>

          {/* Premium Pack */}
          <div className="relative bg-gradient-to-br from-primary via-primary to-pink-700 rounded-2xl p-4 md:p-6 shadow-blue md:scale-105 md:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

            <div className="relative flex justify-center mb-4 mt-1 md:mt-0 md:absolute md:-top-4 md:left-1/2 md:-translate-x-1/2 z-10">
              <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-green animate-bounce-slow">
                <Crown className="w-3.5 h-3.5 md:w-4 md:h-4" />
                {lang === "en" ? "BEST SELLER 🔥" : "MÁS VENDIDO 🔥"}
                <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </span>
            </div>

            <div className="relative text-center mb-4 md:mb-5 md:mt-6">
              <h3 className="text-xl md:text-2xl font-black text-white mb-1 drop-shadow-lg">
                {lang === "en" ? "👑 COMPLETE PREMIUM PACK" : "👑 PACK PREMIUM - GANA MÁS"}
              </h3>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <p className="text-xs md:text-sm text-white font-bold">
                  {lang === "en" ? "🔥 350+ sales this month" : "🔥 1,200+ lo compraron este mes"}
                </p>
              </div>
            </div>

            <div className="relative flex justify-center mb-4 md:mb-5">
              <div className="relative w-full max-w-[280px] md:max-w-none">
                <div className="absolute inset-0 bg-accent/30 rounded-full blur-2xl scale-75 animate-pulse" />
                <img
                  src={premiumImage}
                  alt={lang === "en" ? "Premium Pack" : "Pack Premium"}
                  className="relative w-full md:w-48 h-auto drop-shadow-2xl mx-auto rounded-xl"
                  loading="lazy"
                />
                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-accent text-accent-foreground w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-green animate-bounce-slow">
                  <Star className="w-6 h-6 md:w-7 md:h-7 fill-current" />
                </div>
              </div>
            </div>

            <div className="relative text-center mb-4 md:mb-5 bg-white/15 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-highlight text-highlight-foreground px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-bold whitespace-nowrap">
                {lang === "en" ? "PREMIUM PACK" : "PACK COMPLETO"}
              </div>
              <div className="flex items-center justify-center gap-0.5 mt-1">
                <span className="text-xl md:text-2xl font-bold text-white">$</span>
                <span className="text-7xl md:text-8xl font-black text-white drop-shadow-lg">
                  {lang === "en" ? "19" : "9"}
                </span>
                <span className="text-xl md:text-2xl font-bold text-white">{lang === "en" ? ".90" : ".99"}</span>
              </div>
              <p className="text-accent font-bold text-sm md:text-base mt-2 md:mt-2.5 flex items-center justify-center gap-1">
                <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
                {lang === "en"
                  ? "All formats + 4 Free Bonuses + Canva Access"
                  : "Todos los formatos + 4 Bonos Gratis + Acceso a Canva"}
              </p>
            </div>

            <a
              href={buildCheckoutUrl(premiumCheckout)}
              target="_blank"
              rel="noopener noreferrer"
              data-utmify-checkout="true"
              className="relative block w-full overflow-hidden group"
            >
              <span className="relative block w-full bg-accent hover:bg-accent-hover text-accent-foreground font-black text-center py-3.5 md:py-4 rounded-xl shadow-green transition-all text-sm md:text-lg active:scale-[0.98] pointer-events-none">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-1.5 md:gap-2">
                  {lang === "en" ? "YES! UPGRADE TO PREMIUM 🚀" : "💰 QUIERO GANANCIAS MÁXIMAS"}
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                </span>
              </span>
            </a>

            <p className="relative text-center text-xs md:text-sm text-white/90 mt-2 md:mt-3 flex items-center justify-center gap-1.5 font-medium">
              <Download className="w-3.5 h-3.5 md:w-4 md:h-4" />
              {lang === "en" ? "⚡ Instant Digital Download" : "⚡ Descarga Digital Instantánea"}
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:justify-center md:gap-3 mt-8 max-w-sm md:max-w-none mx-auto">
          <div className="flex items-center justify-center gap-1.5 bg-muted px-3 py-2 rounded-full text-sm">
            <Shield className="w-4 h-4 text-accent" />
            <span>{lang === "en" ? "Secure Checkout" : "Checkout Seguro"}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-muted px-3 py-2 rounded-full text-sm">
            <span>💳</span>
            <span>{lang === "en" ? "Card or PayPal" : "Tarjeta o PayPal"}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-muted px-3 py-2 rounded-full text-sm">
            <Download className="w-4 h-4 text-primary" />
            <span>{lang === "en" ? "Instant Digital Download" : "Descarga Digital Instantánea"}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-muted px-3 py-2 rounded-full text-sm">
            <span>✅</span>
            <span>{lang === "en" ? "7-Day Guarantee" : "Garantía de 7 Días"}</span>
          </div>
        </div>

        {/* Guarantee */}
        <div className="max-w-lg mx-auto mt-10 bg-gradient-hero rounded-2xl p-6 text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-lg font-black mb-2 flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-accent" />
            {lang === "en"
              ? "7-Day Money-Back Guarantee"
              : "Garantía 100% de Devolución - 7 Días"}
          </h3>
          <p className="text-muted-foreground text-base">
            {lang === "en"
              ? "Not happy? We'll refund 100% of your money, no questions asked. Zero risk for you!"
              : "¿No estás satisfecha con tu compra? Te devolvemos el 100% sin hacer preguntas. Cero riesgo para ti, total seguridad."}
          </p>
        </div>
      </div>
    </section>
  );
};
