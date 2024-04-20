namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if ('experienceTeachingC' in this.teacher)
        return `Available Teacher: ${this.teacher.firstName}`;
      return 'No available teacher';
    }
  }
}
