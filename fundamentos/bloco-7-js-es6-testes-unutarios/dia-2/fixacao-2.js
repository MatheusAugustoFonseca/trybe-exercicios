// // const customer1 = {
// //   firstName: 'Roberto',
// //   age: 22,
// //   job: 'Teacher',
// // };

// // console.log(customer1);

// // customer1.lastName = 'Faria';
// // console.log(customer1);

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// for (const property in coolestTvShow) {
//   console.log(property);
// }
// console.log(Object.keys(coolestTvShow));
console.log(Object.entries(coolestTvShow));