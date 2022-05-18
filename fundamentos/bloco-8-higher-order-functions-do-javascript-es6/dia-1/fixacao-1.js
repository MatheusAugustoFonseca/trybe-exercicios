const wakeUp = () => 'Acordando!!'

const coffee = () => {
  return 'Bora tomar café!!'
}

const sleep = () => {
  return 'Partiu dormir!!'
}

const doingThings = (param) => {
  const result = param();
  console.log(result);
  // console.log(param());
}
doingThings(wakeUp);