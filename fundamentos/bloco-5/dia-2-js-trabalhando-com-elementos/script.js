//1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const elementH1 = document.createElement('h1');
elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(elementH1);
 //2Adicione a tag main com a classe main-content como filho da tag body ;
 const elementMain = document.createElement('main');
 elementMain.className = '.main-content';
 document.body.appendChild(elementMain);
 //3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
 const elementSection = document.createElement('section');
 elementSection.className = '.center-content';
 elementMain.appendChild(elementSection);

