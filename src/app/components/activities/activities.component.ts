import { Component, OnInit, ElementRef } from '@angular/core';
import { AddActivityDialogComponent } from '../add-activity-dialog/add-activity-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Activities } from 'src/app/dtos/activities';
import { ActivitiesService } from 'src/app/services/activities.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivityEventService } from 'src/app/services/activity-event-service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit{
  activities: Activities[] = [];
  activitySelected: Activities | undefined;
  displayStudentList = false;
  activityId!: number;

  constructor(
    private activitiesService: ActivitiesService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private elementRef: ElementRef,
    private activityEventService: ActivityEventService
  ) { }
  ngOnInit(): void {
    this.fetchActivities();
    this.activityEventService.activityAdded$.subscribe(() => {
      this.fetchActivities();
    });
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
      attendance: null,
      creationDate: new Date(),
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
          this.activityEventService.triggerActivityAdded();
        
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
  
    if (this.displayStudentList) {
      setTimeout(() => {
        const tableElement = this.elementRef.nativeElement.querySelector('#studentTable');
        tableElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }
  
  
}



