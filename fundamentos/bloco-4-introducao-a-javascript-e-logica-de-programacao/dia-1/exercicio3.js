const a = 5900;
const b = 700;
const c = 80;
if (a > b && a > c){
    console.log(a);
} else if (b > a && b > c){
    console.log(b);
} else {
    console.log(c);
}

// using function
function biggestBetweenTwo(a, b, c){
    if(a > b && a > c){
        return a + " é maior que " + b + " e " + c;
    } else if (b > a && b > c) {
        return b + " é maior que " + a + " e " + c;
    } else if(c > a && c > b) {
        return c + " é maior que " + a + " e " + b;
    } else {
        return "Os números são iguais";
    }
}
console.log(biggestBetweenTwo(2, 2, 2));
console.log(biggestBetweenTwo(2, 90, 60 ));
console.log(biggestBetweenTwo(77, 2, 50));
console.log(biggestBetweenTwo(77, 2, 500));