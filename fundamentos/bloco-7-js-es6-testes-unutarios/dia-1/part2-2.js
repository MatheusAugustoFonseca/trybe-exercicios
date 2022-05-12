
const longestWordResult = longestWord => {
  let wordArray = longestWord.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  // return (console.log(wordArray))
}
console.log(longestWordResult("Antooooonio foi no banheiro e não sabemos o que aconteceu"))
