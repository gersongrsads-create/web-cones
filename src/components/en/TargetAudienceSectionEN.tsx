import { CheckCircle2 } from "lucide-react";
import { ThemeCarouselSectionEN } from "@/components/en/ThemeCarouselSectionEN";
import { scrollToOferta } from "@/lib/scroll";

const problems = [
  { emoji: "🎁", text: "Want to create unique gifts that delight and sell?" },
  { emoji: "💰", text: "Looking for a profitable side hustle with low investment?" },
  { emoji: "⏰", text: "No time to design templates from scratch?" },
  { emoji: "🌸", text: "Want to stand out with exclusive designs?" },
  { emoji: "📱", text: "Want to start a business from the comfort of home?" },
];

export const TargetAudienceSectionEN = () => {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="mb-6">
        <ThemeCarouselSectionEN variant={1} onClick={scrollToOferta} />
      </div>

      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
              This Is For You If...
            </span>
            <p className="text-muted-foreground text-sm md:text-base">
              Whether you're a <span className="font-bold text-foreground">gift shop owner</span>, <span className="font-bold text-foreground">crafter</span>, <span className="font-bold text-foreground">event planner</span> or <span className="font-bold text-foreground">stay-at-home parent wanting to earn extra</span>
            </p>
          </div>

          <div className="bg-gradient-hero rounded-xl p-4 md:p-6 space-y-3">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-soft">
                <span className="text-xl flex-shrink-0">{problem.emoji}</span>
                <p className="text-foreground text-sm md:text-base font-medium">{problem.text}</p>
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 ml-auto" />
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-base md:text-lg font-semibold mb-2">
              ✅ If you checked at least <span className="text-primary">1 item</span>, this pack is for you!
            </p>
            <p className="text-muted-foreground text-sm">
              📧 Get everything via email and start earning today 👇
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={scrollToOferta}
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98]"
            >
              I WANT TO START NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
