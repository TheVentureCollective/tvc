export const initials = (n) =>
  n.replace(/^Dr\.\s*/, "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();

// Optical logo sizing: constant visual area, capped.
export const logoBox = (ratio, area, maxW, maxH) => {
  let h = Math.sqrt(area / ratio), w = h * ratio;
  if (h > maxH) { h = maxH; w = h * ratio; }
  if (w > maxW) { w = maxW; h = w / ratio; }
  return `width:${Math.round(w)}px;height:${Math.round(h)}px`;
};

export const logoSrc = (slug) => `/assets/logos/white/${slug}.png`;

export const delay = (i, cols = 4, step = 90) => String((i % cols) * step);

export const SHORT_SECTOR = {
  "Industrial & Advanced Manufacturing": "Industrial",
  "Energy & AI Infrastructure": "Energy & AI",
  "Healthcare & Applied Bio": "Healthcare & Bio",
  "Aerospace, Defense & Critical Materials": "Aerospace & Defense"
};
