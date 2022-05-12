// const fatorial = number => {
//   let mult = 1;
//   for (let index = 2; index <= number ; index += 1) {
//     mult = mult * index;
//   }
//   return mult;
// }
// console.log(fatorial(4));

const fatorial = number => number > 1 ? number * fatorial(number - 1) : 1;
console.log(fatorial(4));

