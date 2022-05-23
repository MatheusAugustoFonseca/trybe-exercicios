const sum = require('./sum.js');

describe('tests on sum function', () => {
  it('test if sum(a, b) retuns the correct sum', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  })
  it('Testa se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
});