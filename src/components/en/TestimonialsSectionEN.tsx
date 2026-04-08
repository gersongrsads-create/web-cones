import { ThemeCarouselSectionEN } from "@/components/en/ThemeCarouselSectionEN";
import testimonialEN1 from "@/assets/testimonial-en-1.webp";
import testimonialEN2 from "@/assets/testimonial-en-2.webp";
import testimonialEN3 from "@/assets/testimonial-en-3.webp";
import testimonialEN4 from "@/assets/testimonial-en-4.webp";
import testimonialEN5 from "@/assets/testimonial-en-5.webp";
import testimonialNuevo1 from "@/assets/testimonial-en-nuevo1.webp";
import testimonialNuevo2 from "@/assets/testimonial-en-nuevo2.webp";
import testimonialNuevo3 from "@/assets/testimonial-en-nuevo3.webp";
import testimonialMarch2 from "@/assets/testimonial-en-march2.webp";

export const TestimonialsSectionEN = () => {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
            Real Results
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            3,500+ <span className="text-gradient-blue">Happy Crafters</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            See what people are saying about Heart Cone Templates
          </p>
        </div>

        {/* Testimonio March2 - Laine destacado */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-soft border-2 border-accent/20 bg-gradient-to-b from-accent/5 to-white">
            <img src={testimonialMarch2} alt="Customer Laine's impeccable heart cone with professional finish" className="w-full h-auto" loading="lazy" />
          </div>
        </div>

        {/* Testimonio 1 - WhatsApp con cone de Care Bears */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-soft border-2 border-accent/20 bg-gradient-to-b from-accent/5 to-white">
            <img src={testimonialNuevo1} alt="Customer WhatsApp message showing heart cone" className="w-full h-auto" loading="lazy" />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-medium">Verified</span>
              </div>
              <p className="text-sm text-foreground italic leading-relaxed">
                "It turned out PERFECT! 😍 I made these for my daughter's party and everyone asked where I bought them. They couldn't believe I made them myself! Super easy to assemble, totally worth it!"
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-semibold">— Jessica R. • Verified buyer ✅</p>
            </div>
          </div>
        </div>

        {/* Testimonio 2 - Mesa de venta con conos */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-soft border-2 border-accent/20 bg-gradient-to-b from-accent/5 to-white">
            <img src={testimonialNuevo2} alt="Customer selling heart cones at a booth" className="w-full h-auto" loading="lazy" />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                <span className="bg-accent text-accent-foreground text-[10px] px-2 py-0.5 rounded-full font-medium">Top Seller</span>
              </div>
              <p className="text-sm text-foreground italic leading-relaxed">
                "I set up a small stand at a local fair and sold out ALL my cones in just 3 hours! 🤑 Made over $200 in one afternoon. People were fighting over the Stitch and SpongeBob ones. This pack paid for itself 100x over!"
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-semibold">— Maria L. • Verified buyer ✅</p>
            </div>
          </div>
        </div>

        {/* Testimonio 3 - WhatsApp personalizado con Canvas */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-soft border-2 border-accent/20 bg-gradient-to-b from-accent/5 to-white">
            <img src={testimonialNuevo3} alt="Customer WhatsApp showing personalized cones made with Canva" className="w-full h-auto" loading="lazy" />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-medium">Verified</span>
              </div>
              <p className="text-sm text-foreground italic leading-relaxed">
                "I made several personalized molds with Canva, made one as a birthday present for my mom and another customized for a friend. Super satisfied with my purchase! Thank you very much! 😍"
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-semibold">— Verified buyer ✅</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-center mb-3">
            <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold">
              ✨ Created by customers using the Editable Blank Template Bonus
            </span>
          </div>
          <div className="rounded-xl overflow-hidden shadow-soft max-w-lg mx-auto">
            <img src={testimonialEN2} alt="Custom designs created by customers using the editable blank template" className="w-full h-auto" loading="lazy" />
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="font-bold text-base mb-1">Customer Feedback</h3>
          <p className="text-muted-foreground text-xs">Real messages from our customers</p>
        </div>

        <div className="flex flex-col gap-3 max-w-lg mx-auto">
          {[
            { img: testimonialEN1, label: "Instagram", color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" },
            { img: testimonialEN3, label: "Verified", color: "bg-primary" },
            { img: testimonialEN4, label: "Verified", color: "bg-primary" },
            { img: testimonialEN5, label: "Verified", color: "bg-primary" },
          ].map((item, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden shadow-soft">
              <img src={item.img} alt={`Testimonial ${item.label}`} className="w-full h-auto" loading="lazy" />
              <div className={`absolute top-2 right-2 ${item.color} text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full font-medium`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98]"
          >
            I WANT THE SAME RESULTS 👆
          </button>
        </div>
      </div>

      <div className="mt-8">
        <ThemeCarouselSectionEN variant={2} />
      </div>
    </section>
  );
};
