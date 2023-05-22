export class Grades {
    gradeId: number;
    gradeValue: number;
    comment: string ; 
    
    constructor(grades: Grades) {
        this.gradeId = grades?.gradeId;
        this.gradeValue = grades?.gradeValue;
        this.comment = grades?.comment;
        
    }
}
