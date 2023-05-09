import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/dtos/student';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  studentSelected: Student | undefined;
  constructor(
    private router: Router,
    private studentService: StudentService,
    private dialog: MatDialog
    ) { }

    ngOnInit(): void {
    }

    addStudent() {
      this.studentSelected = new Student({
        studentId: -1,
        firstName: '',
        lastName: '',
        email: ''
      })
    }

    openAddStudentDialog() {
      const dialogRef = this.dialog.open(AddStudentDialogComponent, {
        width: '600px',
        data: {}
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.addStudent(result).subscribe(newStudent => {
          console.log('New student added:', newStudent);
        });
      }
    });
  }
//   dialogRef.afterClosed().subscribe((result: Student | undefined) => {
//     if (result) {
//       this.studentService.addStudent(result).subscribe((newStudent: Student | null) => {
//         if (newStudent) {
//           // do something with the new student object
//         }
//       });
//     }
//     });

//      dialogRef.afterClosed().subscribe((result: Student) => {
//       if (result) {
//         this.studentService.addStudent(result).subscribe((addedStudent: Student) => {
//           console.log(`Added student: ${JSON.stringify(addedStudent)}`);
//           // You can add any additional logic here to update the UI, display a success message, etc.
//         });
//       }
//     });
//   }

    // addStudent() {
    //   const student: Student = {studentId, firstName, lastName, email };
    //   this.studentService.addStudent(student).subscribe((newStudent: Student | null) => {
    //     if (newStudent) {
    //       // do something with the new student object
    //     }
    //   });
    // }
    
   

}
