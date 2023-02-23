// Crie uma classe cujo objeto represente um Cachorro.

// interface pode substituir a tipagem direto na classe
interface Dog {
  name: string;
  birthDate: Date;
  age: number;
  breed: string;
}

class Dog {
  // name: string;
  // birthDate: Date;
  // age: number;
  // breed: string;

    constructor(name: string, birthDate: Date, age: number, breed: string) {
      this.name = name;
      this.birthDate = birthDate;
      this.age = age;
      this.breed = breed;
    }

    bark(): void {
      console.log(`${this.name} said: AuAuAu`);
    }

    play(): void {
      console.log(`${this.name} is playing`);
    }

    fetch(): void {
      console.log(`${this.name} is fetching`);
    }
}

const dog1 = new Dog('Rex', new Date('2020-09-17'), 2, 'poodle');
console.log(dog1);
dog1.bark();