type ColorModifier = {
  h: number;
  s: number;
  l: number;
  a: number;
};

type ColorFormats =
  | 'rgb'
  | 'prgb'
  | 'hex'
  | 'hex6'
  | 'hex3'
  | 'hex4'
  | 'hex8'
  | 'name'
  | 'hsl'
  | 'hsv';

export type { ColorModifier, ColorFormats };
