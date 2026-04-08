import whatsappIcon from "@/assets/WB_1.png";

export const FloatingWhatsAppButtonEN = () => {
  const whatsappUrl = "https://wa.me/5511985653574?text=Hi!%20I%20come%20from%20your%20website%20and%20I%20have%20a%20question%20about%20the%20Heart%20Cone%20Templates%20pack...";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-2 md:right-4 z-50 md:hidden hover:scale-110 transition-transform active:scale-95"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14 drop-shadow-lg" />
    </a>
  );
};
