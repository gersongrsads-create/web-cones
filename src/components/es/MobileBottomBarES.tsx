import { useEffect, useState } from "react";
import { getFormattedTomorrow } from "@/hooks/useDynamicDate";
import { Download } from "lucide-react";
import { scrollToOferta } from "@/lib/scroll";

export const MobileBottomBarES = () => {
  const [isVisible, setIsVisible] = useState(false);
  const tomorrow = getFormattedTomorrow();

  useEffect(() => {
    const handleScroll = () => { setIsVisible(window.scrollY > 200); };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50 md:hidden safe-area-bottom shadow-lg">
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="flex-shrink-0">
          <p className="text-[10px] text-muted-foreground">Desde</p>
          <div className="flex items-baseline gap-0.5">
            <span className="text-xs font-bold text-primary">$</span>
            <span className="text-2xl font-black text-primary">10</span>
            <span className="text-xs font-bold text-primary"></span>
          </div>
        </div>

        <div className="flex-shrink-0 bg-highlight/20 px-2 py-1.5 rounded-lg text-center">
          <p className="text-[10px] font-bold text-highlight-foreground flex items-center gap-1">🔥 Sube</p>
          <p className="text-sm font-black text-primary">{tomorrow}</p>
        </div>

        <button onClick={scrollToOferta} className="flex-1 bg-accent hover:bg-accent-hover text-accent-foreground font-bold py-3 rounded-xl text-center text-base shadow-green active:scale-[0.98] transition-transform flex items-center justify-center gap-1.5 animate-cta-pulse">
          <Download className="w-4 h-4" />
          CONSIGUE AHORA 👆
        </button>
      </div>
    </div>
  );
};
