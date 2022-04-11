function maiorNome (list){
  let biggest = 0;
  for(let index in list){
    if(list[index].length > list[biggest].length){
      biggest = index
    }
  }
  return list[biggest];
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairoooooooo', 'Joana']));