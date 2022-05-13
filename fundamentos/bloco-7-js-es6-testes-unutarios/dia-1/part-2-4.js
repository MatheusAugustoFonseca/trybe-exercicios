const skills = ['HTML', 'GIT', 'GITHUB', 'CSS', 'JS'];

const texto = (param2) => {
  skills.sort()
  let finalMsg = `${param2} 
  Minhas cinco principais habilidades são:`
  skills.forEach((skl) => finalMsg = `
  ${finalMsg}
  - ${skl}`);
  finalMsg = `${finalMsg}
  #goTrybe`;
  return finalMsg;
}

const changeX = (param) => {
  let str = 'Tryber x aqui!';
  return str.replace('x', param);
}

const saudacao = (string) => {
  let resultChangeX = changeX(string);
  return texto(resultChangeX);
}


console.log(saudacao('Matheus'));

