import path from 'path';
import inputObj from './json/input.json';
import { getDirectoryPath } from './utils';
import { adjustJsonColors } from './colorModifier';
import { saveJsonToFile } from './fileOperations';

const colorModifier = { h: 0, s: 1, l: 4, a: 0 };
const outputJson = adjustJsonColors(inputObj, colorModifier);

const directoryPath = getDirectoryPath(import.meta.url);
saveJsonToFile(path.join(directoryPath, './json/output.json'), outputJson);
