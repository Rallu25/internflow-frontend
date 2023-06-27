import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { Student } from 'src/app/dtos/student';
import { Team } from 'src/app/dtos/team';

@Component({
  selector: 'app-add-team-dialog',
  templateUrl: './add-team-dialog.component.html',
  styleUrls: ['./add-team-dialog.component.scss']
})
export class AddTeamDialogComponent implements OnInit {
  students: Student[] = [];
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddTeamDialogComponent>,
    private studentService: StudentService,
    private fb: FormBuilder,
    private teamService: TeamService,
  ) { 
    this.form = this.fb.group({
      teamName: ['', Validators.required],
      teamLeader: [null, Validators.required],
      member1: [null],
      member2: [null],
      member3: [null],
      member4: [null],
    });
  }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.studentService.searchStudents().subscribe(students => {
      this.students = students;
    });
  }

  save(): void {
    if (this.form.invalid) {
      return;
    }

    const teamName: string = this.form.value.teamName;
    const teamLeader: Student = this.form.value.teamLeader;
    const member1: Student = this.form.value.member1;
    const member2: Student = this.form.value.member2;
    const member3: Student = this.form.value.member3;
    const member4: Student = this.form.value.member4;

    const team: Team = {
      teamId: -1, 
      teamName: teamName,
      teamLeader: teamLeader,
      students: [member1, member2, member3, member4].filter(member => !!member) 
      };

   
      this.teamService.saveTeam(team).subscribe(response => {
        console.log('Team saved:', response);
      });

    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
  

