import maiaImg from "@/assets/maia-ig-en.webp";

export const AuthorSectionES = () => {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-background to-white">
      <div className="container">
        <div className="text-center mb-6">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
            Conoce a la Creadora
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            Sobre la <span className="text-gradient-blue">Diseñadora</span>
          </h2>
        </div>

        <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-soft">
          <img src={maiaImg} alt="Maia Aguiar - Diseñadora de Plantillas de Corazones" className="w-full h-auto" loading="lazy" />
        </div>

        <div className="max-w-md mx-auto mt-5 text-center px-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Maia Aguiar es apasionada por crear manualidades hermosas que deleitan y
            generan ingresos. Durante años ha ayudado a emprendedoras a convertir papel en
            ganancias, y desarrolló el Super Pack de Plantillas de Corazones para facilitar
            que cualquiera comience a vender sin complicaciones. 💖
          </p>
        </div>
      </div>
    </section>
  );
};
