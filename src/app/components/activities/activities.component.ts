import { Component, OnInit } from '@angular/core';
import { AddActivityDialogComponent } from '../add-activity-dialog/add-activity-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Activities } from 'src/app/dtos/activities';
import { ActivitiesService } from 'src/app/services/activities.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit{
  activities: Activities[] = [];
  activitySelected: Activities | undefined;
  constructor(
    private activitiesService: ActivitiesService,
    private dialog: MatDialog,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.activitiesService.searchActivities().subscribe((activities) => {
      this.activities = activities;
    });
    
  }
  addActivity() {
    this.activitySelected = new Activities({
      activityId: -1,
      activityName: '',
      grade: null,
      attendances: null
    })
  }
  openAddActivityDialog() {
    const dialogRef = this.dialog.open(AddActivityDialogComponent, {
      width: '600px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.activitiesService.addActivity(result).subscribe(newActivity => {
          console.log('New activity added:', newActivity);
        
        }),error =>{
          console.log('Error adding activity:',error);
        };
      }
    });
    

  }
  

  
}



