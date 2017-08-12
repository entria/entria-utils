// @flow
type RGB = {
  r: number,
  g: number,
  b: number,
};
export const hexToRGBObject = (hex: string): RGB => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    throw new Error('Bad hex');
  }

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};

export const hexToRGB = (hex: string): string => {
  const rgb = hexToRGBObject(hex);
  return `rgba(${rgb.r},${rgb.g},${rgb.b})`;
};

export const hexToRGBA = (hex: string, alpha: number = 1): string => {
  const rgb = hexToRGBObject(hex);
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
};
