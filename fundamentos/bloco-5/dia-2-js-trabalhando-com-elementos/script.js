//1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const elementH1 = document.createElement('h1');
elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(elementH1);
 //2Adicione a tag main com a classe main-content como filho da tag body ;
 const elementMain = document.createElement('main');
 elementMain.classList = '.main-content';
 document.body.appendChild(elementMain);