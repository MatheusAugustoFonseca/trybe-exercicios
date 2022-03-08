const peça = "rei";

if (peça == "peao") {
    console.log("Uma ou duas casas, na vertical");
 }
else if (peça == "torre") {
    console.log("Vertical e horizontal, quantas casas quiser");
}
else if (peça == "bispo") {
    console.log("Diagonal, quantas casas quiser");
}
else if (peça == 'cavalo') {
        console.log("Em formato de L, duas casas na horizontal ou vertical + uma casa em outro sentido, fazendo 90*");
}
else if (peça == "rainha") {
    console.log("Vertical, horizontal e diagonal, quantas casas quiser");
}
else if (peça == "rei") {
    console.log("Vertical, horizontal e diagonal, apenas uma casa");
}