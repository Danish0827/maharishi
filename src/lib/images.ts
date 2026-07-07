// Curated wellness / Ayurveda imagery (Unsplash - free to use).
// Swap these for the exact Figma exports once available.
const U = (id: string, w = 1200, q = 70) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMG = {
  oilTherapy: U("photo-1544161515-4ab6ce6db874"), // warm oil / abhyanga
  hotStone: U("photo-1600334129128-685c5582fd35"), // hot-stone therapy
  spaProducts: U("photo-1540555700478-4be289fbecef"), // clean spa still life
  yogaSunset: U("photo-1506126613408-eca07ce68773"), // meditation at sunset
  shirodhara: U("photo-1512290923902-8a9f81dc236c"), // forehead / shirodhara
  diffuser: U("photo-1620733723572-11c53f73a416"), // candles + diffuser
  massage: U("photo-1591343395082-e120087004b4"), // therapy massage
  herbalOil: U("photo-1515377905703-c4788e51af15"), // pouring herbal oil
  clinic: U("photo-1519494026892-80bbd2d6fd0d"), // hospital reception
  diet: U("photo-1505576399279-565b52d4ac71"), // healthy diet
  yogaMountain: U("photo-1524863479829-916d8e77f114"), // yoga at sunrise
};

export type ImgKey = keyof typeof IMG;
