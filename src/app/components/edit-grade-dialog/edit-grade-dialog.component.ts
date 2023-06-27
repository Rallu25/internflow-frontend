import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Grades } from 'src/app/dtos/grades';
import { GradesService } from 'src/app/services/grades.service';

@Component({
  selector: 'app-edit-grade-dialog',
  templateUrl: './edit-grade-dialog.component.html',
  styleUrls: ['./edit-grade-dialog.component.scss']
})
export class EditGradeDialogComponent {
  gradeOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditGradeDialogComponent>,
    private fb: FormBuilder,
    private gradesService: GradesService,
    @Inject(MAT_DIALOG_DATA) public data: any
    
  ) {
    this.form = this.fb.group({
      selectedGrade: ['', Validators.required],
      comment: ['']
    });
  }

  saveGrade(): void {
    if (this.form.invalid) {
      return;
    }

    const selectedGrade: number = this.form.value.selectedGrade;
    const comment: string = this.form.value.comment;

    const grade: Grades = {
      gradeId: 0,
      gradeValue: selectedGrade,
      comment: comment,
      studentId: this.data.studentId,
      activityId: this.data.activityId
    };

    this.gradesService.saveGrade(grade).subscribe(
      (response) => {
        console.log('Grade saved successfully:', response);
        this.dialogRef.close();
      },
      (error) => {
        console.log('Error saving grade:', error);
      }
    );
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
