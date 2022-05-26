const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multiplies = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};
numbers.forEach(multiplies);


const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
  // console.log(index);
  console.log(name);
};

names.forEach(convertToUpperCase);
console.log(names);