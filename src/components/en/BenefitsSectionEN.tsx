import { Download, Printer, Scissors, TrendingUp, RefreshCw, Infinity } from "lucide-react";
import { scrollToOferta } from "@/lib/scroll";

const benefits = [
  { icon: Download, title: "Instant Digital Download", description: "Get your files immediately after purchase. No waiting!" },
  { icon: Printer, title: "Print at Home", description: "Regular letter paper or 65lb cardstock. Works perfectly!" },
  { icon: Scissors, title: "Easy to Assemble", description: "Step-by-step video tutorial included" },
  { icon: TrendingUp, title: "High Profit Margins", description: "Invest pennies, profit $20–$40 per cone" },
  { icon: RefreshCw, title: "Exclusive Designs", description: "Unique templates that set your business apart" },
  { icon: Infinity, title: "Print Forever", description: "Pay once, print as many copies as you want" },
];

export const BenefitsSectionEN = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-hero">
      <div className="container">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">
            Why Choose This Pack?
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            Low Investment, <span className="text-gradient-blue">High Returns</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-3 md:p-4 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-sm md:text-base mb-1">{benefit.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={scrollToOferta}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse"
          >
            I WANT MY SUPER PACK 👆
          </button>
        </div>
      </div>
    </section>
  );
};
