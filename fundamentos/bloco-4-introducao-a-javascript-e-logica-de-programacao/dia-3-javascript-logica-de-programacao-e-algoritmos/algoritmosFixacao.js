let fruits = [3, 4, 1, 1];
let soma = 0;
// testar com for of e for in
for(let i = 0; i < fruits.length; i += 1){
  soma += fruits[i];
}
if (soma > 15){
  console.log(soma);
} else {
  console.log("Valor menor que 16");
}