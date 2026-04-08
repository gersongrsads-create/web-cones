interface Badge {
  emoji: string;
  text: string;
}

interface MarqueeBannerPersonaProps {
  badges: Badge[];
}

export const MarqueeBannerPersona = ({ badges }: MarqueeBannerPersonaProps) => {
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
