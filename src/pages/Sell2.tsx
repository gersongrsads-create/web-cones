import { useEffect, useState, useRef } from "react";
import { Check, Shield, Clock, Sparkles, ArrowDown, Gift, Heart, Star, Award, Package } from "lucide-react";

// Images
import heroImg from "@/assets/sell2/hero-sell2-branding.webp";
import clipart1 from "@/assets/sell2/clipart-1.webp";
import clipart2 from "@/assets/sell2/clipart-2.webp";
import clipart3 from "@/assets/sell2/clipart-3.webp";
import clipart4 from "@/assets/sell2/clipart-4.webp";
import clipart5 from "@/assets/sell2/clipart-5.webp";
import clipart6 from "@/assets/sell2/clipart-6.webp";
import giftTag1 from "@/assets/sell2/gift-tag-1.webp";
import giftTag2 from "@/assets/sell2/gift-tag-2.webp";
import giftTag3 from "@/assets/sell2/gift-tag-3.webp";
import giftTag4 from "@/assets/sell2/gift-tag-4.webp";
import giftTag5 from "@/assets/sell2/gift-tag-5.webp";
import giftTag6 from "@/assets/sell2/gift-tag-6.webp";
import giftTag7 from "@/assets/sell2/gift-tag-7.webp";
import thankyou1 from "@/assets/sell2/thankyou-1.webp";
import thankyou2 from "@/assets/sell2/thankyou-2.webp";
import thankyou3 from "@/assets/sell2/thankyou-3.webp";
import thankyou4 from "@/assets/sell2/thankyou-4.webp";

const UPSELL_CHECKOUT = "https://pay.hotmart.com/F104505244V?off=t5rykwhp&checkoutMode=10";

const Sell2 = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // UTMify
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

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeStr = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress bar */}
      <div className="bg-primary text-white py-3 px-4 text-center">
        <p className="text-sm font-bold">
          ✅ Step 1 of 2 — Complete your order
        </p>
        <div className="w-full max-w-xs mx-auto mt-2 h-1.5 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-accent rounded-full" />
        </div>
      </div>

      <div className="container max-w-2xl mx-auto px-4 py-8 md:py-12">
        {/* Urgency badge */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            ONE-TIME OFFER • {timeStr} LEFT
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-black text-center leading-tight mb-3">
          Get The Matching{" "}
          <span className="text-primary">Heart Cone Branding Kit!</span>
        </h1>
        <p className="text-muted-foreground text-center text-sm md:text-base max-w-lg mx-auto mb-4">
          Editable Canva templates, printable cone wrappers, sweet treats stickers & thank you cards — everything you need to turn your cones into a <strong className="text-foreground">premium, branded product</strong> customers rave about.
        </p>

        {/* Price */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xl text-muted-foreground line-through">$47</span>
          <span className="text-4xl md:text-5xl font-black text-primary">$17</span>
          <span className="text-muted-foreground text-sm">USD</span>
        </div>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden shadow-blue mb-6 border border-muted">
          <img src={heroImg} alt="Heart Cone Branding Kit — Editable Canva Templates, Printable Wrappers, Stickers & Thank You Cards" className="w-full h-auto" />
        </div>

        {/* CTA scroll button */}
        <button
          onClick={scrollToCTA}
          className="block w-full bg-accent hover:brightness-110 text-accent-foreground font-black text-base md:text-lg py-4 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse mb-2"
        >
          <span className="flex items-center justify-center gap-2">
            YES! ADD TO MY ORDER FOR ONLY $17
            <ArrowDown className="w-5 h-5" />
          </span>
        </button>
        <p className="text-muted-foreground text-xs text-center mb-10">
          ⚡ Instant Digital Download • One-click purchase • 🔒 Secure
        </p>

        {/* ========== WHAT YOU GET ========== */}
        <SectionLabel icon={<Gift className="w-5 h-5" />} label="What You Get" />
        <h2 className="text-xl md:text-2xl font-black text-center mb-2">Everything Inside This Kit</h2>
        <p className="text-muted-foreground text-center text-sm mb-6">Three powerful add-ons that transform your heart cones from "cute" to "I need to order 50 of these"</p>

        {/* Value stack */}
        <ValueStack />

        {/* ========== INCLUDED #1: CLIPART ========== */}
        <IncludedBadge number={1} />
        <h2 className="text-xl md:text-2xl font-black text-center mb-2">Sweet Treats Sticker & Clipart Collection</h2>
        <p className="text-muted-foreground text-center text-sm mb-6 max-w-lg mx-auto">
          69 hand-painted watercolor PNG elements — cupcakes, strawberries, hearts, drinks & more. Use them to decorate your cones, create social media posts, or design custom stickers. 300 DPI with transparent backgrounds. Commercial use included.
        </p>
        <ImageGallery images={[clipart1, clipart2, clipart3, clipart4, clipart5, clipart6]} alt="Sweet Treats Clipart" />
        <MiniCTA onClick={scrollToCTA} />

        {/* ========== INCLUDED #2: GIFT TAGS ========== */}
        <IncludedBadge number={2} />
        <h2 className="text-xl md:text-2xl font-black text-center mb-2">Editable Gift Tags & Cone Wrappers</h2>
        <p className="text-muted-foreground text-center text-sm mb-6 max-w-lg mx-auto">
          Fully editable Canva templates — add names, prices, event details, or your brand logo. Multiple sizes and shapes included. Just edit, print, cut, and attach. Makes every cone feel like a custom order.
        </p>
        <ImageGallery images={[giftTag1, giftTag2, giftTag3, giftTag4, giftTag5, giftTag6, giftTag7]} alt="Gift Tag Templates" />
        <MiniCTA onClick={scrollToCTA} />

        {/* ========== INCLUDED #3: THANK YOU CARDS ========== */}
        <IncludedBadge number={3} />
        <h2 className="text-xl md:text-2xl font-black text-center mb-2">Thank You Cards — 10 Branded Designs</h2>
        <p className="text-muted-foreground text-center text-sm mb-6 max-w-lg mx-auto">
          Professional 5.5" × 4.25" cards fully editable in Canva. Drop in your logo, Instagram, website, or a heartfelt message. Slip one into every order — it's the #1 trick to getting repeat customers without spending a dime on ads.
        </p>
        <ImageGallery images={[thankyou1, thankyou2, thankyou3, thankyou4]} alt="Thank You Cards" />
        <MiniCTA onClick={scrollToCTA} />

        {/* ========== WHY THIS UPGRADE MATTERS ========== */}
        <SectionLabel icon={<Star className="w-5 h-5" />} label="Why This Upgrade Matters" />
        <h2 className="text-xl md:text-2xl font-black text-center mb-6">
          You Already Have The Templates.<br />
          <span className="text-primary">This Kit Makes Them Worth 2x More.</span>
        </h2>
        <p className="text-muted-foreground text-center text-sm mb-8">
          The difference between a $15 cone and a $40 cone? Presentation. This kit gives you that edge instantly.
        </p>

        <div className="grid gap-4 mb-10">
          <BenefitCard icon={<Award className="w-6 h-6 text-primary" />} title="Instant Premium Look" desc="Custom tags, stickers, and thank you cards make your cones look like they came from a high-end boutique — not a home kitchen." />
          <BenefitCard icon={<Heart className="w-6 h-6 text-primary" />} title="One Sale Pays for Everything" desc="Charge $5–$10 more per cone with branded presentation. This $17 kit pays for itself with your very first order." />
          <BenefitCard icon={<Gift className="w-6 h-6 text-primary" />} title="Customers Come Back Without Ads" desc="A thank you card with your social media and logo turns every buyer into a repeat customer — no ad spend needed." />
        </div>

        {/* ========== PERFECT MATCH ========== */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-5 md:p-8 text-center mb-10">
          <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">PERFECT MATCH</span>
          <h2 className="text-lg md:text-xl font-black mb-2">Designed to Match Your Heart Cone Templates Perfectly</h2>
          <p className="text-muted-foreground text-sm mb-4">
            The stickers, tags, and cards in this kit were created to complement the heart cone designs you just bought. Same aesthetic, same vibe — everything works together seamlessly.
          </p>
          <p className="text-primary font-bold text-sm">⚠️ Not sold separately. Only available right now, on this page.</p>
        </div>

        {/* ========== FINAL CTA ========== */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-1.5 text-primary text-sm font-bold">
            <Clock className="w-4 h-4" />
            Only {timeStr} left at this price
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-black text-center mb-2">Complete Your Order Before Time Runs Out</h2>
        <p className="text-muted-foreground text-center text-sm mb-6">
          This is a one-time upgrade. Once you leave this page, it won't be available again.
        </p>

        <div ref={ctaRef} className="relative bg-gradient-to-br from-primary via-primary to-pink-700 rounded-2xl p-5 md:p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
          <div className="relative">
            <h3 className="text-lg md:text-xl font-black text-white mb-1">Heart Cone Branding Upgrade Kit</h3>
            <p className="text-white/70 text-sm mb-4">One-time add-on to your cone templates</p>

            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20 mb-2 inline-block">
              <p className="text-white/50 text-xs mb-1">Regular price</p>
              <p className="text-white/60 text-lg line-through">$47.00</p>
              <p className="text-highlight text-xs font-bold mt-2 mb-1">YOUR EXCLUSIVE PRICE TODAY:</p>
              <div className="flex items-center justify-center gap-0.5">
                <span className="text-xl font-bold text-white">$</span>
                <span className="text-5xl md:text-6xl font-black text-white drop-shadow-lg">17</span>
                <span className="text-sm text-white/70 ml-1">USD</span>
              </div>
              <p className="text-highlight font-bold text-sm mt-2">YOU SAVE $30.00 (64% OFF)</p>
            </div>

            <div className="text-left bg-white/10 rounded-xl p-4 border border-white/20 mb-5 text-sm text-white/90 space-y-2">
              <p className="text-white font-bold text-xs mb-2">Everything included:</p>
              {[
                "Sweet Treats Sticker & Clipart Pack (69 PNG, 300 DPI)",
                "Editable Gift Tags & Cone Wrappers (Canva templates)",
                "Thank You Cards Set (10 branded designs)",
                "Commercial license for all items",
                "Instant digital download",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-highlight flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Hotmart Sales Funnel Widget */}
            <div id="hotmart-sales-funnel" className="w-full min-h-[200px] [&_iframe]:!w-full [&_iframe]:!max-w-full [&_*]:!max-w-full [&>div]:!w-full [&>div>div]:!w-full" />

            <p className="text-white/70 text-xs mt-3 flex items-center justify-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Secure checkout • ⚡ Instant download • 7-day money-back guarantee
            </p>
          </div>
        </div>
      </div>

      {/* Sticky bottom bar */}
      <StickyBottomBar timeStr={timeStr} onCTA={scrollToCTA} />
    </div>
  );
};

/* ===== Sub-components ===== */

const SectionLabel = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center justify-center gap-2 mb-2 mt-10">
    <span className="text-primary">{icon}</span>
    <span className="text-primary text-xs font-bold tracking-widest uppercase">{label}</span>
  </div>
);

const IncludedBadge = ({ number }: { number: number }) => (
  <div className="flex justify-center mt-10 mb-3">
    <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full">
      INCLUDED #{number}
    </span>
  </div>
);

const ValueStack = () => {
  const items = [
    { name: "Sweet Treats Sticker & Clipart Pack (69 PNG – commercial use)", price: "$19" },
    { name: "Editable gift tags & cone wrappers (Canva templates)", price: "$12" },
    { name: "Thank you cards — 10 branded designs", price: "$10" },
    { name: "Commercial license for all items", price: "$6" },
  ];
  return (
    <div className="bg-muted/50 rounded-2xl border border-muted p-4 md:p-6 mb-8">
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-sm text-foreground">{item.name}</span>
            </div>
            <span className="text-sm font-bold text-muted-foreground line-through whitespace-nowrap">{item.price}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-muted mt-4 pt-4 flex items-center justify-between">
        <span className="text-sm font-bold text-foreground">Total value:</span>
        <span className="text-sm font-bold text-muted-foreground line-through">$47.00</span>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-sm font-black text-primary">You pay today:</span>
        <span className="text-xl font-black text-primary">$17</span>
      </div>
      <p className="text-xs text-primary font-bold text-center mt-3">
        This price will NOT be available if you leave this page
      </p>
    </div>
  );
};

const ImageGallery = ({ images, alt }: { images: string[]; alt: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const scrollPosRef = useRef(0);

  // Duplicate images for seamless infinite loop
  const loopImages = [...images, ...images];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.6;
    let animId: number;

    // Calculate the width of one full set of images
    const getHalfWidth = () => {
      const totalChildren = el.children.length;
      const half = totalChildren / 2;
      let w = 0;
      for (let i = 0; i < half; i++) {
        const child = el.children[i] as HTMLElement;
        w += child.offsetWidth + 12; // 12px = gap-3
      }
      return w;
    };

    const animate = () => {
      if (!pausedRef.current) {
        scrollPosRef.current += speed;
        const halfWidth = getHalfWidth();
        // When we've scrolled past the first set, reset seamlessly
        if (scrollPosRef.current >= halfWidth) {
          scrollPosRef.current -= halfWidth;
        }
        el.scrollLeft = scrollPosRef.current;
      }
      animId = requestAnimationFrame(animate);
    };

    // Touch / pointer events for pause & manual scroll
    let startX = 0;
    let startScroll = 0;

    const onPointerDown = (e: PointerEvent) => {
      pausedRef.current = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!pausedRef.current) return;
      const dx = e.clientX - startX;
      el.scrollLeft = startScroll - dx;
    };

    const onPointerUp = () => {
      scrollPosRef.current = el.scrollLeft;
      // Wrap position if needed
      const halfWidth = getHalfWidth();
      if (scrollPosRef.current >= halfWidth) {
        scrollPosRef.current -= halfWidth;
        el.scrollLeft = scrollPosRef.current;
      }
      pausedRef.current = false;
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex gap-3 overflow-x-hidden pb-2 mb-4 cursor-grab active:cursor-grabbing touch-pan-y select-none"
    >
      {loopImages.map((src, i) => (
        <div key={i} className="flex-shrink-0 w-[80%] md:w-[45%] rounded-xl overflow-hidden border border-muted shadow-soft">
          <img src={src} alt={`${alt} ${(i % images.length) + 1}`} className="w-full h-auto pointer-events-none" loading="lazy" draggable={false} />
        </div>
      ))}
    </div>
  );
};

const MiniCTA = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="block w-full bg-accent hover:brightness-110 text-accent-foreground font-bold text-sm py-3 rounded-xl shadow-green transition-all active:scale-[0.98] mb-6"
  >
    Yes, add this to my order
  </button>
);

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="bg-white border border-muted rounded-xl p-5 shadow-soft">
    <div className="flex items-center gap-3 mb-2">
      {icon}
      <h3 className="font-bold text-foreground">{title}</h3>
    </div>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
);

const StickyBottomBar = ({ timeStr, onCTA }: { timeStr: string; onCTA: () => void }) => (
  <div className="fixed bottom-0 inset-x-0 bg-white border-t border-muted shadow-lg z-50 p-3 safe-area-bottom">
    <div className="container max-w-2xl mx-auto flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-sm">
        <span className="font-black text-primary">$17</span>
        <span className="text-muted-foreground line-through text-xs">$47</span>
        <span className="text-xs text-muted-foreground">⏰ {timeStr}</span>
      </div>
      <button
        onClick={onCTA}
        className="bg-accent text-accent-foreground font-bold text-sm px-5 py-2.5 rounded-lg shadow-green transition-all active:scale-[0.98] animate-cta-pulse whitespace-nowrap"
      >
        ⚡ One-time offer
      </button>
    </div>
  </div>
);

export default Sell2;
