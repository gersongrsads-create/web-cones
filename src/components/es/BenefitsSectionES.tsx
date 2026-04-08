import { Download, Printer, Scissors, TrendingUp, RefreshCw, Infinity } from "lucide-react";
import { scrollToOferta } from "@/lib/scroll";

const benefits = [
  { icon: Download, title: "Descarga Digital Instantánea", description: "Recibe tus archivos inmediatamente después de la compra. ¡Sin esperas!" },
  { icon: Printer, title: "Imprime en Casa", description: "Papel carta normal o cartulina de 65lb. ¡Funciona perfectamente!" },
  { icon: Scissors, title: "Fácil de Armar", description: "Tutorial en video paso a paso incluido" },
  { icon: TrendingUp, title: "Ganancias Altas", description: "Invierte poco, gana $20–$40 por corazón" },
  { icon: RefreshCw, title: "Diseños Exclusivos", description: "Plantillas únicas que destacan tu negocio" },
  { icon: Infinity, title: "Imprime por Siempre", description: "Paga una vez, imprime todas las copias que quieras" },
];

export const BenefitsSectionES = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-hero">
      <div className="container">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">
            ¿Por qué elegir este pack?
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            Inversión Baja, <span className="text-gradient-blue">Ganancias Altas</span>
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
            QUIERO MI SUPER PACK 👆
          </button>
        </div>
      </div>
    </section>
  );
};
