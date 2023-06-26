import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, Input, ViewChild } from '@angular/core';
import { OnInit, ChangeDetectorRef } from '@angular/core';
import { Student } from 'src/app/dtos/student';
import { StudentService } from 'src/app/services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { EditAttendanceDialogComponent } from '../edit-attendance-dialog/edit-attendance-dialog.component';
import { EditGradeDialogComponent } from '../edit-grade-dialog/edit-grade-dialog.component';
import { MatDialog } from '@angular/material/dialog';


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

  @Input() activityId: number | undefined;

  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  constructor(private studentService: StudentService,
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    if (this.activityId) {
      this.studentService.getStudentsByActivity(this.activityId).subscribe((students) => {
        this.students = students;
      });
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  editAttendance(student: Student): void {
    const dialogRef = this.dialog.open(EditAttendanceDialogComponent, {
      width: '800px',
      data: { studentId: student.studentId, student: student }
    });
  }

  editGrade(student: Student): void {
    const dialogRef = this.dialog.open(EditGradeDialogComponent, {
      width: '800px',
      data: { student: student }
    });
  }

}

