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
console.log(allLessons);

