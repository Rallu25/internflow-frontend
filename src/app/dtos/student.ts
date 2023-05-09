import { Team } from "./team";

export class Student {
    studentId: number;
    firstName: string;
    lastName: string;
    email: string;
    team: Team;


    constructor(student: Student) {
        this.studentId = student?.studentId;
        this.firstName = student?.firstName;
        this.lastName = student?.lastName;
        this.email = student?.email;
        this.team = student?.team;
    }
}
