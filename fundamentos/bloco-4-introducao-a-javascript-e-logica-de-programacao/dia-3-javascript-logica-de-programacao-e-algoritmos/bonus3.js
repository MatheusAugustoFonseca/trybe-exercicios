// // REFAZER

// let sparkles = "*";
// let n = 5;
// let line ="";
// let space = n;

// for (let i = 0; i <= n; i += 1){
//     for (let spaceindex = 0; spaceindex <= n; spaceindex += 1){
//         if (spaceindex < n) {
//             line += " ";
//         } else {
//             line += sparkles;
//         }
//     }
//     console.log(line);
//     line = "";
//     space -= 1;
// }


// SOLUÇÃO
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};