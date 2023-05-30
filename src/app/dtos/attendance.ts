import { Student } from "./student";
import { Activities } from "./activities";

export class Attendance {
    attendanceId: number;
    status: string;
    studentId: number;

    constructor(attendance: Attendance) {
      this.attendanceId = attendance?.attendanceId;
      this.status = attendance?.status;
      this.studentId = attendance?.studentId;

    }
  }
  