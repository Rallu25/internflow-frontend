import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { OnInit, ChangeDetectorRef } from '@angular/core';
import { Student } from 'src/app/dtos/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
  
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'team'];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.searchStudents().subscribe((students) => {
      this.students = students;
    });
  }

 
  

}
