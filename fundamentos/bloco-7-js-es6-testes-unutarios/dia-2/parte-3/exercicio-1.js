const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addingNight = (obj, key, value) => {
  obj[key] = value;
  }
  addingNight(lesson2, 'turno', 'noite');
  // console.log(lesson2);

const listKeys = (obj) => Object.keys(obj);
// console.log(listKeys(lesson1));

const objectSize = (obj) => Object.keys(obj).length;
// console.log(objectSize(lesson1));

const objValues = (obj) => Object.values(obj);
// console.log(objValues(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

const getNumberOfStudent = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
    console.log(index);
  }
  return total;
};
// console.log(getNumberOfStudent(allLessons));

const keyValue = (obj, keyNumber) => Object.values(obj)[keyNumber];
// console.log(keyValue());

const verifyKeyValue = (obj, keyName, keyValue) => {
  const array = Object.entries(obj);
  let isEqual = false;
  for (index in array) {
    if (array[index][0] === keyName && array[index][1] === keyValue) isEqual = true;
    console.log(index);
  }
  return isEqual;
}
console.log(verifyKeyValue(lesson2, 'professor', 'Carlos'));