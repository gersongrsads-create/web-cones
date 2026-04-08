// Spanish bonuses for BonusSectionES

export interface Bonus {
  number: number;
  title: string;
  description: string;
  image: string;
  value: string;
}

export const getBonosImageUrlES = (filename: string): string => {
  return new URL(`../assets/bonos-es/${filename}`, import.meta.url).href;
};

export const bonusesES: Bonus[] = [
  {
    number: 1,
    title: "Plantilla Editable en Canva",
    description: "+200 corazones listos para personalizar con tus propios textos y colores",
    image: "bono 1.webp",
    value: "+$8 USD",
  },
  {
    number: 2,
    title: "Diseños en Blanco",
    description: "Plantillas en blanco para que crees tus propios diseños personalizados",
    image: "bono 2.webp",
    value: "+$12 USD",
  },
  {
    number: 3,
    title: "Pack de Cajas Cuadradas",
    description: "Diseños para cajas cuadradas y empaques premium para tus regalos",
    image: "bono 3.webp",
    value: "+$6 USD",
  },
  {
    number: 4,
    title: "Video Tutorial Completo",
    description: "Paso a paso para armar, decorar e imresionar a tus clientes",
    image: "bono 4.webp",
    value: "+$5 USD",
  },
];

export const packImagesES = {
  basic: "ES Pack basico.webp",
  premium: "ES Pack premium.webp",
};

export const getPackImageES = (type: "basic" | "premium"): string => {
  return new URL(`../assets/bonos-es/${packImagesES[type]}`, import.meta.url).href;
};
