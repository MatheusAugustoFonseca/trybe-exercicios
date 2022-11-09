const fs = require('fs').promises;

async function readChar (id, name) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`)

  strings.forEach((string) => console.log(string));
}

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const chosenId = simpsons.find((simpson) => Number(simpson.id) === id);
  if(!chosenId) {
    throw new Error('id não encontrado');
  }
  return chosenId;
}

async function filterSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const removedSimpsons = simpsons.filter((char) => char.id !== '6' && char.id !== '10');
  await fs.writeFile('./simpsons.json', JSON.stringify(removedSimpsons, null, 2));
}

async function createNewJSON() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const chosenIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons.filter((simpson) => chosenIds.includes(Number(simpson.id)));
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily, null, 2));
}

async function addNelsonToFamily() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFam = JSON.parse(fileContent);
  simpsonsFam.push({id: '8', name: 'Nelson Muntz'})
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFam, null, 2));
}

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);
  
  const removeNelson = simpsonsFamily.filter((nelson) => nelson.id !== '8');
  const addMaggie = removeNelson
  .concat([{ id: '10', name:'Maggie Simpson'}])
  // simpsonsFamily.push({id: '5', name:'Maggie Simpson'})
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(addMaggie, null, 2));
}

// const removedSimpsons = simpsons.filter((char) => char.id !== '6' && char.id !== '10');
//   await fs.writeFile('./simpsons.json', JSON.stringify(removedSimpsons, null, 2));

function main() {
  // readChar();
  // getSimpsonById(3)
  // .then((simpson) => console.log(simpson));
  // filterSimpsons();
  // readChar();
  // createNewJSON();
  // addNelsonToFamily();
  replaceNelson();
}

main();