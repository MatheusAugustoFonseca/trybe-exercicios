const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((names) => names === name);
}

console.log(hasName(names, 'Ana'));