let biggestPrime = 0;

for (let i = 0; i <= 50; i += 1){
    let isPrime = true;
    for (let division = 2; division < i; division += 1){
        if (i % division === 0){
            isPrime = false;
        }
    }

    if(isPrime){
        biggestPrime = i;
    }
}
console.log(biggestPrime);