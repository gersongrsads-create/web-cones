// Spanish testimonials for TestimonialsSectionES

export interface Testimonial {
  image: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const getTestimonialImageUrlES = (filename: string): string => {
  return new URL(`../assets/testimonios-es/${filename}`, import.meta.url).href;
};

export const testimonialsES: Testimonial[] = [
  {
    image: "testimonios (1).webp",
    name: "Amanda de Miami",
    location: "Miami, Florida 🇺🇸",
    text: "¡Acabo de comprar el Pack de Corazones y ya vendí 15! Mis clientes están locos con los diseños. Esto es un negocio real.",
    rating: 5,
  },
  {
    image: "testimonios (2).webp",
    name: "Sofía Rodríguez",
    location: "Bogotá, Colombia 🇨🇴",
    text: "Los diseños son profesionales y se venden SOLOS. He ganado más en una semana que en un mes completo antes.",
    rating: 5,
  },
  {
    image: "testimonios (3).webp",
    name: "Martina González",
    location: "Buenos Aires, Argentina 🇦🇷",
    text: "No lo podía creer. Imprimi el lunes y el viernes ya había ganado $400 USD. Esto cambió mi vida.",
    rating: 5,
  },
  {
    image: "testimonios (4).webp",
    name: "Valentina Silva",
    location: "Santiago, Chile 🇨🇱",
    text: "Mejor inversión que hice. El pack me cuesta casi nada y gano $5-$15 por diseño. Es un negocio hermoso.",
    rating: 5,
  },
  {
    image: "testimonios (5).webp",
    name: "Carolina Torres",
    location: "Lima, Perú 🇵🇪",
    text: "Mis clientes preguntan cuánto cuesta y pagan sin dudar. Los diseños venden por sí solos. ¡Increíble!",
    rating: 5,
  },
  {
    image: "testimonios (7).webp",
    name: "Isabella Fernández",
    location: "México CDMX 🇲🇽",
    text: "Ya voy en +$2,400 en ganancias este mes. No puedo parar de vender. Los diseños son TOP.",
    rating: 5,
  },
  {
    image: "testimonios (10).webp",
    name: "Lucía Morales",
    location: "San José, Costa Rica 🇨🇷",
    text: "Esto es lo mejor que encontré. Los diseños son tan bonitos que mis clientes vuelven siempre. Recomendado 100%.",
    rating: 5,
  },
  {
    image: "testimonios (11)_1.webp",
    name: "Ana Delgado",
    location: "Panamá 🇵🇦",
    text: "Desde que tengo el pack, mi negocio creció al doble. Es increíble cómo se venden estos diseños.",
    rating: 5,
  },
];
