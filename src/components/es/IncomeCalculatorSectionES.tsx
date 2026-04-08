import { TrendingUp, Calculator, DollarSign } from "lucide-react";
import { scrollToOferta } from "@/lib/scroll";

const tiers = [
  { daily: 2, monthly: 60, income: 2400, emoji: "🌱", label: "Ingreso Extra" },
  { daily: 3, monthly: 90, income: 3600, emoji: "🔥", label: "Tiempo Parcial" },
  { daily: 5, monthly: 150, income: 6000, emoji: "🚀", label: "Ingreso Completo" },
];

export const IncomeCalculatorSectionES = () => {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="text-center mb-6">
          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5 inline mr-1" />
            CALCULADORA DE GANANCIAS
          </span>
          <h2 className="text-xl md:text-3xl font-black leading-tight">
            💰 Cómo Puedes Ganar Entre{" "}
            <span className="text-accent">$3,600</span> y{" "}
            <span className="text-accent">$6,000</span> Al Mes
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Ganando <strong className="text-foreground">$40</strong> por corazón vendido:
          </p>
        </div>

        {/* Tabla estilo layout */}
        <div className="bg-white rounded-2xl border-2 border-muted shadow-soft overflow-hidden">
          {/* Encabezado */}
          <div className="grid grid-cols-4 bg-foreground text-background text-[11px] md:text-sm font-bold text-center">
            <div className="py-2.5 px-2">Plan</div>
            <div className="py-2.5 px-2">Ventas/Día</div>
            <div className="py-2.5 px-2">Ventas/Mes</div>
            <div className="py-2.5 px-2">Ganancias/Mes</div>
          </div>

          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 text-center items-center border-t border-muted text-sm ${
                i === 1
                  ? "bg-accent/5 border-l-4 border-l-accent relative"
                  : ""
              }`}
            >
              {i === 1 && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap z-10">
                  ⭐ MÁS POPULAR
                </span>
              )}
              <div className="py-3.5 px-2">
                <span className="text-base">{tier.emoji}</span>
                <p className="text-[11px] md:text-xs font-bold text-foreground leading-tight mt-0.5">{tier.label}</p>
              </div>
              <div className="py-3.5 px-2">
                <span className={`text-lg md:text-xl font-black ${i === 1 ? "text-accent" : "text-foreground"}`}>
                  {tier.daily}
                </span>
              </div>
              <div className="py-3.5 px-2">
                <span className="text-base md:text-lg font-bold text-foreground">{tier.monthly}</span>
                <p className="text-[10px] text-muted-foreground">{tier.daily} × 30 días</p>
              </div>
              <div className="py-3.5 px-2">
                <span className={`text-base md:text-lg font-black ${i === 1 ? "text-accent" : "text-foreground"}`}>
                  ${tier.income.toLocaleString("es-ES")}
                </span>
                <p className="text-[10px] text-muted-foreground">{tier.monthly} × $40</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 bg-white/80 backdrop-blur-sm rounded-xl border border-accent/20 p-4 text-center">
          <p className="text-sm font-bold text-foreground flex items-center justify-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-accent" />
            ¡Con solo 2-5 ventas al día puedes convertir este pack en ingresos reales!
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={scrollToOferta}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse flex items-center gap-2"
          >
            <DollarSign className="w-4 h-4" />
            QUIERO COMENZAR A GANAR AHORA
          </button>
        </div>
      </div>
    </section>
  );
};
