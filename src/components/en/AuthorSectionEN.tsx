import maiaImg from "@/assets/maia-ig-en.webp";

export const AuthorSectionEN = () => {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-background to-white">
      <div className="container">
        <div className="text-center mb-6">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
            Meet the Creator
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            About the <span className="text-gradient-blue">Designer</span>
          </h2>
        </div>

        <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-soft">
          <img src={maiaImg} alt="Maia Aguiar - Heart Cone Templates designer" className="w-full h-auto" loading="lazy" />
        </div>

        <div className="max-w-md mx-auto mt-5 text-center px-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Maia Aguiar is passionate about creating beautiful crafts that delight and 
            generate income. For years she's been helping entrepreneurs turn paper into 
            profit, and she developed the Super Pack of Heart Cone Templates to make it 
            easy for anyone to start selling without any hassle. 💖
          </p>
        </div>
      </div>
    </section>
  );
};
