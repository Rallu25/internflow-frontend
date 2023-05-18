import { Component, OnInit, Inject } from '@angular/core';
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
  team: Team;

  constructor(
    public dialogRef: MatDialogRef<TeamStudentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { team: Team },
    private studentService: StudentService
  ) {
    this.team = data.team;
  }

  ngOnInit(): void {
    this.studentService.getStudentsByTeam(this.team.teamId).subscribe((students) => {
      this.students = students;
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}