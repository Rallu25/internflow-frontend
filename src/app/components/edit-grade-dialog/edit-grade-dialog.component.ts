import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Grades } from 'src/app/dtos/grades';
import { GradesService } from 'src/app/services/grades.service';
import { GradeEventService } from 'src/app/services/grade-event-service';

@Component({
  selector: 'app-edit-grade-dialog',
  templateUrl: './edit-grade-dialog.component.html',
  styleUrls: ['./edit-grade-dialog.component.scss']
})
export class EditGradeDialogComponent {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditGradeDialogComponent>,
    private fb: FormBuilder,
    private gradesService: GradesService,
    @Inject(GradeEventService) private gradeEventService: GradeEventService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      selectedGrade: ['', [Validators.required, Validators.pattern('^[1-9][0-9]?$|^100$')]],
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
        this.gradeEventService.triggerGradeAdded();
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
