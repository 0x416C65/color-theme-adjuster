import path from 'path';
import inputObj from './json/input.json';
import { getDirectoryPath } from './utils';
import { adjustJsonColors, saveJsonToFile } from '@lib';

const colorModifier = { h: 0, s: 8, l: -3, a: 0 };
const outputJson = adjustJsonColors(inputObj, colorModifier);

const directoryPath = getDirectoryPath(import.meta.url);
saveJsonToFile(path.join(directoryPath, './json/output.json'), outputJson);

export { adjustJsonColors, saveJsonToFile };
