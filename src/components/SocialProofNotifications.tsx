import { useState, useEffect } from "react";

const notifications = [
  { name: "Ana", location: "São Paulo", source: "Instagram", gender: "f" },
  { name: "Mariana", location: "Rio de Janeiro", source: "Facebook", gender: "f" },
  { name: "Juliana", location: "Belo Horizonte", source: "WhatsApp", gender: "f" },
  { name: "Fernanda", location: "Curitiba", source: "Web", gender: "f" },
  { name: "Camila", location: "Porto Alegre", source: "Instagram", gender: "f" },
  { name: "Patricia", location: "Salvador", source: "Facebook", gender: "f" },
  { name: "Renata", location: "Fortaleza", source: "Instagram", gender: "f" },
  { name: "Beatriz", location: "Recife", source: "Web", gender: "f" },
  { name: "Luciana", location: "Manaus", source: "Facebook", gender: "f" },
  { name: "Amanda", location: "Goiânia", source: "Instagram", gender: "f" },
  { name: "Cristina", location: "Vitória", source: "Facebook", gender: "f" },
  { name: "Priscila", location: "Natal", source: "Instagram", gender: "f" },
];

const sourceIcons: Record<string, string> = {
  Instagram: "📸",
  Facebook: "📘",
  WhatsApp: "📱",
  Web: "🌐",
};

export const SocialProofNotifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(10);
  const [showSpots, setShowSpots] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

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

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [showSpots]);

  const notification = notifications[currentIndex];

  if (!isVisible) return null;

  if (showSpots) {
    return (
      <div className="fixed bottom-20 md:bottom-6 left-2 md:left-4 z-40 animate-slide-up">
        <div className="bg-highlight text-highlight-foreground rounded-xl shadow-medium py-2.5 px-3 flex items-center gap-2.5 max-w-[260px]">
          <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-lg flex-shrink-0">
            ⏰
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold flex items-center gap-1">
              Corre!
            </p>
            <p className="text-[11px] font-medium">
              Só restam <span className="font-black">{spotsLeft}</span> vagas com este preço
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-20 md:bottom-6 left-2 md:left-4 z-40 animate-slide-up">
      <div className="bg-white rounded-xl shadow-medium border border-border py-2.5 px-3 flex items-center gap-2.5 max-w-[260px]">
        <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-lg flex-shrink-0">
          👩
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-foreground truncate">
            {notification.name} de {notification.location.split(' ')[0]}
          </p>
          <p className="text-[11px] text-muted-foreground flex items-center gap-1">
            <span>{sourceIcons[notification.source]}</span>
            comprou o Pack por R$10 💖
          </p>
        </div>
      </div>
    </div>
  );
};
