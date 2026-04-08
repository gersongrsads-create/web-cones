import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ThemeCarouselSection } from "@/components/ThemeCarouselSection";
import { scrollToOferta } from "@/lib/scroll";

const faqs = [
  {
    question: "How do I receive the files?",
    answer: "📧 After payment, you receive instant access via email! The download link arrives in seconds, automatically.",
  },
  {
    question: "Are the files editable?",
    answer: "The files are ready to print — NO editing needed. You receive them in PDF, PNG, SVG & JPG formats (depending on your plan). Just download, print and assemble!",
  },
  {
    question: "What paper should I use?",
    answer: "We recommend 65lb cardstock for best results and durability. But regular letter-size paper also works for testing!",
  },
  {
    question: "What's the difference between Basic and Premium?",
    answer: "The Basic Plan includes all 200+ templates in PDF format. The Premium includes ALL formats (PDF, PNG, SVG, JPG), video tutorials, Access to Canva Editable (+200 Cones), and 3 more exclusive bonuses: Square Gift Box Pack, '8 Reasons' Box, and Blank Editable Canva Template.",
  },
  {
    question: "Can I use these to sell?",
    answer: "Absolutely! That's exactly what they're for! Many crafters use the cones to make candy bouquets, flower arrangements and gift kits, selling each for $5–$15. The profit margins are incredible!",
  },
  {
    question: "What if I don't like it?",
    answer: "You have a full 7-day money-back guarantee. If you're not satisfied, we'll refund 100% of your money, no questions asked. Zero risk!",
  },
  {
    question: "Do I need a cutting machine?",
    answer: "No! You can cut with regular scissors. But if you have a cutting machine, the SVG format works perfectly with it.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept Credit Card and PayPal. Choose whichever is most convenient for you!",
  },
];

export const FAQSectionEN = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-hero overflow-hidden">
      <div className="container">
        <div className="text-center mb-6">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
            Got Questions?
          </span>
          <h2 className="text-xl md:text-3xl font-black">
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl px-4 shadow-soft border-none">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-xs md:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex justify-center mt-6">
          <button onClick={scrollToOferta} className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse">
            I WANT MY SUPER PACK 👆
          </button>
        </div>
      </div>

      <div className="mt-8">
        <ThemeCarouselSection variant={3} />
      </div>
    </section>
  );
};
