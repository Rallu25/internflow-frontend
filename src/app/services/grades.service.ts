import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grades } from '../dtos/grades';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private readonly API_URL =  'http://localhost:8080/api/grade';
  constructor(private http: HttpClient) {}

  saveGrade(grade: Grades): Observable<any> {
    return this.http.post<any>(this.API_URL, grade);
  }
}
