import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { OnInit, ChangeDetectorRef } from '@angular/core';
import { Student } from 'src/app/dtos/student';
import { StudentService } from 'src/app/services/student.service';

/*const STUDENTS: Student[] = [
  { id: 1, first_name: 'Bella', last_name: 'Bajanescu', email: 'georgia.bajanescu02@e-uvt.ro', team: 'Internflow'},
  { id: 2, first_name: 'Bianca', last_name: 'Barbaliu', email: 'bianca.barbaliu02@e-uvt.ro', team: 'Internflow'},
  { id: 3, first_name: 'Raluca', last_name: 'Osman', email: 'raluca.osman02@e-uvt.ro', team: 'Internflow'}
]; */

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
  
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'team'];
  // constructor(
  //   private studentService: StudentService
  //   private changeDetectorRef: ChangeDetectorRef) {
  //     this.students = [];
  //   }
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.searchStudents().subscribe((students) => {
      this.students = students;
    });
  }

  /*loadStudents() {
    this.studentService.searchStudents()
      .subscribe(students => {
        if (students) {
          this.students = students;
          this.changeDetectorRef.detectChanges();
        }
      });
  }*/
  

}
