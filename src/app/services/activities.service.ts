import { Injectable } from '@angular/core';
import { Activities } from '../dtos/activities';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from 'rxjs';

export enum OrderDirection {
    DESC = 'desc'
  }
  @Injectable({
    providedIn: 'root'
  })

  export class ActivitiesService {
    private readonly API_URL = 'http://localhost:8080/api/activity'; 
  
    constructor(private http: HttpClient) {}
  
    path = '/api/activity';
  
  saveActivity(activities: Activities): Observable<Activities> {
      return this.http.post(this.path, activities).pipe(
          map((response: any) => {
              return new Activities(response);
          })
      );
  }
  
  searchActivities(): Observable<Activities[]> {
    return this.http.get(this.path)
      .pipe(
        map((response: unknown) => {
          const activitiesList = (response as Activities[]);
          if (activitiesList) {
              return activitiesList;
          }
          return [];
        })
      );
  }
  
  deleteActivity(activityId: number) {
    return this.http.delete(this.path + `/${activityId}`);
  }
  }
  