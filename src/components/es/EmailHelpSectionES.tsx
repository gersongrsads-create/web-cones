import { MessageCircle, HelpCircle } from "lucide-react";

export const EmailHelpSectionES = () => {
  const whatsappUrl = "https://wa.me/5511985653574?text=¡Hola!%20Tengo%20una%20pregunta%20sobre%20el%20pack%20de%20Plantillas%20de%20Corazones...";

  return (
    <section className="py-10 md:py-14 bg-gradient-hero">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-7 h-7 text-primary" />
          </div>

          <h2 className="text-xl md:text-2xl font-black mb-2">
            ¿Necesitas <span className="text-gradient-blue">Ayuda</span>?
          </h2>

          <p className="text-muted-foreground text-sm md:text-base mb-5">
            ¿Tienes preguntas sobre el pack de Plantillas de Corazones? ¡Envíanos un mensaje por WhatsApp y te responderemos rápidamente!
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-6 py-3.5 rounded-xl shadow-blue transition-all active:scale-[0.98] w-full md:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            ESCRÍBENOS POR WHATSAPP
          </a>

          <p className="text-muted-foreground text-xs mt-3">
            💬 Normalmente respondemos en pocos minutos
          </p>
        </div>
      </div>
    </section>
  );
};
