import { FileText, Image, Scissors, FileImage, ArrowRight, Heart, Play } from "lucide-react";
import { scrollToOferta } from "@/lib/scroll";

const formats = [
  { icon: FileText, label: "PDF", emoji: "📄", desc: "Alta resolução, pronto para imprimir" },
  { icon: Image, label: "PNG", emoji: "🖼️", desc: "Fundo transparente para personalizar" },
  { icon: Scissors, label: "SVG", emoji: "✂️", desc: "Para máquinas de corte" },
  { icon: FileImage, label: "JPG", emoji: "📸", desc: "Universal, funciona em tudo" },
  { icon: Play, label: "Vídeo Tutorial", emoji: "🎥", desc: "Montagem passo a passo" },
  { icon: Heart, label: "+200 Modelos", emoji: "💖", desc: "Exclusivos e encantadores" },
];

const useCases = [
  "Buquês de Doces",
  "Buquês de Flores",
  "Kits de Maquiagem",
  "Lembrancinhas",
  "Presentes Criativos",
  "Dia dos Namorados",
  "Dia das Mães",
  "Aniversários",
  "Chá de Bebê",
  "Formatura",
  "Natal",
  "Casamentos",
];

const premiumExtras = [
  "Todos os formatos: PDF, PNG, SVG e JPG",
  "Vídeo Tutorial de Montagem",
  "Vídeo Tutorial de Uso e Download",
  "Bônus 1: Acesso ao Editável no Canva (+200 Cones)",
  "Bônus 2: Desenho em Branco, Editável no Canva",
  "Bônus 3: Pack de Caixas Quadradas",
  "Bônus 4: Caixa '8 Motivos para dizer que sim'",
];

export const IncludesSection = () => {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4">
        <div className="text-center mb-6 md:mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold mb-3">
            📦 O QUE VOCÊ RECEBE
          </span>
          <h2 className="text-2xl md:text-4xl font-black mb-2">
            Tudo Que Está <span className="text-gradient-blue">Incluso No Pack</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Arquivos prontos para imprimir — sem necessidade de programas complexos
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mb-6 md:mb-14">
          {formats.map((fmt, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-2 md:p-5 shadow-soft border border-primary/10 text-center hover:shadow-blue hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-primary to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-1.5 md:mb-3 group-hover:scale-110 transition-transform">
                <fmt.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <span className="text-lg md:text-2xl mb-0.5 block">{fmt.emoji}</span>
              <p className="font-bold text-[10px] md:text-base text-foreground leading-tight">{fmt.label}</p>
              <p className="text-muted-foreground text-[8px] md:text-xs mt-0.5 hidden md:block">{fmt.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-soft border border-primary/10 mb-4 md:mb-8">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <Heart className="w-4 h-4 md:w-6 md:h-6 text-accent fill-accent" />
            <h3 className="text-lg md:text-2xl font-black text-center">
              Use Para Qualquer Ocasião!
            </h3>
            <Heart className="w-4 h-4 md:w-6 md:h-6 text-accent fill-accent" />
          </div>
          
          <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center">
            {useCases.map((useCase, index) => (
              <span
                key={index}
                className="inline-flex items-center bg-gradient-to-r from-primary/5 to-blue-100 text-foreground px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-sm font-medium border border-primary/20"
              >
                💖 {useCase}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl md:rounded-3xl p-4 md:p-10 text-white">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <span className="text-accent text-lg">👑</span>
            <h3 className="text-lg md:text-2xl font-black text-center">
              No Plano Premium Você Leva
            </h3>
            <span className="text-accent text-lg">👑</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            {premiumExtras.map((extra, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-4 border border-white/20"
              >
                <div className="flex items-start gap-1.5 md:gap-2">
                  <span className="text-accent text-sm md:text-lg">✓</span>
                  <span className="text-xs md:text-base font-medium leading-tight">{extra}</span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-white/80 text-xs md:text-sm mt-4 md:mt-6">
            Tudo pronto para imprimir — é só baixar e usar! 🖨️
          </p>

          <div className="text-center mt-6 md:mt-8">
            <button
              onClick={scrollToOferta}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-accent-foreground font-bold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-green transition-all text-sm md:text-lg group animate-cta-pulse"
            >
              QUERO MEU PACK AGORA
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-white/80 text-xs md:text-sm mt-2 md:mt-3">
              🔥 Oferta por tempo limitado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
