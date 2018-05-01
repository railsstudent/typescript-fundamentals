export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const strR = hex.length === 3 ? `${hex[0]}${hex[0]}` : hex.substr(0, 2);
  const strG = hex.length === 3 ? `${hex[1]}${hex[1]}` : hex.substr(2, 2);
  const strB = hex.length === 3 ? `${hex[2]}${hex[2]}` : hex.substr(4, 2);

  return {
    r: parseInt(strR, 16),
    g: parseInt(strG, 16),
    b: parseInt(strB, 16)
  };
};

export const rgbToHex = (r: number, g: number, b: number): string => {
  const validR = Math.max(0, Math.min(r, 255));
  const validG = Math.max(0, Math.min(g, 255));
  const validB = Math.max(0, Math.min(b, 255));

  return [validR, validG, validB]
    .map(v => v.toString(16))
    .map(v => (v.length === 1 ? `0${v}` : v))
    .join("");
};
