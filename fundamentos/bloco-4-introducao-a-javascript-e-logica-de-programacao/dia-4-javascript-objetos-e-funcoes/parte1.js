// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log("Bem-vinda, " + info.personagem);

//   info["recorrente"] = "Sim";

// //   for(let margaridaIndex in info){
// //       console.log(margaridaIndex);
// //   }

//   for(let margaridaIndex in info){
//     console.log(info[margaridaIndex]);
// }

let second = {
    personagem: 'Margarida e Tio Patinhas',
   origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
   recorrente: "ambos recorrentes",
}
for(let bothIndex in second){
    console.log(bothIndex, second[bothIndex]);
}