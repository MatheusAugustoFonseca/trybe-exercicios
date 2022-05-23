const searchEmployee = require('./bonus');

describe('test if searchEmployee works', () => {
  it('test if the function exist', () => {
    // expect(searchEmployee()).toBeDefined;
    expect(typeof(searchEmployee)).toEqual('function');
  });
  it(`test if searchEmployee(id, 'firstName') returns the first match`, () => {
    const actual = searchEmployee('1256-4', 'firstName');
    const expected = 'Linda';

    expect(actual).toBe(expected);
  });
  it(`test if searchEmployee(id, 'lastName') returns the first match`, () => {
    const actual = searchEmployee('1256-4', 'lastName');
    const expected = 'Bezos';

    expect(actual).toBe(expected);
  });
  it('Test if searchEmployee(id, "specialities") return array with all specialities', () => {
    const actual = searchEmployee('1256-4', 'specialities');
    expect(actual).toContain('Hooks', 'Context API', 'Tailwind CSS');
  });
  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrow();
  });
  it('Testa a mensagem do erro para ID inexistente', () => {
    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrowError(new Error("ID não identificada"));
  });
  it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => { searchEmployee() }).toThrow();
  });
  it('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => { searchEmployee('4678-2', 'shift') }).toThrowError(new Error("Informação indisponível"));
  });
})