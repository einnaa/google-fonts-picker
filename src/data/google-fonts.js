export const googleFonts = [
  "Playfair Display", "Merriweather", "Lora", "EB Garamond", "Cormorant Garamond",
  "Libre Baskerville", "Crimson Text", "Source Serif 4", "Cardo", "Spectral",
  "Montserrat", "Raleway", "Oswald", "Bebas Neue", "Anton",
  "Poppins", "Nunito", "DM Sans", "Jost", "Outfit",
  "Space Grotesk", "Syne", "Manrope", "Plus Jakarta Sans", "Figtree",
  "Bitter", "Rokkitt", "Zilla Slab", "Arvo", "Rockwell",
  "Dancing Script", "Pacifico", "Righteous", "Lobster", "Abril Fatface",
  "Space Mono", "Roboto Mono", "Source Code Pro", "JetBrains Mono", "Fira Code",
];

export const HEADING_FONTS = googleFonts.filter((_, i) => i < 20).concat([
  "Cormorant", "Cinzel", "Bodoni Moda", "DM Serif Display", "Fraunces",
]);

export const BODY_FONTS = [
  "Lora", "Merriweather", "EB Garamond", "Source Serif 4", "Libre Baskerville",
  "Crimson Text", "Cardo", "Spectral", "Cormorant Garamond", "Bitter",
  "Poppins", "Nunito", "DM Sans", "Jost", "Outfit",
  "Manrope", "Plus Jakarta Sans", "Figtree", "Inter", "Work Sans",
  "Raleway", "Mulish", "Karla", "Cabin", "Barlow",
  "Source Sans 3", "Noto Sans", "Open Sans", "Muli", "Hind",
];

export const SAMPLE_PAIRS = [
  { heading: "Playfair Display", body: "Source Sans 3" },
  { heading: "Montserrat", body: "Merriweather" },
  { heading: "Oswald", body: "Lora" },
  { heading: "Bebas Neue", body: "DM Sans" },
  { heading: "Cormorant Garamond", body: "Jost" },
  { heading: "Syne", body: "Crimson Text" },
  { heading: "Fraunces", body: "Manrope" },
];

export const FONT_DESCRIPTIONS = {
  "Playfair Display": "Elegant serif",
  "Merriweather": "Readable serif",
  "Lora": "Literary serif",
  "EB Garamond": "Classical serif",
  "Cormorant Garamond": "Refined serif",
  "Montserrat": "Geometric sans",
  "Raleway": "Thin sans",
  "Oswald": "Condensed sans",
  "Bebas Neue": "Display caps",
  "Anton": "Bold impact",
  "Poppins": "Rounded sans",
  "Nunito": "Friendly round",
  "DM Sans": "Clean modern",
  "Jost": "Geometric clean",
  "Outfit": "Contemporary",
  "Space Grotesk": "Techy modern",
  "Syne": "Experimental",
  "Manrope": "Warm sans",
  "Fraunces": "Variable serif",
  "DM Serif Display": "Sharp serif",
};