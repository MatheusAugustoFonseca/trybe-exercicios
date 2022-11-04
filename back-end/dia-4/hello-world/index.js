const readline = require('readline-sync');

const name = readline.question('Qual é seu nome? ');
const age = readline.questionInt('Qual é sua idade? ');

console.log(`Hello, world!, from: ${name}, que tem: ${age} anos de idade `);
