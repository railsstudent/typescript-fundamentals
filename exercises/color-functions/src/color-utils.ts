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
  let validR = Math.min(r, 255);
  validR = Math.max(0, validR);
  let validG = Math.min(g, 255);
  validG = Math.max(0, validG);
  let validB = Math.min(b, 255);
  validB = Math.max(0, validB);

  let hexR = validR.toString(16);
  let hexG = validG.toString(16);
  let hexB = validB.toString(16);

  if (hexR.length === 1) {
    hexR = `0${hexR}`;
  }
  if (hexG.length === 1) {
    hexG = `0${hexG}`;
  }
  if (hexB.length === 1) {
    hexB = `0${hexB}`;
  }
  return `${hexR}${hexG}${hexB}`;
};
