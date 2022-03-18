let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multi = [];
for (let index = 0; index < numbers.length; index += 1) {
    if (index + 1 < numbers.length){
        multi.push(numbers[index] * numbers[index + 1]);
    } else {
        multi.push(numbers[index] *2);
    }
       
      
        // let position = numbers[index];
        // numbers[index] = numbers[secondIndex];
        // numbers[secondIndex] = position;
      }
    
  console.log(multi);
  console.log(multi.length);