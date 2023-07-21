import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamStudentsComponent } from './team-students.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { of } from 'rxjs';
import { Team } from 'src/app/dtos/team';
import { Student } from 'src/app/dtos/student';

describe('TeamStudentsComponent', () => {
  let component: TeamStudentsComponent;
  let fixture: ComponentFixture<TeamStudentsComponent>;
  let mockDialogRef: MatDialogRef<TeamStudentsComponent>;
  let mockStudentService: jasmine.SpyObj<StudentService>;

  beforeEach(async () => {
    const mockData = {
      team: {
        teamId: 1,
      } as Team,
    };

    const mockStudent: Student = {
      studentId: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      team: 'Team 1',
      attendance: 'Present',
      grade: 8,
    };

    mockStudentService = jasmine.createSpyObj<StudentService>(['getStudentsByTeam', 'searchStudents', 'removeStudentFromTeam', 'addStudentToTeam']);
    mockStudentService.getStudentsByTeam.and.returnValue(of([mockStudent]));
    mockStudentService.searchStudents.and.returnValue(of([mockStudent]));

    await TestBed.configureTestingModule({
      declarations: [ TeamStudentsComponent ],
      imports: [ MatDialogModule, HttpClientModule ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        FormBuilder, 
        { provide: StudentService, useValue: mockStudentService },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: mockData }, 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamStudentsComponent);
    component = fixture.componentInstance;
    mockDialogRef = TestBed.inject(MatDialogRef); 

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
