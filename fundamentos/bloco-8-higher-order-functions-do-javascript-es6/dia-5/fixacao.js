// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Banana', 'Morango', 'Manga'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Granola', 'Mel', 'Cocô ralado'];

// const fruitSalad = (fruit, additional) => {
//   // Esreva sua função aqui
//   return [...specialFruit, ...additionalItens];
// };

// console.log(fruitSalad(specialFruit, additionalItens));

//1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const fullData = {
  ...user,
  ...jobInfos,
};
// console.log(fullData);

const {name, age, nacionality, profession, squad, squadInitials} = fullData;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nacionality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
