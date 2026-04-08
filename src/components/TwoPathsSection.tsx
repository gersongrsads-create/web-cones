import { X } from "lucide-react";
import { scrollToOferta } from "@/lib/scroll";

const path1Items = [
  "Perder o Dia das Mães criando moldes do zero",
  "Ficar com catálogo desatualizado enquanto outras vendem",
  "Investir em materiais caros sem garantia de lucro",
  "Ver a concorrência lucrando com cones de coração",
];

const path2Items = [
  "+200 moldes profissionais no WhatsApp em segundos",
  "Catálogo renovado e pronto para vender no Dia das Mães",
  "Lucre de R$15 a R$40 por cone nas próximas datas",
  "Investimento mínimo, retorno altíssimo",
];

export const TwoPathsSection = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-black">
            Você Tem <span className="text-gradient-blue">2 Escolhas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div className="bg-muted/50 rounded-xl p-4 border border-border">
            <div className="text-center mb-4">
              <span className="inline-block bg-muted text-muted-foreground px-2.5 py-1 rounded-full text-xs font-medium mb-2">
                CAMINHO 1
              </span>
              <h3 className="text-base font-black">Continuar Como Está</h3>
            </div>

            <ul className="space-y-2 mb-4">
              {path1Items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-xs md:text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center text-muted-foreground text-xs">
              😔 Resultado: Oportunidade perdida
            </div>
          </div>

          <div className="bg-gradient-to-b from-accent/10 to-white rounded-xl p-4 border-2 border-accent shadow-green">
            <div className="text-center mb-4">
              <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-2.5 py-1 rounded-full text-xs font-medium mb-2">
                CAMINHO 2 ✨
              </span>
              <h3 className="text-base font-black">Garantir o Super Pack</h3>
            </div>

            <ul className="space-y-2 mb-4">
              {path2Items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-4 h-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-foreground text-xs md:text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center text-accent font-medium text-xs">
              🚀 Resultado: Lucro garantido no Dia das Mães
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={scrollToOferta}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98]"
          >
            EU ESCOLHO LUCRAR ✨
          </button>
        </div>
      </div>
    </section>
  );
};
