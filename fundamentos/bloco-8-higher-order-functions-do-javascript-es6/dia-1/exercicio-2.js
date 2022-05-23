//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado
const meuSorteio = (numerosApostados, callback) => {
  const numerosSorteados = Math.floor(Math.random() * (5-1 + 1)) + 1;

  return callback(numerosApostados, numerosSorteados) ? 'Você GANHOU!!' : 'Tente novamente';
}

// const numerosSorteados = () => {
//   // min = Math.ceil(1);
//   // max = Math.floor(5);
//   return Math.floor(Math.random() * (5-1 + 1)) + 1;
// }

const numberCheck = (numerosApostados, numerosSorteados) => numerosApostados === numerosSorteados;

console.log(meuSorteio(5, numberCheck));