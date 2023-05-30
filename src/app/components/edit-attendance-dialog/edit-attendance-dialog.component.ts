import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Attendance } from 'src/app/dtos/attendance';
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'app-edit-attendance-dialog',
  templateUrl: './edit-attendance-dialog.component.html',
  styleUrls: ['./edit-attendance-dialog.component.scss']
})
export class EditAttendanceDialogComponent {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditAttendanceDialogComponent>,
    private fb: FormBuilder,
    private attendanceService: AttendanceService,
    
  ) {
    this.form = this.fb.group({
      selectedStatus: ['', Validators.required]
    });
  }

  saveAttendance(): void {
    if (this.form.invalid) {
      return;
    }

    const selectedStatus: string = this.form.value.selectedStatus;
    

    const attendance: Attendance = {
      attendanceId: -1,
      status: selectedStatus,
      studentId: 3
    };

    this.attendanceService.saveAttendance(attendance).subscribe(
      (response) => {
        console.log('Attendance saved successfully:', response);
        this.dialogRef.close(); 
      },
      (error) => {
        console.log('Error saving attendance:', error);
      }
    );
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
