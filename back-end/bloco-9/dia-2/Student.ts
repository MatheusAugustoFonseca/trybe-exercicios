import Person from "./Person";

class Student extends Person {
  private _enrollment =  String();
  private _examsGrades: number[] = [];
  private _worksGrade: number[] = []; 

  constructor (name: string, birthDate: Date) { 
    super(name, birthDate);

    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error("min 15 char");
      
    }
    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error("Não pode possuir mais de 4 provas");
      
    }
    this._examsGrades = value;
  }

  get workGrades(): number[] {
    return this._worksGrade;
  }

  set workGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error("Não pode possuir mais de 2 trabalhos");
      
    }
    this._worksGrade = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  sumGrades(): number {
    const sum = this._examsGrades.reduce((a, b) => a + b)
    return sum;
  }

  sumAvgGrade(): number {
    const sum = this.sumGrades();
    const avg = sum /this._examsGrades.length;
    return avg;
  }
}

export default Student