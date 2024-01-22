import { readFile, writeFile } from 'fs/promises';

const PATH =
  '../curriculum/locales/english/learn-bash-by-building-a-boilerplate.md';

/**
 * Ensures all lessons are incremented by 1
 */
async function rejig() {
  const file = await readFile(PATH, 'utf-8');
  let lessonNumber = -1;
  const newFile = file.replace(/## \d+/g, () => {
    lessonNumber++;
    return `## ${lessonNumber}`;
  });
  await writeFile(PATH, newFile, 'utf-8');
}

rejig();
