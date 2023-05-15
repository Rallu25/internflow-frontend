import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/dtos/student';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { Team } from 'src/app/dtos/team';
import { AddTeamDialogComponent } from '../add-team-dialog/add-team-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  studentSelected: Student | undefined;
  constructor(
    private router: Router,
    private studentService: StudentService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addStudent() {
    this.studentSelected = new Student({
      studentId: -1,
      firstName: '',
      lastName: '',
      email: '',
      team: new Team({
        teamId: -1,
      })
    })
  }
  openAddStudentDialog() {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.addStudent(result).subscribe(newStudent => {
          console.log('New student added:', newStudent);
        }, error => {
          console.log('Error adding student:', error);
        });
      }
    });
  }

  openAddTeamDialog(): void {
    const dialogRef = this.dialog.open(AddTeamDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the dialog close event
    });
  }







}

