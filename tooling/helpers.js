import { ROOT } from '@freecodecamp/freecodecamp-os/.freeCodeCamp/tooling/env.js';
import { readFile, readdir } from 'fs/promises';
import { Babeliser } from 'babeliser';
import { join } from 'path';

export async function babeliser(codeString) {
  return new Babeliser(codeString);
}

export async function getFile(path) {
  return await readFile(join(ROOT, path));
}

export async function getDirectory(path) {
  const files = await readdir(join(ROOT, path));
  return files;
}
