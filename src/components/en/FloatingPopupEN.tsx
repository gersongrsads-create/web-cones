import { useState } from "react";
import { X, Download } from "lucide-react";
import { buildCheckoutUrl } from "@/lib/utm";

const CHECKOUT_URLS = {
  premium1990: "https://pay.hotmart.com/F104505244V?off=u227ddpk&checkoutMode=10",
  basic1000: "https://pay.hotmart.com/J104505178H?off=8x3fx53q&checkoutMode=10",
};

interface FloatingPopupENProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FloatingPopupEN = ({ isOpen, onClose }: FloatingPopupENProps) => {
  if (!isOpen) return null;

  const premium1990Url = buildCheckoutUrl(CHECKOUT_URLS.premium1990);
  const basic1000Url = buildCheckoutUrl(CHECKOUT_URLS.basic1000);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-2 animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-sm w-full p-2 md:p-4 shadow-2xl relative animate-scale-in border-2 border-red-500 my-auto max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-2 right-2 w-7 h-7 bg-muted rounded-full flex items-center justify-center hover:bg-muted-foreground/20 transition-colors">
          <X className="w-4 h-4" />
        </button>

        <div className="text-center">
          <div className="mb-1">
            <span className="bg-red-600 text-white px-3 py-0.5 rounded-full text-[10px] md:text-xs font-bold inline-block">⏰ SPECIAL OFFER!</span>
          </div>

          <div className="text-2xl md:text-4xl mb-2 mt-0.5">🔥</div>
          <h3 className="text-base md:text-xl font-black mb-1">UPGRADE TO PREMIUM PACK</h3>
          <p className="text-muted-foreground text-xs md:text-sm mb-2">
            Complete pack + 4 bonuses + Canva Access!
          </p>

          <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-lg p-2 md:p-4 mb-2 border-2 border-red-400">
            <span className="font-bold text-xs md:text-sm text-red-600">✨ PREMIUM OFFER ✨</span>
            <div className="text-[10px] md:text-xs text-foreground space-y-0.5 my-1.5">
              <p>✅ 200+ Templates (all formats)</p>
              <p>✅ Video tutorial + Canva Access</p>
              <p>✅ 4 free bonuses</p>
            </div>
            <p className="text-muted-foreground text-[10px] md:text-xs line-through">Was $27</p>
            <div className="flex items-center justify-center gap-0.5">
              <span className="text-base md:text-lg font-bold text-red-600">$</span>
              <span className="text-4xl md:text-5xl font-black text-red-600">15</span>
              <span className="text-base md:text-lg font-bold text-red-600"></span>
            </div>
            <p className="text-red-700 font-bold text-[11px] md:text-xs mt-1 animate-pulse">🎉 LIMITED TIME OFFER! 🎉</p>
          </div>

          <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5 flex items-center justify-center gap-1">
            <Download className="w-3 h-3 md:w-3.5 md:h-3.5" />
            📥 Instant Download
          </p>

          <a href={premium1990Url} target="_blank" rel="noopener noreferrer" data-utmify-checkout="true" className="block w-full">
            <span className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs md:text-base py-2 md:py-3 rounded-lg md:rounded-xl shadow-green transition-all active:scale-[0.98] animate-pulse text-center pointer-events-none">
              YES! UPGRADE TO PREMIUM 🚀
            </span>
          </a>

          <a href={basic1000Url} target="_blank" rel="noopener noreferrer" data-utmify-checkout="true" className="block w-full">
            <span className="block w-full mt-1.5 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold text-xs md:text-sm py-2 rounded-lg transition-all active:scale-[0.98] text-center pointer-events-none">
              NO THANKS, I WANT THE $10 USD PLAN
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const useFloatingPopupEN = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  return { isOpen, openPopup, closePopup };
};
