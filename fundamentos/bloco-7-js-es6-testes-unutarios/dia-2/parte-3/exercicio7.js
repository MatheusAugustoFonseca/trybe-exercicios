const keyValue = (obj, keyNumber) => Object.values(obj)[keyNumber];
// console.log(keyValue());

const verifyKeyValue = (obj, keyName, keyValue) => {
  const array = Object.entries(obj);
  let isEqual = false;
  for (let index in array) {
    if (array[index][0] === keyName && array[index][1] === keyValue) isEqual = true;
  }
  return isEqual;
}
console.log(verifyKeyValue())