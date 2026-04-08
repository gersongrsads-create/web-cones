import { Mail, Printer, Scissors } from "lucide-react";
import { scrollToOferta } from "@/lib/scroll";

const steps = [
  {
    icon: Mail,
    number: "1",
    title: "Descarga Digital Instantánea",
    description: "Después de comprar, descarga tus archivos al instante — ¡entregados directamente a tu email!",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Printer,
    number: "2",
    title: "Imprime en Casa",
    description: "Usa papel tamaño carta normal o cartulina (65lb). ¡Tu impresora de casa funciona perfecto!",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Scissors,
    number: "3",
    title: "Arma & Vende",
    description: "Corta, dobla el corazón y rellena con caramelos, flores o lo que imagines. ¡Gana!",
    color: "bg-accent/10 text-accent",
  },
];

export const HowItWorksSectionES = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-hero">
      <div className="container">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
            Súper Simple
          </span>
          <h2 className="text-xl md:text-3xl font-black">
            ¿Cómo <span className="text-gradient-blue">Funciona?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-4 md:p-5 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
              <div className="relative inline-flex mb-3">
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="font-bold text-base mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={scrollToOferta}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse"
          >
            QUIERO COMENZAR A GANAR 👆
          </button>
        </div>
      </div>
    </section>
  );
};
