import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/dtos/student';
import { Team } from 'src/app/dtos/team';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-team-students',
  templateUrl: './team-students.component.html',
  styleUrls: ['./team-students.component.scss']
})
export class TeamStudentsComponent implements OnInit {
  students: Student[] = [];
  allStudents: Student[] = [];
  team: Team;
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TeamStudentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { team: Team },
    private fb: FormBuilder,
    private studentService: StudentService
  ) {
    this.team = data.team;
    this.form = this.fb.group({
      member: [null]
    });
  }

  removeMember(student: Student): void {
    this.studentService.removeStudentFromTeam(student.studentId).subscribe(
      () => {
        this.getStudents();
      }),
      (error: any) => {
        console.log('Error deleting student:', error);
      }
  }

  addMember(): void {
    const member: Student = this.form.value.member;
    this.studentService.addStudentToTeam(this.team.teamId, member).subscribe(() => {
      this.getStudents();
    });
    this.form.value.member = undefined;
  }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents() {
    this.studentService.getStudentsByTeam(this.team.teamId).subscribe((students) => {
      this.students = students;
    });
    this.studentService.searchStudents().subscribe((students) => {
      this.allStudents = students;
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}