import { TestBed } from '@angular/core/testing';
import { StudentService } from './student.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Student } from '../dtos/student';
import { StudentMock } from './spec-mocks/student.mock';

describe('StudentService', () => {
  let studentService: StudentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentService],
    });
    studentService = TestBed.inject(StudentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(studentService).toBeTruthy();
  });

  it('should add a student', () => {
    const mockStudent: Student = new Student(StudentMock.mockStudents[0]); 

    studentService.addStudent(mockStudent).subscribe((result) => {
      expect(result).toEqual(mockStudent);
    });

    const req = httpMock.expectOne('/api/student');
    expect(req.request.method).toBe('POST');
    req.flush(mockStudent);
  });

});
