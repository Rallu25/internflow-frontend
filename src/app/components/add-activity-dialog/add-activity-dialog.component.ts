import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activities } from 'src/app/dtos/activities';


@Component({
  selector: 'app-add-activity-dialog',
  templateUrl: './add-activity-dialog.component.html',
  styleUrls: ['./add-activity-dialog.component.scss']
})
export class AddActivityDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      activityName: ['', Validators.required],
    });
  }

  save() {
    const activities: Activities = {
      activityId: this.form.value.activityId,
      activityName: this.form.value.activityName,
      grade: this.form.value.grade,
      attendance: this.form.value.attendances
       
    };
    this.dialogRef.close(activities);
  }


  cancel() {
    this.dialogRef.close();
  }

}
