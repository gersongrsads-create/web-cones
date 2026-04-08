import whatsappIcon from "@/assets/WB_1.png";

export const FloatingWhatsAppButtonES = () => {
  const whatsappUrl = "https://wa.me/5511985653574?text=¡Hola!%20Vengo%20de%20tu%20sitio%20web%20y%20tengo%20una%20duda%20sobre%20el%20pack%20de%20Plantillas%20de%20Cono%20Corazón...";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-2 md:right-4 z-50 md:hidden hover:scale-110 transition-transform active:scale-95"
      aria-label="Contáctanos en WhatsApp"
      title="Chatea con nosotros en WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14 drop-shadow-lg" />
    </a>
  );
};
