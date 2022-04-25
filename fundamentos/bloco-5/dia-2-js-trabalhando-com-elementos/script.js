//1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const elementH1 = document.createElement('h1');
elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(elementH1);
 //2Adicione a tag main com a classe main-content como filho da tag body ;
 const elementMain = document.createElement('main');
 elementMain.className = 'main-content';
 document.body.appendChild(elementMain);
 //3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
 const elementSection = document.createElement('section');
 elementSection.className = 'center-content';
 elementMain.appendChild(elementSection);
//4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const elementP = document.createElement('p');
elementP.innerText = 'Coloque algum texto';
elementSection.appendChild(elementP);
//5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const elementSection2 = document.createElement('section');
elementSection2.className = 'left-content';
elementMain.appendChild(elementSection2);
//6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const elementRightContent = document.createElement('section');
elementRightContent.className = 'right-content';
elementMain.appendChild(elementRightContent);
//7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
elementSection2.appendChild(img);
//8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const elementUl = document.createElement('ul');
elementRightContent.appendChild(elementUl);
const array = ['Um', 'Dois'
, 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let num in array) {
  const elementItens = document.createElement('li');
  elementItens.innerText = array[num];
  elementUl.appendChild(elementItens);
}
//9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for(let index = 1; index <= 3; index += 1){
  const elementH3 = document.createElement('h3');
  elementH3.innerText = 'show ' + index;
  elementMain.appendChild(elementH3);
}
//1.2 Adicione a classe title na tag h1 criada;
//elementH1.className = 'title';
const title = document.querySelector('h1');
title.className = 'title';
//2.2 Adicione a classe description nas 3 tags h3 criadas;
const descriptionH3 = document.getElementsByTagName('h3');
//descriptionH3.className = 'description';
for (let index = 0; index < 3; index += 1) {
  descriptionH3[index].className = 'description';
}
//3.2 Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
// elementMain.classList.remove('left-content');
// removeChild('left-content');
const secLefContent = document.getElementsByClassName('left-content')[0];
elementMain.removeChild(secLefContent);
//4.2 Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
const rightContent = document.getElementsByClassName('right-content')[0];
console.log(rightContent);
rightContent.style.marginRight = 'auto'
//5.2 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
const elementCenterContent = document.getElementsByClassName('center-content')[0];
elementCenterContent.parentNode.style.backgroundColor = 'green';
//6.2 Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8
ul.lastChild.remove();
ul.lastChild.remove();