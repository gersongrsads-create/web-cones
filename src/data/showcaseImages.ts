// Imágenes de cones organizadas por secciones sin repetición
// Sección 1 (primer carrusel): Dia das Mães + Páscoa (115-140) - NUEVOS
// Sección 2: cones 1-22 | Sección 3: cones 23-44 | Sección 4: cones 45-86
// Sección 5 (último carrusel): Páscoa antigua + Dia da Mulher + Chocolates (87-114)

const createConeRange = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => ({
    file: `${start + i}.webp`,
    alt: `Cone de Coração ${start + i}`,
  }));

// Sección 1: Dia das Mães + Páscoa NUEVAS (primer carrusel - temas estacionales actuales)
const section1New = createConeRange(115, 140);

// Secciones intermedias
const section2 = createConeRange(1, 22);
const section3 = createConeRange(23, 44);
const section4 = createConeRange(45, 86);

// Sección antigua (ahora va al final): Páscoa + Dia da Mulher + Chocolates
const sectionOldSeasonal = createConeRange(87, 114);

export const getImageUrl = (filename: string): string => {
  return new URL(`../assets/cones/${filename}`, import.meta.url).href;
};

const shuffleWithSeed = (array: { file: string; alt: string }[], seed: number) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor((Math.abs(Math.sin(seed + i) * 10000)) % (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// Sección 1 (Dia das Mães + Páscoa NUEVAS) - ShowcaseSection - primer carrusel
export const row1Images = shuffleWithSeed(section1New, 1).slice(0, 14);
export const row2Images = shuffleWithSeed(section1New, 2).slice(0, 14);
export const row3Images = shuffleWithSeed(section1New, 3).slice(0, 14);

// Sección 2 (cones 1-22) - ThemeCarouselSection variant 1
export const row4Images = shuffleWithSeed(section2, 4);
export const row5Images = shuffleWithSeed(section2, 5);
export const row6Images = shuffleWithSeed(section2, 6);

// Sección 3 (cones 23-44) - ThemeCarouselSection variant 2
export const row7Images = shuffleWithSeed(section3, 7);
export const row8Images = shuffleWithSeed(section3, 8);
export const row9Images = shuffleWithSeed(section3, 9);

// Sección 4 (cones 45-86) - ThemeCarouselSection variant 3/4
export const row10Images = shuffleWithSeed(section4, 10);
export const row11Images = shuffleWithSeed(section4, 11);
export const row12Images = shuffleWithSeed(section4, 12);

export const row13Images = shuffleWithSeed(section4, 13);
export const row14Images = shuffleWithSeed(section4, 14);
export const row15Images = shuffleWithSeed(section4, 15);

// Sección 5 (antiguo seasonal - ahora último carrusel)
export const row16Images = shuffleWithSeed(sectionOldSeasonal, 16).slice(0, 14);
export const row17Images = shuffleWithSeed(sectionOldSeasonal, 17).slice(0, 14);
export const row18Images = shuffleWithSeed(sectionOldSeasonal, 18).slice(0, 14);

export default [...section1New, ...section2, ...section3, ...section4, ...sectionOldSeasonal];
