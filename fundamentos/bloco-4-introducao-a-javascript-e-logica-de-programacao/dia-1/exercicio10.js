const value = 3;
const cost = 1;

if (cost >= 0 && value >= 0){
        const realCost = cost * 1.2;
        const profit = (value - realCost) * 1000;
        console.log(profit);
} else {
    console.log("ERROR, valores nagativos");
};


