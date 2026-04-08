import { MessageCircle, HelpCircle } from "lucide-react";

export const WhatsAppHelpSection = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5511985653574&text=Olá!%20Tenho%20interesse%20no%20Super%20Pack%20de%20Cones%20de%20Coração%20e%20gostaria%20de%20tirar%20algumas%20dúvidas.";

  return (
    <section className="py-10 md:py-14 bg-gradient-hero">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-7 h-7 text-green-600" />
          </div>
          
          <h2 className="text-xl md:text-2xl font-black mb-2">
            Precisa de <span className="text-gradient-blue">Ajuda</span>?
          </h2>
          
          <p className="text-muted-foreground text-sm md:text-base mb-5">
            Tem alguma dúvida sobre o Pack de Cones de Coração? Fale diretamente conosco pelo WhatsApp. Respondemos rapidinho!
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg transition-all active:scale-[0.98] w-full md:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            FALAR NO WHATSAPP
          </a>
          
          <p className="text-muted-foreground text-xs mt-3">
            📲 (11) 9 8565-3574 • Atendimento todos os dias
          </p>
        </div>
      </div>
    </section>
  );
};
