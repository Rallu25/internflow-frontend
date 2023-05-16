import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/dtos/student';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-team-dialog',
  templateUrl: './add-team-dialog.component.html',
  styleUrls: ['./add-team-dialog.component.scss']
})
export class AddTeamDialogComponent implements OnInit {
  students: Student[] | undefined;
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddTeamDialogComponent>,
    private studentService: StudentService,
    private fb: FormBuilder
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



    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
  

