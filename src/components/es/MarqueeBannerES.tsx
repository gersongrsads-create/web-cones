import { getFormattedTomorrow } from "@/hooks/useDynamicDate";

const getBadges = () => {
  const tomorrow = getFormattedTomorrow();
  return [
    { emoji: "📥", text: "Descarga Digital Instantánea" },
    { emoji: "⭐", text: "Calificación 4.9/5" },
    { emoji: "🔥", text: `Precio sube ${tomorrow}` },
    { emoji: "💖", text: "3.500+ Emprendedoras Felices" },
    { emoji: "🎁", text: "4 Bonificaciones Gratis" },
    { emoji: "✂️", text: "200+ Plantillas" },
  ];
};

export const MarqueeBannerES = () => {
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
