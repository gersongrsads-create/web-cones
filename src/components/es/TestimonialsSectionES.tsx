import { ThemeCarouselSectionES } from "@/components/es/ThemeCarouselSectionES";
import testimonialEN1 from "@/assets/testimonial-en-1.webp";
import testimonialEN2 from "@/assets/testimonial-en-2.webp";
import testimonialEN3 from "@/assets/testimonial-en-3.webp";
import testimonialEN4 from "@/assets/testimonial-en-4.webp";
import testimonialEN5 from "@/assets/testimonial-en-5.webp";
import testimonialNuevo1 from "@/assets/testimonial-en-nuevo1.webp";
import testimonialNuevo2 from "@/assets/testimonial-en-nuevo2.webp";
import testimonialNuevo3 from "@/assets/testimonial-en-nuevo3.webp";
import testimonialMarch2 from "@/assets/testimonial-en-march2.webp";

export const TestimonialsSectionES = () => {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-6 md:mb-8">
          <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
            Resultados Reales
          </span>
          <h2 className="text-xl md:text-3xl font-black mb-2">
            3,500+ <span className="text-gradient-blue">Creadoras Felices</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Mira lo que la gente dice sobre Plantillas de Corazones
          </p>
        </div>

        {/* Testimonio March2 - Laine destacado */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-soft border-2 border-accent/20 bg-gradient-to-b from-accent/5 to-white">
            <img src={testimonialMarch2} alt="Corazón impecable de la cliente Laine con acabado profesional" className="w-full h-auto" loading="lazy" />
          </div>
        </div>

        {/* Testimonio 1 - WhatsApp con corazón de Care Bears */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-soft border-2 border-accent/20 bg-gradient-to-b from-accent/5 to-white">
            <img src={testimonialNuevo1} alt="Mensaje de WhatsApp del cliente mostrando corazón" className="w-full h-auto" loading="lazy" />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-medium">Verificado</span>
              </div>
              <p className="text-sm text-foreground italic leading-relaxed">
                "¡¡¡Quedó PERFECTO!!! 😍 Hice estos para la fiesta de mi hija y todos preguntaban dónde los había comprado. ¡No podían creer que los hice yo misma! Super fácil de armar, ¡totalmente vale la pena!"
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-semibold">— Jessica R. • Comprador verificado ✅</p>
            </div>
          </div>
        </div>

        {/* Testimonio 2 - Mesa de venta con corazones */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-soft border-2 border-accent/20 bg-gradient-to-b from-accent/5 to-white">
            <img src={testimonialNuevo2} alt="Cliente vendiendo corazones en una feria" className="w-full h-auto" loading="lazy" />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                <span className="bg-accent text-accent-foreground text-[10px] px-2 py-0.5 rounded-full font-medium">Top Vendedor</span>
              </div>
              <p className="text-sm text-foreground italic leading-relaxed">
                "¡Puse un pequeño puesto en una feria local y vendí TODOS los corazones en solo 3 horas! 🤑 Gané más de $200 en una sola tarde. La gente estaba peleándose por los de Stitch y Bob Esponja. ¡Este pack se pagó 100 veces!"
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-semibold">— Maria L. • Comprador verificado ✅</p>
            </div>
          </div>
        </div>

        {/* Testimonio 3 - WhatsApp personalizado con Canva */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-soft border-2 border-accent/20 bg-gradient-to-b from-accent/5 to-white">
            <img src={testimonialNuevo3} alt="Cliente en WhatsApp mostrando corazones personalizados hechos con Canva" className="w-full h-auto" loading="lazy" />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-medium">Verificado</span>
              </div>
              <p className="text-sm text-foreground italic leading-relaxed">
                "Hice varios moldes personalizados con Canva, hice uno como regalo de cumpleaños para mi mamá y otro personalizado para una amiga. ¡Súper satisfecha con mi compra! ¡Muchas gracias! 😍"
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-semibold">— Comprador verificado ✅</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-center mb-3">
            <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold">
              ✨ Creados por clientes usando la Plantilla en Blanco Editable Bonus
            </span>
          </div>
          <div className="rounded-xl overflow-hidden shadow-soft max-w-lg mx-auto">
            <img src={testimonialEN2} alt="Diseños personalizados creados por clientes usando la plantilla editable en blanco" className="w-full h-auto" loading="lazy" />
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="font-bold text-base mb-1">Comentarios de Clientes</h3>
          <p className="text-muted-foreground text-xs">Mensajes reales de nuestros clientes</p>
        </div>

        <div className="flex flex-col gap-3 max-w-lg mx-auto">
          {[
            { img: testimonialEN1, label: "Instagram", color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" },
            { img: testimonialEN3, label: "Verificado", color: "bg-primary" },
            { img: testimonialEN4, label: "Verificado", color: "bg-primary" },
            { img: testimonialEN5, label: "Verificado", color: "bg-primary" },
          ].map((item, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden shadow-soft">
              <img src={item.img} alt={`Testimonio ${item.label}`} className="w-full h-auto" loading="lazy" />
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
            QUIERO LOS MISMOS RESULTADOS 👆
          </button>
        </div>
      </div>

      <div className="mt-8">
        <ThemeCarouselSectionES variant={2} />
      </div>
    </section>
  );
};
