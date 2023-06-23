import path from 'path';
import os from 'os';

function getDirectoryPath(metaUrl: string) {
  let directoryPath = decodeURI(path.dirname(new URL(metaUrl).pathname));
  if (os.platform() === 'win32') {
    directoryPath = directoryPath.substring(1);
  }
  return directoryPath;
}

export { getDirectoryPath };
