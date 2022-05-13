// let repetido = [2, 3,3,3,3 ,3, 2, 5, 8, 2, 3];
// for (let index in repetido){
//   console.log(repetido[index]);
// }
// Foi um teste de FOR/IN


function repetido(numbers){
  let contRepetidos = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for(let index in numbers){
    let verificaNumero = numbers[index];
    for (let index2 in numbers) {
      if (verificaNumero === numbers[index2]){
        contNumero += 1;
      }
    }
    if (contNumero > contRepetidos){
      contRepetidos = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numbers[indexNumeroRepetido];
}
console.log(repetido([2, 3,3,3,3 ,3, 2, 5, 8, 2, 3]));