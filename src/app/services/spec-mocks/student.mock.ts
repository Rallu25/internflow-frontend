import { Student } from "src/app/dtos/student";

export class StudentMock {
  public static get mockStudents(): Student[] {
    return [
      {
        studentId: 1,
        firstName: 'Ioana',
        lastName: 'Coman',
        email: 'ioana.coman@yahoo.com',
        team: 'Team 1',
        attendance: 'Present',
        grade: 8,
      },
      {
        studentId: 2,
        firstName: 'Alina',
        lastName: 'Enache',
        email: 'alina.enache@yahoo.com',
        team: 'Team 2',
        attendance: 'Absent',
        grade: 7,
      },
      {
        studentId: 3,
        firstName: 'Bogdan',
        lastName: 'Voicu',
        email: 'bogdan.voicu@yahoo.com',
        team: 'Team 1',
        attendance: 'Present',
        grade: 9,
      },
      {
        studentId: 4,
        firstName: 'Alex',
        lastName: 'Ene',
        email: 'alex.ene@yahoo.com',
        team: 'Team 3',
        attendance: 'Present',
        grade: 10,
      },
    ];
  }
}
