import { Injectable } from '@angular/core';
import { Student } from '../dtos/student';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

export enum OrderDirection {
  DESC = 'desc'
}
@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private readonly API_URL =  'http://localhost:8080/api/student';
  constructor(private http: HttpClient) {}

  path = '/api/student';
  

  searchStudents(): Observable<Student[]> {
    return this.http.get(this.path)
      .pipe(
        map((response: unknown) => {
          const studentList = (response as Student[]);
          if (studentList) {
              return studentList;
          }
          return [];
        })
      );
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post(this.path, student)
      .pipe(
        map((response: any) => {
          return new Student(response);
        })
      );
  }

  addStudentToTeam(teamId: number, student: Student) {
    return this.http.post(this.path + `/team/${teamId}`, student);
  }

  removeStudentFromTeam(studentId: number) {
    return this.http.delete(this.path + `/team/${studentId}`);
  }

  getStudentsByTeam(teamId: number): Observable<Student[]> {
    const url = this.path + `/teamId/${teamId}`;
    return this.http.get<Student[]>(url).pipe(
      map((response: Student[]) => {
        return response.map((student) => new Student(student));
      })
    );
  }
  
  getStudentsByActivity(activityId: number): Observable<Student[]> {
    const url = this.path + `/activityId/${activityId}`;
    return this.http.get<Student[]>(url).pipe(
      map((response: Student[]) => {
        return response.map((student) => new Student(student));
      })
    );
  }





}



