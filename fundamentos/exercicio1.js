// O fatorial é representado pelo sinal ! 
// ! = 4 x 3 x 2 x 1 = 24
// fatorial 10

// const n = 10;
let fatorial = 1;
for (let i = 10; i > 0; i -= 1){
    fatorial *= i;
    console.log(fatorial);
}
