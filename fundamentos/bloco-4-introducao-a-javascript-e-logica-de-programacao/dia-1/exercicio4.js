const numero = 10;

if (numero > 0){
    console.log("positive");
} else if (numero < 0){
    console.log("negative");
} else {
    console.log("zero");
}

// using functions
function positive(a){
    if (a > 0) {
        return "positive " + a;
    } else if (a < 0) {
        return "negative " + a; 
    } else {
        return "zero " + a;
    }
}
console.log(positive(0));