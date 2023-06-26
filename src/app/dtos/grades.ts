export class Grades {
    gradeId: number;
    gradeValue: number;
    comment: string ; 
    studentId: number;
    activityId: number;
    
    constructor(grades: Grades) {
        this.gradeId = grades?.gradeId;
        this.gradeValue = grades?.gradeValue;
        this.comment = grades?.comment;
        this.studentId = grades?.studentId;
        this.activityId = grades?.activityId;
        
    }
}
