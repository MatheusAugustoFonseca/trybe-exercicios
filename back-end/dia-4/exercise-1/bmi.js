const readline = require('readline-sync');
// const peso = readline.questionInt(`Qual é seu peso? `);
const pesoFloat = readline.questionFloat(`Qual é seu peso? `);
const altura = readline.question(`Qual é sua altura? `);

const imc = (peso, altura) => {
  const calc = peso / (altura * altura);
  return calc;
}

function main() {
  const bmi = imc(pesoFloat, altura)
  // console.log(`Seu IMC é: ${bmi.toFixed(3)}`)
  if (bmi < 18.5) {
    console.log(`Seu IMC: ${bmi.toFixed(3)} está abaixo do peso`)
  } else if (bmi > 18.5 && bmi < 24.9){
    console.log(`Seu IMC: ${bmi.toFixed(3)} está peso normal`)
  } else if (bmi > 25.5 && bmi < 29.9){
    console.log(`Seu IMC: ${bmi.toFixed(3)} está Acima do peso`)
  } else if (bmi > 30 && bmi < 34.9){
    console.log(`Seu IMC: ${bmi.toFixed(3)} está Obesidade 1`)
  } else if (bmi > 35 && bmi < 39.9){
    console.log(`Seu IMC: ${bmi.toFixed(3)} está Obesidade 2`)
  } else {
    console.log(`Seu IMC: ${bmi.toFixed(3)} está Obesidade 3 e 4`)
  };
}

main();
// 1.72 172