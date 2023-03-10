// import Person from "./Person";

// const geralda = new Person('Geralda Sousa', new Date('1970/05/30'));
// const fernanda = new Person('Fernada Sousa', new Date('1988/05/05'));

// console.log(geralda);
// console.log(fernanda);

// exercicio 2
import Student from "./Student";
const geralda = new Student('Geralda Sousa', new Date('1970/05/30'));
const fernanda = new Student('Fernada Sousa', new Date('1988/05/05'));

geralda.examsGrades = [10, 9, 8, 7];
geralda.workGrades = [10, 10];
fernanda.examsGrades = [5, 5, 5, 5];
fernanda.workGrades = [5, 5];

// console.log(geralda);
// console.log(fernanda);

console.log(fernanda.sumAvgGrade());

