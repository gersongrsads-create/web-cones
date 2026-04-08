// ES showcase images - uses creations-es/ folder with "primero" images
// 38 images total from "primero" collection

const createImageRange = (names: string[]) =>
  names.map((name) => ({
    file: name,
    alt: `Cono de Corazón ${name.replace('.webp', '')}`,
  }));

const primerosImages = [
  "primero (1).webp",
  "primero (23).webp",
  "primero (24).webp",
  "primero (25).webp",
  "primero (26).webp",
  "primero (27).webp",
  "primero (28).webp",
  "primero (29).webp",
  "primero (30).webp",
  "primero (31).webp",
  "primero (32).webp",
  "primero (33).webp",
  "primero (34).webp",
  "primero (35).webp",
  "primero (36).webp",
  "primero (37).webp",
  "primero (38).webp",
  "primero (39).webp",
  "primero (40).webp",
  "primero (41).webp",
  "primero (42).webp",
  "primero (43).webp",
  "primero (44).webp",
  "primero (45).webp",
  "primero (46).webp",
  "primero (47).webp",
  "primero (48).webp",
  "primero (49).webp",
  "primero (50).webp",
  "primero (51).webp",
  "primero (52).webp",
  "primero (53).webp",
  "primero (54).webp",
  "primero (55).webp",
  "primero (56).webp",
  "primero (57).webp",
  "primero (58).webp",
  "primero (59).webp",
];

const allImages = createImageRange(primerosImages);

export const getImageUrlES = (filename: string): string => {
  return new URL(`../assets/creations-es/${filename}`, import.meta.url).href;
};

const shuffleWithSeed = (array: typeof allImages, seed: number) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor((Math.abs(Math.sin(seed + i) * 10000)) % (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// ShowcaseSectionES - All 38 "primero" images distributed in 3 rows
export const row1ImagesES = shuffleWithSeed(allImages, 1).slice(0, 14);
export const row2ImagesES = shuffleWithSeed(allImages, 2).slice(0, 14);
export const row3ImagesES = shuffleWithSeed(allImages, 3).slice(0, 14);

// ThemeCarouselSectionES variant 1 - Random subset
export const row4ImagesES = shuffleWithSeed(allImages, 4).slice(0, 14);
export const row5ImagesES = shuffleWithSeed(allImages, 5).slice(0, 14);
export const row6ImagesES = shuffleWithSeed(allImages, 6).slice(0, 14);

// ThemeCarouselSectionES variant 2 - Random subset
export const row7ImagesES = shuffleWithSeed(allImages, 7).slice(0, 14);
export const row8ImagesES = shuffleWithSeed(allImages, 8).slice(0, 14);
export const row9ImagesES = shuffleWithSeed(allImages, 9).slice(0, 14);

// ThemeCarouselSectionES variant 3/4 - Random subset
export const row10ImagesES = shuffleWithSeed(allImages, 10).slice(0, 14);
export const row11ImagesES = shuffleWithSeed(allImages, 11).slice(0, 14);
export const row12ImagesES = shuffleWithSeed(allImages, 12).slice(0, 14);

export const row13ImagesES = shuffleWithSeed(allImages, 13).slice(0, 14);
export const row14ImagesES = shuffleWithSeed(allImages, 14).slice(0, 14);
export const row15ImagesES = shuffleWithSeed(allImages, 15).slice(0, 14);
