import { useEffect } from "react";
import { Check, Shield, Zap, Crown, Clock, Sparkles, ArrowRight, Star } from "lucide-react";
import upgradeImg from "@/assets/upsell-upgrade-en.webp";
import canvaLogo from "@/assets/canva-logo.png";
import { buildCheckoutUrl } from "@/lib/utm";

const UPSELL_CHECKOUT = "https://pay.hotmart.com/F104505244V?off=t5rykwhp&checkoutMode=10";

const benefits = [
  "Edit text, colors, fonts & backgrounds",
  "Add your own logo or brand name",
  "Create unlimited custom designs",
  "Resize & adjust any element freely",
  "Use with free Canva account — no Pro needed",
  "Sell personalized cones at premium prices",
];

const objections = [
  { q: "Do I need Canva Pro?", a: "No! Works perfectly with the free version of Canva." },
  { q: "Is it hard to edit?", a: "If you can drag and drop, you can do this. It's that simple." },
  { q: "What if I already bought the basic pack?", a: "This is a separate upgrade. Your Canva files are fully editable versions of every template." },
];

const Sell1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // UTMify for Hotmart tracking
    const utmScript = document.createElement("script");
    utmScript.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
    utmScript.setAttribute("data-utmify-prevent-subids", "");
    utmScript.async = true;
    utmScript.defer = true;
    document.head.appendChild(utmScript);

    // Hotmart Sales Funnel Widget
    const hotmartScript = document.createElement("script");
    hotmartScript.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    hotmartScript.async = true;
    hotmartScript.onload = () => {
      if ((window as any).checkoutElements) {
        (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    };
    document.head.appendChild(hotmartScript);

    return () => {
      utmScript.remove();
      hotmartScript.remove();
    };
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* Progress */}
      <div className="bg-accent border-b border-accent py-2.5 px-4 text-center">
        <p className="text-xs font-semibold text-accent-foreground">
          Step <span className="font-black">1</span> of <span className="font-black">2</span> completed ✅
        </p>
      </div>

      {/* Urgency bar */}
      <div className="bg-primary text-white text-center py-2.5 px-4 text-xs md:text-sm font-bold tracking-wide">
        ⏰ EXCLUSIVE ONE-TIME OFFER — This page will not be shown again!
      </div>

      <div className="container max-w-2xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 bg-highlight text-highlight-foreground px-4 py-1.5 rounded-full text-xs font-bold mb-4 animate-pulse">
            <Crown className="w-3.5 h-3.5" />
            UPGRADE YOUR PACK
          </span>
          <h1 className="text-2xl md:text-4xl font-black leading-tight mb-3">
            Want to <span className="text-primary">Fully Customize</span> Every Single Template?
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Unlock the <strong className="text-foreground">editable Canva files</strong> for all 50+ heart cone designs. 
            Change colors, text, logos — make each cone <em>uniquely yours</em>.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden shadow-blue mb-8 border-2 border-primary/20">
          <img
            src={upgradeImg}
            alt="50+ fully editable heart cone templates in Canva"
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 pt-10">
            <p className="text-white text-center font-black text-sm md:text-lg drop-shadow-lg">
              ✨ 50+ Templates — Drag, Drop, Customize, Print & Sell!
            </p>
          </div>
        </div>

        {/* Pain → Solution */}
        <div className="bg-white rounded-2xl border-2 border-muted shadow-soft p-5 md:p-6 mb-6">
          <h2 className="text-lg md:text-xl font-black text-center mb-4">
            🤔 What if a customer wants a design you <span className="text-primary">don't have?</span>
          </h2>
          <div className="space-y-3 text-sm md:text-base text-muted-foreground">
            <p>
              With the basic PDF files, what you see is what you get. <strong className="text-foreground">You can't change a thing.</strong>
            </p>
            <p>
              But with the <strong className="text-foreground">Canva Editable Upgrade</strong>, you can open any template and customize <em>everything</em>:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 mt-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-accent/5 rounded-lg p-2.5">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social proof / profit angle */}
        <div className="bg-gradient-to-br from-primary to-pink-700 rounded-2xl p-5 md:p-6 mb-6 text-white">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-highlight" />
            <h3 className="font-black text-base md:text-lg">The Secret to Charging Premium Prices</h3>
          </div>
          <p className="text-sm md:text-base text-white/90 text-center leading-relaxed">
            Customers pay <strong className="text-highlight">2x–3x more</strong> for personalized cones with their name, 
            favorite character, or event theme. One custom order can pay for this entire upgrade.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black">$20</p>
              <p className="text-[11px] text-white/70">Generic cone</p>
            </div>
            <ArrowRight className="w-5 h-5 text-highlight" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-highlight">$40+</p>
              <p className="text-[11px] text-white/70">Custom cone</p>
            </div>
          </div>
        </div>

        {/* Canva badge */}
        <div className="flex items-center justify-center gap-3 bg-white rounded-xl border border-muted shadow-soft p-4 mb-6">
          <img src={canvaLogo} alt="Canva" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <div>
            <p className="text-sm font-bold text-foreground">Works with Free Canva</p>
            <p className="text-xs text-muted-foreground">No paid subscription required</p>
          </div>
        </div>

        {/* Objection busters */}
        <div className="space-y-3 mb-8">
          {objections.map((obj, i) => (
            <div key={i} className="bg-white rounded-xl border border-muted p-4 shadow-soft">
              <p className="font-bold text-sm text-foreground mb-1">❓ {obj.q}</p>
              <p className="text-sm text-muted-foreground">{obj.a}</p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="relative bg-gradient-to-br from-primary via-primary to-pink-700 rounded-2xl p-5 md:p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold mb-4 animate-bounce-slow shadow-green">
              <Clock className="w-3.5 h-3.5" />
              ONE-TIME OFFER — ONLY ON THIS PAGE
            </div>

            <h3 className="text-xl md:text-2xl font-black text-white mb-2 drop-shadow-lg">
              🎨 Canva Editable Upgrade
            </h3>
            <p className="text-white/80 text-sm mb-4">All 50+ templates fully editable in Canva</p>

            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20 mb-5 inline-block">
              <p className="text-white/60 text-sm line-through mb-1">Regular price: $49.90</p>
              <div className="flex items-center justify-center gap-0.5">
                <span className="text-xl font-bold text-white">$</span>
                <span className="text-5xl md:text-6xl font-black text-white drop-shadow-lg">14</span>
                <span className="text-xl font-bold text-white">.90</span>
              </div>
              <p className="text-highlight font-bold text-sm mt-1 flex items-center justify-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                Save $35.00 — Today Only!
              </p>
            </div>

            {/* Hotmart Sales Funnel Widget */}
            <div id="hotmart-sales-funnel" className="w-full min-h-[200px] [&_iframe]:!w-full [&_iframe]:!max-w-full [&_*]:!max-w-full" />

            <p className="text-white/70 text-xs mt-3 flex items-center justify-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              7-Day Money-Back Guarantee • Instant Delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell1;
