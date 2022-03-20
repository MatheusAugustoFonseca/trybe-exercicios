const a = 59;
const b = 60;
if (a > b){
    console.log(a);
} else {
    console.log(b);
}

// using function
function biggestBetweenTwo(a, b){
    if(a > b){
        return a + " é maior que " + b;
    } else if (a < b) {
        return b + " é maior que " + a;
    } else {
        return "Os números são iguais";
    }
}

console.log(biggestBetweenTwo(2, 2));
console.log(biggestBetweenTwo(2, 90));
console.log(biggestBetweenTwo(77, 2));