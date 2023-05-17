import { Student } from "./student";

export class Team {
    teamId: number;
    teamName: string;
    teamLeader: Student;
    students: Student[];

    constructor(team: Team) {
        this.teamId = team?.teamId;
        this.teamName = team?.teamName;
        this.teamLeader = team?.teamLeader;
        this.students = team?.students;
    }
}