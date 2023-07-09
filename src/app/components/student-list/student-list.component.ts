import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { OnInit} from '@angular/core';
import { Student } from 'src/app/dtos/student';
import { StudentService } from 'src/app/services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { EditGradeDialogComponent } from '../edit-grade-dialog/edit-grade-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Attendance } from 'src/app/dtos/attendance';
import { AttendanceService } from 'src/app/services/attendance.service';
import { GradeEventService } from 'src/app/services/grade-event-service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']

})
export class StudentListComponent implements OnInit, AfterViewInit {
  students: Student[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'team', 'attendance', 'grade'];
  dataSource = new MatTableDataSource(this.students);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  @Input() activityId!: number;
  

  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  constructor(private studentService: StudentService,
    private attendanceService: AttendanceService,
    private _liveAnnouncer: LiveAnnouncer,
    private gradeEventService: GradeEventService,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    if (this.activityId) {
      this.studentService.getStudentsByActivity(this.activityId).subscribe((students) => {
        this.students = students;
      });
    }
    this.gradeEventService.gradeAdded$.subscribe(() => {
      this.studentService.getStudentsByActivity(this.activityId).subscribe((students) => {
        this.students = students;
        this.dataSource.data = this.students;
      });
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  editAttendance(student: Student): void {
    const attendanceStatus = student.attendance ? 'absent' : 'present';
  
    const attendance: Attendance = {
      attendanceId: -1,
      status: attendanceStatus,
      studentId: student.studentId,
      activityId: this.activityId
    };
  
    this.attendanceService.saveAttendance(attendance).subscribe(
      (response) => {
        console.log('Attendance saved successfully:', response);
        student.attendance = attendanceStatus;
      },
      (error) => {
        console.log('Error saving attendance:', error);
      }
    );
  }
  

  editGrade(student: Student): void {
    const grade = student.grade ? student.grade : null;
    const dialogRef = this.dialog.open(EditGradeDialogComponent, {
      width: '800px',
      data: { student: student, studentId: student.studentId, activityId: this.activityId, grade: grade}
    });
  }

}

