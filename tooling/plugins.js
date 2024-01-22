import { pluginEvents } from '@freecodecamp/freecodecamp-os/.freeCodeCamp/plugin/index.js';
import { ROOT } from '@freecodecamp/freecodecamp-os/.freeCodeCamp/tooling/env.js';
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';

pluginEvents.onTestsStart = async (project, testsState) => {
  console.log('onTestsStart');
};

pluginEvents.onTestsEnd = async (project, testsState) => {
  console.log('onTestsEnd');
};

pluginEvents.onProjectStart = async project => {
  console.log('onProjectStart');
};

pluginEvents.onProjectFinished = async project => {
  console.log('onProjectFinished');

  const dir = await readdir(join(ROOT, 'config'));

  if (dir.includes('token.txt')) {
    const token = await readFile(join(ROOT, 'config/token.txt'));
    console.log(`Using ${token} to save progress`);

    // Below is an example. A new endpoint should be created
    //   await fetch(
    //     'https://api.freecodecamp.org/challenge/coderoad-challenge-completed',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'CODEROAD-USER-TOKEN': token
    //       },
    //       body: JSON.stringify({
    //         tutorialId: project.dashedName
    //       })
    //     }
    //   );
  }
};

pluginEvents.onLessonFailed = async project => {
  console.log('onLessonFailed');
};

pluginEvents.onLessonPassed = async project => {
  console.log('onLessonPassed');
};
