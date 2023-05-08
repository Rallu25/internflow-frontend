import { Injectable } from '@angular/core';
import { Student } from '../dtos/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private mockStudents: Student[] = [
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
  }
}


export {};
