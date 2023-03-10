// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

class Person {
  constructor(private _name: string, private _birthDate: Date,
    ) { 
      this.name = _name;
      this.birthDate = _birthDate;
    }

    get name(): string {
      return this._name;
    }

    set name(value : string) {
      if (value.length < 3) {
        throw new Error('O nome deve ter no mínimo três caracteres')
      }
      this._name = value;
    }

    get birthDate(): Date {
      return this._birthDate;
    }

    set birthDate(value : Date) {
      this.validateBirthDate(value);
      this._birthDate = value;
    }

    static getAge(value: Date): number {
      const diff = Math.abs(new Date().getTime() - value.getTime());
      const yearMs = 31_536_000_000;
      return Math.floor(diff/yearMs);
    }

    private validateBirthDate(value: Date): void {
      if (value.getTime() > new Date().getTime()) {
        throw new Error('A data de nascimento não pode ser uma data do futuro');
      }
      if (Person.getAge(value) > 120) throw new Error('Idade inválida');
      
    }
}

export default Person;