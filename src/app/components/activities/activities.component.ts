import { Component } from '@angular/core';
import { AddActivityDialogComponent } from '../add-activity-dialog/add-activity-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  constructor(
    private dialog: MatDialog
  ) { }

  openAddActivityDialog() {
    const dialogRef = this.dialog.open(AddActivityDialogComponent, {
      width: '600px',
      data: {}
    });

  }
}
