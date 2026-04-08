// ES cone images for ConeShowcaseSectionES - uses creations-es/ folder

const coneImageNames = [
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

const coneImagesES = coneImageNames.map((name) => ({
  file: name,
  alt: `Cono de Corazón ${name.replace('.webp', '')}`,
}));

export const getConeImageUrlES = (filename: string): string => {
  return new URL(`../assets/creations-es/${filename}`, import.meta.url).href;
};

const shuffleWithSeed = (array: typeof coneImagesES, seed: number) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor((Math.abs(Math.sin(seed + i) * 10000)) % (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// Uses all available images for ConeShowcaseSectionES
const allCones = coneImagesES;
export const coneRow1ES = shuffleWithSeed(allCones, 201).slice(0, 14);
export const coneRow2ES = shuffleWithSeed(allCones, 202).slice(0, 14);
export const coneRow3ES = shuffleWithSeed(allCones, 203).slice(0, 14);

export default coneImagesES;
