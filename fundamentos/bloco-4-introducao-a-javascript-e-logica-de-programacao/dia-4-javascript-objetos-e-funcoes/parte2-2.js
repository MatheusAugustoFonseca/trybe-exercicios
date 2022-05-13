// function biggest(numeros){
//     let indiceMaior = 0;
//        for(let index in numeros){
//            if (numeros[indiceMaior] < numeros[index]){
//             indiceMaior = index;
//            }
//         }
//     return indiceMaior;
// }

// console.log(biggest([2, 3, 6, 7, 10, 1]));

function biggest(numbers){
    let indiceMaior = 0;
    for(let index = 0; index < numbers.length;index += 1){
        if (numbers[index] > numbers[indiceMaior]){
            indiceMaior = index;
        }
    }
    return indiceMaior
}
console.log(biggest([2, 3, 6, 7, 10, 1]));