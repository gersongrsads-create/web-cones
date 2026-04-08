// Imágenes de cones para ConeShowcaseSection (usa rango 45-66 para no repetir con ShowcaseSection)
const coneImages = Array.from({ length: 140 }, (_, i) => ({
  file: `${i + 1}.webp`,
  alt: `Cone ${i + 1}`,
}));

export const getConeImageUrl = (filename: string): string => {
  return new URL(`../assets/cones/${filename}`, import.meta.url).href;
};

const shuffleWithSeed = (array: typeof coneImages, seed: number) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor((Math.abs(Math.sin(seed + i) * 10000)) % (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// Usa rango 45-66 exclusivo para ConeShowcaseSection
const section3 = coneImages.slice(44, 66);
export const coneRow1 = shuffleWithSeed(section3, 201).slice(0, 14);
export const coneRow2 = shuffleWithSeed(section3, 202).slice(0, 14);
export const coneRow3 = shuffleWithSeed(section3, 203).slice(0, 14);

export default coneImages;
