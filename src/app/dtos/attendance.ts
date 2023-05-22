
export class Attendance {
    attendanceId: number;
    status: string ; 
    
    constructor(attendance: Attendance) {
        this.attendanceId = attendance?.attendanceId;
        this.status = attendance?.status;
       
        
    }
}
