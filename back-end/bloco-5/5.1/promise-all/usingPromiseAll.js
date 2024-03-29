// usingPromiseAll.js

const fs = require('fs').promises;

const files = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
]

async function main() {
  try {
    const promises = files.map(async (file, index) => {
      const contentFile = await fs.readFile(file, 'utf8');
      console.log(`File ${index + 1}: ${contentFile}`)
    }) 
    await Promise.all(promises);
    console.log(`That's all folks!`);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()