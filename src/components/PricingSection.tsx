import { Check, Star, Shield, Crown, Zap, MessageCircle, Download, Flame, X } from "lucide-react";
import kitBasico from "@/assets/kit-basico-200.webp";
import kitPremium from "@/assets/kit-premium-200.webp";
import { useEffect, useState } from "react";
import { buildCheckoutUrl } from "@/lib/utm";

const PREMIUM_CHECKOUT = "https://ggcheckout.app/checkout/v3/Ctds8FbF5v2AErS2wcre";

const basicFeatures = [
  { text: "+200 Moldes de Cones de Coração (PDF)", included: true },
];

const basicExcluded = [
  "Formatos PNG, SVG e JPG",
  "Acesso ao Editável no Canva",
  "4 Bônus Exclusivos",
  "Vídeo Tutorial de Uso",
  "Acesso Vitalício + Atualizações",
];

const premiumFeatures = [
  "✨ TUDO do Pack Básico +",
  "+200 Moldes de Cones de Coração",
  "TODOS os Formatos: PDF, PNG, SVG e JPG",
  "Vídeo Tutorial de Uso",
  "🎨 Bônus 1: Acesso ao Editável no Canva (+200 Cones)",
  "🎁 Bônus 2: Desenho em Branco, Editável no Canva",
  "🎁 Bônus 3: Pack de Caixas Quadradas",
  "🎁 Bônus 4: Caixa '8 Motivos para dizer que sim'",
  "Acesso Vitalício + Atualizações",
];

const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

interface PricingSectionProps {
  onBasicClick: () => void;
}

export const PricingSection = ({ onBasicClick }: PricingSectionProps) => {
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, []);

  return (
    <section id="oferta" className="py-10 md:py-14 bg-white scroll-mt-4">
      <div className="container">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-highlight text-highlight-foreground px-4 py-1.5 rounded-full text-xs font-bold mb-3 animate-pulse">
            📅 PROMOÇÃO SOMENTE HOJE! {currentDate}
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            Escolha Seu <span className="text-gradient-blue">Pack Ideal</span>
          </h2>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4 text-green-500" />
            Receba no WhatsApp e E-mail em segundos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto">
          {/* Pack Básico */}
          <div className="bg-white rounded-2xl border-2 border-muted p-5 md:p-6 shadow-soft">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-foreground mb-1">PACK BÁSICO</h3>
              <p className="text-sm text-muted-foreground">Para imprimir e cortar na tesoura</p>
            </div>

            <div className="flex justify-center mb-4">
              <img src={kitBasico} alt="Pack Básico +200 Cones de Coração" className="w-full max-w-[220px] h-auto rounded-xl" loading="lazy" />
            </div>

            <ul className="space-y-2.5 mb-5">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature.text}</span>
                </li>
              ))}
              {basicExcluded.map((feature, index) => (
                <li key={`excluded-${index}`} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="line-through">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-0.5">
                <span className="text-lg font-bold text-foreground">R$</span>
                <span className="text-4xl font-black text-foreground">10</span>
                <span className="text-lg font-bold text-foreground">,00</span>
              </div>
            </div>

            <button
              onClick={onBasicClick}
              className="block w-full bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold text-center py-3 rounded-xl transition-all text-base border border-foreground/20"
            >
              QUERO O PACK BÁSICO
            </button>
          </div>

          {/* Pack Premium Completo */}
          <div className="relative bg-gradient-to-br from-primary via-primary to-pink-700 rounded-2xl p-4 md:p-6 shadow-blue md:scale-105 md:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative flex justify-center mb-4 mt-1 md:mt-0 md:absolute md:-top-4 md:left-1/2 md:-translate-x-1/2 z-10">
              <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-green animate-bounce-slow">
                <Crown className="w-3.5 h-3.5 md:w-4 md:h-4" />
                O MAIS VENDIDO 🔥
                <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </span>
            </div>

            <div className="relative text-center mb-4 md:mb-5 md:mt-6">
              <h3 className="text-xl md:text-2xl font-black text-white mb-1 drop-shadow-lg">👑 PACK PREMIUM COMPLETO</h3>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <p className="text-xs md:text-sm text-white font-bold">🔥 +350 vendas este mês</p>
              </div>
            </div>

            <div className="relative flex justify-center mb-4 md:mb-5">
              <div className="relative w-full max-w-[280px] md:max-w-none">
                <div className="absolute inset-0 bg-accent/30 rounded-full blur-2xl scale-75 animate-pulse" />
                <img src={kitPremium} alt="Pack Premium +200 Cones de Coração" className="relative w-full md:w-48 h-auto drop-shadow-2xl mx-auto rounded-xl" loading="lazy" />
                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-accent text-accent-foreground w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-green animate-bounce-slow">
                  <Star className="w-6 h-6 md:w-7 md:h-7 fill-current" />
                </div>
              </div>
            </div>

            <ul className="relative space-y-1.5 md:space-y-2 mb-4 md:mb-5">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-xs md:text-sm bg-white/5 rounded-lg p-1.5 md:p-2">
                  <Flame className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className={`text-white ${index === 0 ? "font-bold" : ""}`}>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-2 mb-4 border border-white/20">
              <p className="text-white/90 text-xs text-center flex items-center justify-center gap-1.5">
                ⚠️ <strong>Arquivos prontos para imprimir</strong> — É só baixar e usar!
              </p>
            </div>

            <div className="relative text-center mb-4 md:mb-5 bg-white/15 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-highlight text-highlight-foreground px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-bold whitespace-nowrap">
                PACK COMPLETO
              </div>
              <div className="flex items-center justify-center gap-0.5 mt-1">
                <span className="text-xl md:text-2xl font-bold text-white">R$</span>
                <span className="text-5xl md:text-6xl font-black text-white drop-shadow-lg">19</span>
                <span className="text-xl md:text-2xl font-bold text-white">,90</span>
              </div>
              <p className="text-accent font-bold text-sm md:text-base mt-1 md:mt-2 flex items-center justify-center gap-1">
                <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Todos os formatos + 4 Bônus Grátis
              </p>
            </div>

            <a
              href={buildCheckoutUrl(PREMIUM_CHECKOUT)}
              target="_blank"
              rel="noopener noreferrer"
              data-utmify-checkout="true"
              className="relative block w-full overflow-hidden group"
            >
              <span className="relative block w-full bg-accent hover:bg-accent-hover text-accent-foreground font-black text-center py-3.5 md:py-4 rounded-xl shadow-green transition-all text-sm md:text-lg active:scale-[0.98] pointer-events-none">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-1.5 md:gap-2">
                  🎉 QUERO O PREMIUM COMPLETO
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                </span>
              </span>
            </a>
            
            <p className="relative text-center text-xs md:text-sm text-white/90 mt-2 md:mt-3 flex items-center justify-center gap-1.5 font-medium">
              <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Receba no WhatsApp e E-mail
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:justify-center md:gap-3 mt-8 max-w-sm md:max-w-none mx-auto">
          <div className="flex items-center justify-center gap-1.5 bg-muted px-3 py-2 rounded-full text-sm">
            <Shield className="w-4 h-4 text-accent" />
            <span>Compra Segura</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-muted px-3 py-2 rounded-full text-sm">
            <span>💳</span>
            <span>Pix ou Cartão</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-muted px-3 py-2 rounded-full text-sm">
            <MessageCircle className="w-4 h-4 text-green-500" />
            <span>WhatsApp e E-mail</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-muted px-3 py-2 rounded-full text-sm">
            <span>✅</span>
            <span>7 Dias Garantia</span>
          </div>
        </div>

        {/* Garantia */}
        <div className="max-w-lg mx-auto mt-10 bg-gradient-hero rounded-2xl p-6 text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-lg font-black mb-2 flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-accent" />
            Garantia de 7 Dias
          </h3>
          <p className="text-muted-foreground text-base">
            Não gostou? Devolvemos <span className="font-bold text-foreground">100% do seu dinheiro</span> sem perguntas. Risco zero para você!
          </p>
        </div>
      </div>
    </section>
  );
};
