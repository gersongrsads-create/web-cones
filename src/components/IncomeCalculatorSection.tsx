import { TrendingUp, Calculator, DollarSign } from "lucide-react";
import { scrollToOferta } from "@/lib/scroll";

const tiers = [
  { daily: 2, monthly: 60, income: 2400, emoji: "🌱", label: "Iniciante" },
  { daily: 5, monthly: 150, income: 6000, emoji: "🔥", label: "Intermediária" },
  { daily: 10, monthly: 300, income: 12000, emoji: "🚀", label: "Profissional" },
];

export const IncomeCalculatorSection = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-white to-background">
      <div className="container">
        <div className="text-center mb-6">
          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-3">
            <Calculator className="w-3 h-3 inline mr-1" />
            CALCULADORA DE LUCRO
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            Quanto Você Pode <span className="text-gradient-blue">Lucrar Por Mês?</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Se você vender cada cone por R$40 (preço médio de mercado), olha o potencial:
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-4 gap-1 bg-primary/5 rounded-t-xl p-2 text-center text-xs font-bold text-primary">
            <span>Nível</span>
            <span>Por Dia</span>
            <span>Por Mês</span>
            <span className="flex items-center justify-center gap-0.5">
              <DollarSign className="w-3 h-3" /> Receita
            </span>
          </div>

          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 gap-1 p-3 text-center text-sm border-b border-border items-center ${
                i === 1 ? "bg-accent/10 border-accent/20 relative" : "bg-white"
              }`}
            >
              {i === 1 && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] px-2 py-0.5 rounded-full font-bold">
                  MAIS POPULAR
                </span>
              )}
              <span className="font-medium flex items-center justify-center gap-1">
                <span>{tier.emoji}</span> {tier.label}
              </span>
              <span className="font-semibold">{tier.daily} cones</span>
              <span className="font-semibold">{tier.monthly} cones</span>
              <span className={`font-black ${i === 1 ? "text-accent text-base" : "text-primary"}`}>
                R$ {tier.income.toLocaleString("pt-BR")}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 mb-6">
          <p className="text-muted-foreground text-xs">
            <TrendingUp className="w-3 h-3 inline mr-1" />
            Valores baseados no preço médio de mercado. Lucre ainda mais no Dia das Mães! 🚀
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={scrollToOferta}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse flex items-center gap-2"
          >
            <TrendingUp className="w-4 h-4" />
            QUERO COMEÇAR A LUCRAR AGORA 👆
          </button>
        </div>
      </div>
    </section>
  );
};
