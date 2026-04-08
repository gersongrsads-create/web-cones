import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5511985653574&text=Olá!%20Tenho%20interesse%20no%20Super%20Pack%20de%20Cones%20de%20Coração";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};
