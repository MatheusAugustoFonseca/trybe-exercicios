const myFizzBuzz = require('./myFizzBuzz');

describe('testing myFizzBuzz function', () => {
  it('test if the function will return the correct answer', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('15')).toBeFalsy;
  })
})
