import { TestBed } from '@angular/core/testing';
import { GradesService } from './grades.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Grades } from '../dtos/grades';

describe('GradesService', () => {
  let gradesService: GradesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GradesService],
    });
    gradesService = TestBed.inject(GradesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(gradesService).toBeTruthy();
  });

  it('should save a grade', () => {
    const mockGrade: Grades = new Grades({
      gradeId: 1,
      gradeValue: 9,
      comment: 'Great work!',
      studentId: 123,
      activityId: 456,
    });

    gradesService.saveGrade(mockGrade).subscribe((result) => {
      expect(result).toEqual(mockGrade);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/grade');
    expect(req.request.method).toBe('POST');
    req.flush(mockGrade);
  });

});
