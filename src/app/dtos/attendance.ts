
export class Attendance {
    attendanceId: number;
    status: string;
    studentId: number;
    activityId?: number;

    constructor(attendance: Attendance) {
      this.attendanceId = attendance?.attendanceId;
      this.status = attendance?.status;
      this.studentId = attendance?.studentId;
      this.activityId = attendance?.activityId;

    }
  }
  