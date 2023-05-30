import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Attendance } from '../dtos/attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private readonly API_URL =  'http://localhost:8080/api/attendance';
  constructor(private http: HttpClient) {}

  path = '/api/attendance';

saveAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http.post(this.path, attendance).pipe(
        map((response: any) => {
            return new Attendance(response);
        })
    );
}
}