import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attendance } from '../dtos/attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private readonly API_URL =  'http://localhost:8080/api/attendance';
  constructor(private http: HttpClient) {}

  saveAttendance(attendance: Attendance): Observable<any> {
    return this.http.post<any>(this.API_URL, attendance);
  }
}
