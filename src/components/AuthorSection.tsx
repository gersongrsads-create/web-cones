import maiaImg from "@/assets/maia-ig.webp";

interface AuthorSectionProps {
  description?: string;
}

export const AuthorSection = ({
  description = "Maia Aguiar é apaixonada por criar mimos que encantam e geram renda. Há anos ajudando empreendedoras a transformarem papel em lucro, ela desenvolveu o Super Pack de Cones de Coração para facilitar a vida de quem quer começar a vender sem complicação. 💖",
}: AuthorSectionProps) => {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-background to-white">
      <div className="container">
        <div className="text-center mb-6">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
            Quem criou
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            Conheça a <span className="text-gradient-blue">Criadora</span>
          </h2>
        </div>

        <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-soft">
          <img
            src={maiaImg}
            alt="Perfil do Instagram de Maia Aguiar - criadora dos Cones de Coração"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="max-w-md mx-auto mt-5 text-center px-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
