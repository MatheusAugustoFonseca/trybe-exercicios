let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   console.log("Bem-vinda, " + info.personagem);

  info["recorrente"] = "Sim";
// //   console.log(info);

// //   for(let margaridaIndex in info){
// //       console.log(margaridaIndex);
// //   }

//   for(let margaridaIndex in info){
//     console.log(info[margaridaIndex]);
// }

let second = {
    personagem: 'Tio Patinhas',
   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
   nota: 'O último MacPatinhas',
   recorrente: "Sim",
}
// for(let bothIndex in second){
//     console.log(second[bothIndex]);
// }

for (let properties in info) {
    if ( properties === "recorrente" &&
    info[properties] === "Sim" &&
    second[properties === "Sim"]) {
        console.log("Ambos recorrentes");
    } else {
        console.log(info[properties] + " e " + second[properties]);
    }
    
}