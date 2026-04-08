import { getFormattedTomorrow } from "@/hooks/useDynamicDate";

const getBadges = () => {
  const tomorrow = getFormattedTomorrow();
  return [
    { emoji: "📥", text: "Instant Digital Download" },
    { emoji: "⭐", text: "4.9/5 Rating" },
    { emoji: "🔥", text: `Price goes up ${tomorrow}` },
    { emoji: "💖", text: "3,500+ Happy Crafters" },
    { emoji: "🎁", text: "4 Free Bonuses" },
    { emoji: "✂️", text: "200+ Templates" },
  ];
};

export const MarqueeBannerEN = () => {
  const badges = getBadges();

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...badges, ...badges, ...badges, ...badges].map((badge, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 px-3 md:px-4 text-xs md:text-sm font-medium whitespace-nowrap"
            >
              <span>{badge.emoji}</span>
              <span>{badge.text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
