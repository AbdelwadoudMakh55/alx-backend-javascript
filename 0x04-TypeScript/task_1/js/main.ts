interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName:string]: any;
};

interface Directors extends Teacher {
  numberOfReports: number;
};

function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string , lastName: string): string;
};

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};
