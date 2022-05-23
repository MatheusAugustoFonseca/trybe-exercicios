const wakeUp = () => 'Acordando!!'

const coffee = () => 'Bora tomar café!!'

const sleep = () => 'Partiu dormir!!'


const doingThings = (callback) => {
  const result = callback();
  console.log(result);
  // console.log(param());
}
doingThings(wakeUp);

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.group);