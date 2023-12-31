import tinycolor from 'tinycolor2';
import { ColorFormats, ColorModifier } from './types';
import {
  isObject,
  isArray,
  isString,
  isNumber
} from './utils';

function adjustColorHsl(color: string, colorModifier: ColorModifier): string {
  const colorObject = tinycolor(color);
  const originalFormat = colorObject.getFormat() as ColorFormats;
  const { a } = colorObject.toHsl();

  const isOpacityNumber = isNumber(a);
  const isModifierNumber = isNumber(colorModifier.a);
  const newOpacity =
    isOpacityNumber && isModifierNumber ? a + colorModifier.a : a;

  colorObject
    .spin(colorModifier.h)
    .saturate(colorModifier.s)
    .lighten(colorModifier.l)
    .setAlpha(newOpacity);

  switch (originalFormat) {
    case 'hex':
    case 'hex6':
    case 'hex3':
    case 'hex4':
    case 'hex8':
      return colorObject.toString('hex8');
    default:
      return colorObject.toString(originalFormat);
  }
}

function adjustJsonColors(
  jsonObject: unknown,
  colorModifier: ColorModifier
): unknown {
  if (isArray(jsonObject))
    return jsonObject.map(item => adjustJsonColors(item, colorModifier));

  if (isObject(jsonObject))
    return Object.fromEntries(
      Object.entries(jsonObject).map(([key, value]) => [
        key,
        adjustJsonColors(value, colorModifier)
      ])
    );

  const isValidColorString =
    isString(jsonObject) && tinycolor(jsonObject).isValid();
  if (isValidColorString) return adjustColorHsl(jsonObject, colorModifier);

  return jsonObject;
}

export { adjustJsonColors };
