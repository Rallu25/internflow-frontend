import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/dtos/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-team-dialog',
  templateUrl: './add-team-dialog.component.html',
  styleUrls: ['./add-team-dialog.component.scss']
})
export class AddTeamDialogComponent implements OnInit {
  students: Student[] | undefined;
  selectedStudents: Student[] = [];

  constructor(
    private dialogRef: MatDialogRef<AddTeamDialogComponent>,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.studentService.searchStudents().subscribe(students => {
      this.students = students;
    });
  }

  onSelectStudent(student: Student): void {
    // Check if the maximum number of students in the team has been reached
    if (this.selectedStudents.length >= 5) {
      // Display an error message or show a notification to the user
      return;
    }

    // Add the selected student to the team
    this.selectedStudents.push(student);
  }

  onRemoveStudent(student: Student): void {
    // Remove the selected student from the team
    const index = this.selectedStudents.indexOf(student);
    if (index > -1) {
      this.selectedStudents.splice(index, 1);
    }
  }

  onSubmit(): void {
    // Check if the minimum required number of students in the team has been met
    if (this.selectedStudents.length < 1) {
      // Display an error message or show a notification to the user
      return;
    }

    // Handle the form submission
    // You can access the team name and selected students using the corresponding variables in your component

    this.dialogRef.close();
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
