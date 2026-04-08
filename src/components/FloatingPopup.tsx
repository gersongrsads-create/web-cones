import { useState } from "react";
import { X, MessageCircle, Crown, Zap } from "lucide-react";
import { buildCheckoutUrl } from "@/lib/utm";

const CHECKOUT_URLS = {
  premium1490: "https://ggcheckout.app/checkout/v3/B5d99KliuECT2tz8wdk0",
  basic1000: "https://www.ggcheckout.com/checkout/v5/x7JdOmYB620RxnroowA2",
};

interface FloatingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FloatingPopup = ({ isOpen, onClose }: FloatingPopupProps) => {
  if (!isOpen) return null;

  // Único Popup: Oferta R$14,90
  const premiumUrl = buildCheckoutUrl(CHECKOUT_URLS.premium1490);
  const basicUrl = buildCheckoutUrl(CHECKOUT_URLS.basic1000);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-3 animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-sm w-full p-4 pb-20 md:pb-4 shadow-2xl relative animate-scale-in border-2 border-accent my-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 bg-muted rounded-full flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold animate-pulse">
              🚨 ESPERA!
            </span>
          </div>

          <div className="text-4xl mb-3 mt-2">😱</div>
          <h3 className="text-xl font-black mb-1">LEVE O PACK COMPLETO COM DESCONTO!</h3>
          <p className="text-muted-foreground text-sm mb-3">
            Não fique apenas com o PDF. Garanta o <span className="font-bold text-primary">PACK PREMIUM</span> com todos os formatos + 4 bônus exclusivos!
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 mb-4 border border-accent/30">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Crown className="w-5 h-5 text-accent" />
              <span className="font-bold text-sm">PACK PREMIUM COMPLETO</span>
              <Zap className="w-5 h-5 text-accent" />
            </div>
            
            <div className="text-xs text-muted-foreground space-y-0.5 mb-2">
              <p>✅ +200 Moldes em todos os formatos</p>
              <p>✅ Editável no Canva</p>
              <p>✅ Vídeo tutorial de uso</p>
              <p>✅ 4 Bônus exclusivos grátis</p>
            </div>

            <p className="text-muted-foreground text-xs line-through">De R$ 19,90</p>
            <div className="flex items-center justify-center gap-0.5">
              <span className="text-lg font-bold text-accent">R$</span>
              <span className="text-5xl font-black text-accent">14</span>
              <span className="text-lg font-bold text-accent">,90</span>
            </div>
            <p className="text-red-600 font-bold text-xs mt-1 animate-pulse">
              ⚡ DESCONTO EXCLUSIVO! ⚡
            </p>
          </div>

          <p className="text-xs text-muted-foreground mb-3 flex items-center justify-center gap-1">
            <MessageCircle className="w-3.5 h-3.5" />
            Receba no WhatsApp e E-mail na hora
          </p>

          <a
            href={premiumUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-utmify-checkout="true"
            className="block w-full"
          >
            <span className="block w-full bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-base py-3.5 rounded-xl shadow-green transition-all active:scale-[0.98] animate-pulse text-center pointer-events-none">
              SIM! QUERO O PREMIUM COM DESCONTO 🚀
            </span>
          </a>

          <a
            href={basicUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-utmify-checkout="true"
            className="mt-2 block text-center"
          >
            <span className="text-muted-foreground text-xs hover:underline pointer-events-none">
              Não, só quero o Básico de R$ 10,00
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const useFloatingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  return { isOpen, openPopup, closePopup };
};
