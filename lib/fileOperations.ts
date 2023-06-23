import fs from 'fs';

function saveJsonToFile(filePath: string, data: unknown): void {
  fs.writeFile(filePath, JSON.stringify(data, null, 2), err =>
    err
      ? console.error('Error writing file', err)
      : console.log('Successfully wrote file')
  );
}

export { saveJsonToFile };
