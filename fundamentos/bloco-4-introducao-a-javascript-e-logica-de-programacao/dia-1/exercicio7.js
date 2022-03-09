const conceito = "80";

if (conceito >= 90){
    console.log("Conceito A");
} else if (conceito >= 80){
    console.log("Conceito B");
} else if (conceito >= 70){
    console.log("Conceito C");
} else if (conceito >= 60){
    console.log("Conceito D");
} else if (conceito >= 50){
    console.log("Conceito E");
} else if (conceito < 50){
    console.log("Conceito F");
} else { 
    console.log("ERROR"); 
    //O programa deve retornar uma mensagem de 
    // erro e encerrar se a nota passada for menor 
    // que 0 ou maior que 100.
}