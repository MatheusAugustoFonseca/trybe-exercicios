const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2
  oddsAndEvens[1] = 3
  oddsAndEvens[2] = 4
  oddsAndEvens[3] = 7
  oddsAndEvens[4] = 10
  oddsAndEvens[5] = 13

  return oddsAndEvens;
}
const sortedArray = sortOddsAndEvens();

// for (let index = 0, index < oddsAndEvens.length; index += 1) {
//   if (oddsAndEvens[index] < oddsAndEvens[index + 1]) {

//   }
  
//   oddsAndEvens[index] = ordemCrescente.push
// }
// oddsAndEvens = oddsAndEvens.sort();


console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente.`); // será necessário alterar essa linha 😉