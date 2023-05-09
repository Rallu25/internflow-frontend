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
    return this.http.post(`${this.API_URL}`, student)
      .pipe(
        map((response: any) => {
          return new Student(response);
        })
      );
  }

//   addStudent(student: Student): Observable<Student | null> {
//     return this.http.post(this.path, student)
//       .pipe(
//         map((response: unknown) => {
//           const studentList = (response as Student);
//           if (studentList) {
//               return studentList;
//           }
//           return null;
//         })
//  );
// }

}



