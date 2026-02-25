/**
 * Load a Google Font dynamically by name
 * @param {string} fontName - The name of the font to load
 */
export function loadFont(fontName) {
  const encoded = encodeURIComponent(fontName);
  const id = `gfont-${encoded}`;
  if (!document.getElementById(id)) {
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${encoded}:wght@400;700&display=swap`;
    document.head.appendChild(link);
  }
}
