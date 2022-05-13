function smallest (numbers){
  let smallestIndex = 0;
  for(let index in numbers){
    if(numbers[index] < numbers[smallestIndex]) {
      smallestIndex = index;
    }
  }
  return smallestIndex;
}
console.log(smallest([2, 3, 6, 7, 10, 1]));