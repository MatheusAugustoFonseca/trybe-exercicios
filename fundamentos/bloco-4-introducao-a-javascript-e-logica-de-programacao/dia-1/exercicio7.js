const conceito = 50;

if (conceito < 0 || conceito > 100) {
  console.log("Erro, nota inválida");
} else if (conceito >= 90) {
  console.log("Conceito A");
} else if (conceito >= 80) {
  console.log("Conceito B");
} else if (conceito >= 70) {
  console.log("Conceito C");
} else if (conceito >= 60) {
  console.log("Conceito D");
} else if (conceito >= 50) {
  console.log("Conceito E");
} else {
  console.log("Conceito F");
}
