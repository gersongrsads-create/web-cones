import { Gift } from "lucide-react";
import { scrollToOferta } from "@/lib/scroll";
import bonusCanvaNew from "@/assets/bonus-canva-new.webp";
import bonusCanva from "@/assets/bonus-canva.webp";
import bonusKit from "@/assets/bonus-kit.webp";
import bonusStories from "@/assets/bonus-stories.webp";

const bonusItems = [
  { number: 1, title: "Access to Canva Editable (+200 Cones)", description: "Professional templates ready to customize!", value: "$12", image: bonusCanvaNew },
  { number: 2, title: "Blank Template, Editable in Canva", description: "Customize with any colors and themes you want!", value: "$6", image: bonusCanva },
  { number: 3, title: "Square Gift Box Pack", description: "Ready-to-assemble box templates to sell!", value: "$5", image: bonusKit },
  { number: 4, title: "'8 Reasons to Say Yes' Box", description: "The most creative and emotional gift box", value: "$4", image: bonusStories },
];

export const BonusSectionEN = () => {
  return (
    <section className="py-10 md:py-14 bg-gradient-hero">
      <div className="container">
        <div className="text-center mb-6">
          <span className="inline-block bg-highlight text-highlight-foreground px-4 py-1.5 rounded-full text-xs font-bold mb-3 animate-pulse">
            EXCLUSIVE BONUSES 🎁
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            Get <span className="text-gradient-blue">4 FREE BONUSES</span> With Premium
          </h2>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1.5">
            Included in the Complete Premium Pack
          </p>
        </div>

        <div className="space-y-3 max-w-lg mx-auto mb-6">
          {bonusItems.map((bonus, index) => (
            <div key={index} className="relative bg-white rounded-xl p-3 shadow-soft flex gap-3 items-center overflow-hidden">
              <div className="absolute -top-1 -right-1 w-8 h-8">
                <div className="absolute top-0 right-0 w-full h-full bg-accent rounded-full" />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-hero rounded-full" />
              </div>
              <img src={bonus.image} alt={bonus.title} className="w-28 h-28 md:w-20 md:h-20 object-contain rounded-lg flex-shrink-0" loading="lazy" decoding="async" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{bonus.number}</span>
                  <span className="text-muted-foreground line-through text-xs">{bonus.value}</span>
                  <span className="bg-accent text-white px-1.5 py-0.5 rounded text-[10px] font-bold">FREE</span>
                </div>
                <h3 className="font-bold text-sm leading-tight">{bonus.title}</h3>
                <p className="text-muted-foreground text-xs">{bonus.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-sm mx-auto mb-6 bg-white rounded-xl p-3 shadow-soft">
          <div className="flex justify-between text-sm mb-1.5">
            <span className="font-medium text-muted-foreground">32 people purchased today</span>
            <span className="text-accent font-bold">96%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full" style={{ width: '96%' }} />
          </div>
          <p className="text-muted-foreground text-xs mt-1.5 text-center">⚠️ Bonuses available for a limited time</p>
        </div>

        <div className="flex justify-center">
          <button onClick={scrollToOferta} className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] flex items-center gap-2 animate-cta-pulse">
            <Gift className="w-4 h-4" />
            I WANT THE FREE BONUSES 🎁
          </button>
        </div>
      </div>
    </section>
  );
};
