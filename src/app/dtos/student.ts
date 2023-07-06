
export class Student {
    studentId: number;
    firstName: string;
    lastName: string;
    email: string;
    team: string;
    attendance: string;
    grade: number;


    constructor(student: Student) {
        this.studentId = student?.studentId;
        this.firstName = student?.firstName;
        this.lastName = student?.lastName;
        this.email = student?.email;
        this.team = student?.team;
        this.attendance = student.attendance;
        this.grade = student?.grade;
       
    }
}
