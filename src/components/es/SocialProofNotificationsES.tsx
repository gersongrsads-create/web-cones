import { useState, useEffect } from "react";

const notifications = [
  { name: "Sarah", location: "Los Ángeles", source: "Instagram" },
  { name: "Emily", location: "Nueva York", source: "Facebook" },
  { name: "Jessica", location: "Chicago", source: "Web" },
  { name: "Ashley", location: "Houston", source: "Instagram" },
  { name: "Amanda", location: "Miami", source: "Facebook" },
  { name: "Brittany", location: "Phoenix", source: "Web" },
  { name: "Megan", location: "Dallas", source: "Instagram" },
  { name: "Lauren", location: "Atlanta", source: "Facebook" },
  { name: "Rachel", location: "Denver", source: "Instagram" },
  { name: "Stephanie", location: "Seattle", source: "Web" },
  { name: "Nicole", location: "San Diego", source: "Instagram" },
  { name: "Heather", location: "Portland", source: "Facebook" },
];

const sourceIcons: Record<string, string> = {
  Instagram: "📸",
  Facebook: "📘",
  Web: "🌐",
};

export const SocialProofNotificationsES = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(10);
  const [showSpots, setShowSpots] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => { setIsVisible(true); }, 4000);
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setShowSpots(prev => !prev);
        if (!showSpots) {
          setCurrentIndex((prev) => (prev + 1) % notifications.length);
        } else {
          setSpotsLeft((prev) => Math.max(1, prev - 1));
        }
        setIsVisible(true);
      }, 500);
    }, 10000);
    return () => { clearTimeout(initialTimer); clearInterval(interval); };
  }, [showSpots]);

  const notification = notifications[currentIndex];
  if (!isVisible) return null;

  if (showSpots) {
    return (
      <div className="fixed bottom-20 md:bottom-6 left-2 md:left-4 z-40 animate-slide-up">
        <div className="bg-highlight text-highlight-foreground rounded-xl shadow-medium py-2.5 px-3 flex items-center gap-2.5 max-w-[260px]">
          <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-lg flex-shrink-0">⏰</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold flex items-center gap-1">¡Apúrate!</p>
            <p className="text-[11px] font-medium">Solo <span className="font-black">{spotsLeft}</span> lugares a este precio</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-20 md:bottom-6 left-2 md:left-4 z-40 animate-slide-up">
      <div className="bg-white rounded-xl shadow-medium border border-border py-2.5 px-3 flex items-center gap-2.5 max-w-[260px]">
        <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-lg flex-shrink-0">👩</div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-foreground truncate">{notification.name} de {notification.location}</p>
          <p className="text-[11px] text-muted-foreground flex items-center gap-1">
            <span>{sourceIcons[notification.source]}</span>
            acaba de comprar el Pack de Corazones 💖
          </p>
        </div>
      </div>
    </div>
  );
};
