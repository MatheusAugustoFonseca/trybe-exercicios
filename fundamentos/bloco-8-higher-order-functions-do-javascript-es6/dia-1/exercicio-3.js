const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparingAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}

const studentExam = (gabarito, studentAnswers, score) => {
  let contador = 0;
  for (let index = 0; index < rightAnswer.length; index +=1) {
    const socoring = score(rightAnswer[index], studentAnswers[index]);
    contador += socoring
  }
  return `A pontuação final foir: ${contador} pontos`;
};


console.log(studentExam(RIGHT_ANSWERS, STUDENT_ANSWERS, comparingAnswers));
