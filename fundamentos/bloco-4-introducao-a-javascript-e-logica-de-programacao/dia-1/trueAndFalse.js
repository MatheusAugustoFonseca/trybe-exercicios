// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

const currentHour = 23;
let message = "";
if (currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir"
    // console.log(message);
} else if (currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D"
    // console.log(message);
 } else if (currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?"
    // console.log(message);
} else if (currentHour > 11 && currentHour < 14){
    message = "Hora do almoço!!!"
    // console.log(message);
} else{
    message = "Hmmm, cheiro de café recém passado";    
} 
console.log(message);