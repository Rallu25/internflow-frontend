import { Component, OnInit } from '@angular/core';
import { AddActivityDialogComponent } from '../add-activity-dialog/add-activity-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Activities } from 'src/app/dtos/activities';
import { ActivitiesService } from 'src/app/services/activities.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit{
  activities: Activities[] = [];
  activitySelected: Activities | undefined;
  displayStudentList = false;
  activityId: number | undefined;

  constructor(
    private activitiesService: ActivitiesService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.fetchActivities();
  }

  fetchActivities() {
    this.activitiesService.searchActivities().subscribe((activities) => {
      this.activities = activities;
    });
  }

  addActivity() {
    this.activitySelected = new Activities({
      activityId: -1,
      activityName: '',
      grade: null,
      attendance: null
    })
  }

  openAddActivityDialog() {
    const dialogRef = this.dialog.open(AddActivityDialogComponent, {
      width: '600px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.activitiesService.saveActivity(result).subscribe(newActivity => {
          console.log('New activity added:', newActivity);
        
        }, error => {
          console.log('Error adding activity:',error);
        });
      }
    });
  }

  deleteActivity(activities: Activities): void {
    const confirmation = confirm(`Are you sure you want to delete ${activities.activityName}?`);
    if (confirmation) {
      this.activitiesService.deleteActivity(activities.activityId).subscribe(
        () => {
          this.fetchActivities();
          this.snackBar.open('Activity deleted successfully!', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        },
        (error) => {
          console.log('Error deleting activity:', error);
          this.snackBar.open('An error occurred while deleting the activity.', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        }
      );
    }
  }

  openStudentList(activity: Activities) {
    this.displayStudentList = !this.displayStudentList;
    this.activityId = activity.activityId;
  }
  
}



