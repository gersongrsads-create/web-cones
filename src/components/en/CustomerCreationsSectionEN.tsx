import creation1 from "@/assets/creations-en/1.webp";
import creation2 from "@/assets/creations-en/2.webp";
import creation3 from "@/assets/creations-en/3.webp";
import creation4 from "@/assets/creations-en/4.webp";
import creation5 from "@/assets/creations-en/5.webp";
import creation6 from "@/assets/creations-en/6.webp";
import creation7 from "@/assets/creations-en/7.webp";
import creation8 from "@/assets/creations-en/8.webp";
import creation9 from "@/assets/creations-en/9.webp";
import creationFeatured from "@/assets/creations-en/featured.webp";
import ultimasEN1 from "@/assets/creations-en/ultimas-1.jpg";
import ultimasEN2 from "@/assets/creations-en/ultimas-2.jpg";

const scrollToOffer = () => {
  document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
};

const images = [
  { src: ultimasEN1, alt: "Latest customer creation with heart cones" },
  { src: ultimasEN2, alt: "Latest beautiful heart cone creation" },
  { src: creation2, alt: "Sunflower heart cone - Beautiful and Radiant" },
  { src: creation3, alt: "Happy Mother's Day printed heart cones" },
  { src: creation4, alt: "Mother's Day heart cones side by side" },
  { src: creation5, alt: "Snoopy heart cone - I Love You Happy Day" },
  { src: creation6, alt: "Happy Anniversary heart cone with roses" },
  { src: creation7, alt: "Mickey and Minnie heart cone - Happy Day" },
  { src: creation8, alt: "Display table with various heart cones for sale" },
  { src: creation9, alt: "Care Bears heart cone - Happy" },
];

export const CustomerCreationsSectionEN = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-white to-background">
      <div className="container px-4">
        <div className="text-center mb-5">
          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-3">
            📸 Made by Real Customers
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-1.5">
            They Printed, Assembled & <span className="text-gradient-blue">Profited!</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            See what our customers created with the Super Pack — and you can do the same today!
          </p>
        </div>

        {/* First two images - large grid */}
        <div className="max-w-4xl mx-auto mb-6 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            {images.slice(0, 2).map((img, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-soft hover:shadow-green transition-shadow cursor-pointer"
                onClick={scrollToOffer}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Featured image - full width on mobile */}
        <div className="max-w-4xl mx-auto mb-2 md:mb-3">
          <div className="rounded-xl overflow-hidden shadow-soft md:max-w-md md:mx-auto cursor-pointer hover:shadow-green transition-shadow" onClick={scrollToOffer}>
            <img
              src={creationFeatured}
              alt="Customer WhatsApp testimonial showing Mother's Day heart cones"
              className="w-full h-auto"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Rest of images in masonry */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3 max-w-4xl mx-auto">
          {images.slice(2).map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-2 md:mb-3 rounded-xl overflow-hidden shadow-soft hover:shadow-green transition-shadow duration-300 cursor-pointer"
              onClick={scrollToOffer}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto"
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={scrollToOffer}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-green transition-all active:scale-[0.98] animate-cta-pulse"
          >
            I WANT TO CREATE MINE TOO 👆
          </button>
        </div>
      </div>
    </section>
  );
};
