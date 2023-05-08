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





 /* private mockStudents: Student[] = [
    {
      id: 1,
      first_name: 'Bella',
      last_name: 'Bajanescu',
      email: 'georgia.bajanescu02@e-uvt.ro',
      team: 'Internflow'
    },
    {
        id: 2,
        first_name: 'Bianca',
        last_name: 'Barbaliu',
        email: 'bianca.barbaliu02@e-uvt.ro',
        team: 'Internflow'
      },
      {
        id: 3,
        first_name: 'Raluca',
        last_name: 'Osman',
        email: 'raluca.osman02@e-uvt.ro',
        team: 'Internflow'
      }
  ];

  getStudents(): Student[] {
    return this.mockStudents;
  }*/
}


//export {};
