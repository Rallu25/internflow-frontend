export class Student {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    team: string;


    constructor(student: Student) {
        this.id = student?.id;
        this.first_name = student?.first_name;
        this.last_name = student?.last_name;
        this.email = student?.email;
        this.team = student?.team;
    }
}
