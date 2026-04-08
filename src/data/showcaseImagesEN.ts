// EN showcase images - uses cones-en/ folder (separate from BR cones/)
// Section 1: cones 1-22 | Section 2: cones 23-44 | Section 3: cones 45-66 | Section 4: cones 67-86 | Section 5 (Easter): cones 87-100 | Section 6 (Women's Day): cones 101-110

const createConeRange = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => ({
    file: `${start + i}.webp`,
    alt: `Heart Cone ${start + i}`,
  }));

const section1 = createConeRange(1, 22);
const section2 = createConeRange(23, 44);
const section3 = createConeRange(45, 66);
const section4 = createConeRange(67, 86);
const sectionEaster = createConeRange(87, 100);
const sectionWomensDay = createConeRange(101, 110);

export const getImageUrlEN = (filename: string): string => {
  return new URL(`../assets/cones-en/${filename}`, import.meta.url).href;
};

const shuffleWithSeed = (array: { file: string; alt: string }[], seed: number) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor((Math.abs(Math.sin(seed + i) * 10000)) % (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// Section 1 (cones 1-22 + Easter + Women's Day) - ShowcaseSectionEN
const section1Seasonal = [...section1, ...sectionEaster, ...sectionWomensDay];
export const row1ImagesEN = shuffleWithSeed(section1Seasonal, 1).slice(0, 14);
export const row2ImagesEN = shuffleWithSeed(section1Seasonal, 2).slice(0, 14);
export const row3ImagesEN = shuffleWithSeed(section1Seasonal, 3).slice(0, 14);

// Section 2 (cones 23-44) - ThemeCarouselSectionEN variant 1
export const row4ImagesEN = shuffleWithSeed(section2, 4);
export const row5ImagesEN = shuffleWithSeed(section2, 5);
export const row6ImagesEN = shuffleWithSeed(section2, 6);

// Section 3 (cones 45-66) - ThemeCarouselSectionEN variant 2
export const row7ImagesEN = shuffleWithSeed(section3, 7);
export const row8ImagesEN = shuffleWithSeed(section3, 8);
export const row9ImagesEN = shuffleWithSeed(section3, 9);

// Section 4 (cones 67-86) - ThemeCarouselSectionEN variant 3/4
export const row10ImagesEN = shuffleWithSeed(section4, 10);
export const row11ImagesEN = shuffleWithSeed(section4, 11);
export const row12ImagesEN = shuffleWithSeed(section4, 12);

export const row13ImagesEN = shuffleWithSeed(section4, 13);
export const row14ImagesEN = shuffleWithSeed(section4, 14);
export const row15ImagesEN = shuffleWithSeed(section4, 15);
