import { writeFileSync } from 'fs';

const TOKEN = process.argv[2];

console.log(TOKEN);

function main() {
  if (!TOKEN) {
    console.error('Please pass your token');
    return;
  }

  writeFileSync('./config/token.txt', TOKEN);
}

main();
