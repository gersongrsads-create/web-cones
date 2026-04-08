// EN cone images for ConeShowcaseSectionEN - uses cones-en/ folder
const coneImagesEN = Array.from({ length: 100 }, (_, i) => ({
  file: `${i + 1}.webp`,
  alt: `Cone ${i + 1}`,
}));

export const getConeImageUrlEN = (filename: string): string => {
  return new URL(`../assets/cones-en/${filename}`, import.meta.url).href;
};

const shuffleWithSeed = (array: typeof coneImagesEN, seed: number) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor((Math.abs(Math.sin(seed + i) * 10000)) % (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// Uses range 45-66 exclusive for ConeShowcaseSectionEN
const section3 = coneImagesEN.slice(44, 66);
export const coneRow1EN = shuffleWithSeed(section3, 201).slice(0, 14);
export const coneRow2EN = shuffleWithSeed(section3, 202).slice(0, 14);
export const coneRow3EN = shuffleWithSeed(section3, 203).slice(0, 14);

export default coneImagesEN;
