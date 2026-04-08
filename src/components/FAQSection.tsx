import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ThemeCarouselSection } from "./ThemeCarouselSection";
import { scrollToOferta } from "@/lib/scroll";

const faqs = [
  {
    question: "Como recebo os arquivos?",
    answer: "📲 Após o pagamento você recebe instantaneamente no WhatsApp! O link de acesso chega em segundos, automaticamente.",
  },
  {
    question: "Os arquivos são editáveis?",
    answer: "Os arquivos são prontos para imprimir — NÃO precisam de edição. Você recebe nos formatos PDF, PNG, SVG e JPG (dependendo do plano). No Pack Premium, você também recebe o acesso ao editável no Canva para personalizar os +200 cones!",
  },
  {
    question: "Qual papel devo usar?",
    answer: "Recomendamos papel A4 fotográfico de 200g para o melhor resultado — fica com acabamento profissional! Papel A4 comum (sulfite) também funciona para testes.",
  },
  {
    question: "Qual a diferença entre o Básico e o Premium?",
    answer: "O Plano Básico inclui os +200 moldes em formato PDF. O Premium inclui TODOS os formatos (PDF, PNG, SVG, JPG), acesso ao editável no Canva, vídeos tutoriais extras e 4 bônus exclusivos: Acesso ao Canva Editável, Desenho em Branco, Pack de Caixas Quadradas e Caixa '8 Motivos'.",
  },
  {
    question: "Posso usar para vender?",
    answer: "Claro! É exatamente para isso! Muitas empreendedoras usam os cones para montar buquês de doces, flores e maquiagem e vendem de R$15 a R$40 cada. O lucro é altíssimo!",
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias de garantia total. Se não gostar, devolvemos 100% do valor sem perguntas. Risco zero!",
  },
  {
    question: "Preciso de máquina de corte?",
    answer: "Não! Você pode cortar com tesoura normalmente. Mas se tiver máquina de corte, o formato SVG funciona perfeitamente.",
  },
  {
    question: "Aceita Pix?",
    answer: "Sim! Aceitamos Pix (aprovação instantânea), Cartão de Crédito e Boleto. Escolha o mais fácil para você.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-hero overflow-hidden">
      <div className="container">
        <div className="text-center mb-6">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-xl md:text-3xl font-black">
            Perguntas <span className="text-gradient-blue">Frequentes</span>
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl px-4 shadow-soft border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-xs md:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={scrollToOferta}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse"
          >
            QUERO MEU SUPER PACK 👆
          </button>
        </div>
      </div>

      <div className="mt-8">
        <ThemeCarouselSection variant={3} />
      </div>
    </section>
  );
};
