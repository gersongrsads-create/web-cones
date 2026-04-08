import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ThemeCarouselSectionES } from "@/components/es/ThemeCarouselSectionES";
import { scrollToOferta } from "@/lib/scroll";

const faqs = [
  {
    question: "¿Cómo recibo los archivos?",
    answer: "📧 ¡Después del pago, recibes acceso instantáneo por email! El enlace de descarga llega en segundos, automáticamente.",
  },
  {
    question: "¿Son los archivos editables?",
    answer: "Los archivos están listos para imprimir — SIN necesidad de editar. Los recibes en formatos PDF, PNG, SVG y JPG (según tu plan). ¡Solo descarga, imprime y arma!",
  },
  {
    question: "¿Qué papel debo usar?",
    answer: "Recomendamos cartulina de 65lb para mejores resultados y durabilidad. ¡Pero el papel tamaño carta normal también funciona para probar!",
  },
  {
    question: "¿Cuál es la diferencia entre Básico y Premium?",
    answer: "El Plan Básico incluye todas las plantillas 200+ en formato PDF. El Premium incluye TODOS los formatos (PDF, PNG, SVG, JPG), tutoriales en video, Acceso a Canva Editable (+200 Corazones), y 3 bonificaciones exclusivas más: Pack Caja Cuadrada de Regalo, Caja '8 Razones' y Plantilla Editable en Blanco en Canva.",
  },
  {
    question: "¿Puedo usar estos para vender?",
    answer: "¡Absolutamente! ¡Eso es exactamente para qué sirven! Muchas creadoras usan los corazones para hacer buquets de caramelos, arreglos florales y kits de regalo, vendiendo cada uno por $5–$15. ¡Los márgenes de ganancia son increíbles!",
  },
  {
    question: "¿Y si no me gusta?",
    answer: "Tienes una garantía de reembolso completo de 7 días. Si no estás satisfecha, te devolvemos el 100% de tu dinero, sin preguntas. ¡Cero riesgo!",
  },
  {
    question: "¿Necesito una máquina de corte?",
    answer: "¡No! Puedes cortar con tijeras normales. Pero si tienes una máquina de corte, el formato SVG funciona perfectamente con ella.",
  },
  {
    question: "¿Qué métodos de pago son aceptados?",
    answer: "Aceptamos Tarjeta de Crédito y PayPal. ¡Elige el que te sea más conveniente!",
  },
];

export const FAQSectionES = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-hero overflow-hidden">
      <div className="container">
        <div className="text-center mb-6">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
            ¿Tienes Preguntas?
          </span>
          <h2 className="text-xl md:text-3xl font-black">
            Preguntas Frecuentes <span className="text-gradient-blue">Más Comunes</span>
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl px-4 shadow-soft border-none">
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
          <button onClick={scrollToOferta} className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse">
            QUIERO MI SUPER PACK 👆
          </button>
        </div>
      </div>

      <div className="mt-8">
        <ThemeCarouselSectionES variant={3} />
      </div>
    </section>
  );
};
