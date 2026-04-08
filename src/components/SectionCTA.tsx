import { scrollToOferta } from "@/lib/scroll";

interface SectionCTAProps {
  text?: string;
  emoji?: string;
}

export const SectionCTA = ({ text = "GARANTIR MEU PACK AGORA", emoji = "👆" }: SectionCTAProps) => {

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={scrollToOferta}
        className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse"
      >
        {text} {emoji}
      </button>
    </div>
  );
};
