import { Grades } from "./grades";
import { Attendance } from "./attendance";

export class Activities {
    activityId: number ;
    activityName: string;
    grade: Grades | null; 
    attendance: Attendance | null;
    creationDate: Date;
    activityDate?: Date; 


    constructor(activities: Activities) {
        this.activityId = activities?.activityId;
        this.activityName = activities?.activityName;
        this.grade = activities?.grade;
        this.attendance = activities?.attendance;
        this.creationDate = activities?.creationDate;
        this.activityDate = activities?.activityDate;
    }
}
