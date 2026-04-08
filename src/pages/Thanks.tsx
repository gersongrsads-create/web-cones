import { useEffect } from "react";
import { CheckCircle, Mail, Monitor, Download, Heart, Shield, RefreshCw, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Check Your Email",
    desc: (
      <>
        You'll receive an email from <strong className="text-foreground">Hotmart</strong> within the next few minutes with your access details. Check your <strong className="text-foreground">inbox, promotions tab, and spam folder</strong>.
      </>
    ),
  },
  {
    icon: <Monitor className="w-5 h-5" />,
    title: "Access the Members Area",
    desc: "Click the link in the email to access the Hotmart members area. That's where all your heart cone templates, bonuses, and future updates will be available.",
  },
  {
    icon: <Download className="w-5 h-5" />,
    title: "Download & Start Creating",
    desc: "Download your Canva templates and start creating beautiful heart cones right away. Follow the step-by-step tutorials included — you'll have your first cone ready in minutes! 🎉",
  },
];

const badges = [
  { icon: <Shield className="w-4 h-4" />, label: "Lifetime access" },
  { icon: <RefreshCw className="w-4 h-4" />, label: "Free updates" },
  { icon: <Heart className="w-4 h-4" />, label: "7-day guarantee" },
  { icon: <MessageCircle className="w-4 h-4" />, label: "Email support" },
];

const Thanks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container max-w-2xl mx-auto px-4 py-12 md:py-20">
        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-accent" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-black text-center leading-tight mb-3">
          Your Purchase Was{" "}
          <span className="text-primary">Successful!</span>
        </h1>
        <p className="text-muted-foreground text-center text-base md:text-lg max-w-md mx-auto mb-3">
          🎉 Congratulations! You're one step closer to creating stunning heart cones that wow every customer.
        </p>

        {/* Files badge */}
        <div className="flex justify-center mb-12">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-bold">
            <Download className="w-4 h-4" />
            Your files are on the way!
          </span>
        </div>

        {/* What Happens Next */}
        <h2 className="text-xl md:text-2xl font-black text-center mb-6">
          📋 What Happens Next?
        </h2>

        <div className="space-y-4 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="bg-white border border-muted rounded-xl p-5 shadow-soft flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback / Share */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 md:p-8 text-center mb-10">
          <h2 className="text-lg md:text-xl font-black mb-2">We'd Love to See Your Creations! ✨</h2>
          <p className="text-muted-foreground text-sm mb-5">
            After you make your first heart cones, share a photo on Instagram and tag us! We feature our favourite customer designs.
          </p>
          <a
            href="https://wa.me/5511985653574?text=Hi!%20I%20just%20purchased%20the%20Heart%20Cone%20Templates%20pack%20and%20I%20have%20a%20question..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:brightness-110 text-accent-foreground font-bold text-sm px-6 py-3 rounded-xl transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Support via WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {badges.map((b, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-full">
              {b.icon}
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thanks;
