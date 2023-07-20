import { TestBed } from '@angular/core/testing';
import { AttendanceService } from './attendance.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Attendance } from '../dtos/attendance';

describe('AttendanceService', () => {
  let attendanceService: AttendanceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AttendanceService],
    });
    attendanceService = TestBed.inject(AttendanceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(attendanceService).toBeTruthy();
  });

  it('should save attendance', () => {
    const mockAttendance: Attendance = new Attendance({
      attendanceId: 1,
      status: 'Present',
      studentId: 123,
      activityId: 456,
    });

    attendanceService.saveAttendance(mockAttendance).subscribe((result) => {
      expect(result).toEqual(mockAttendance);
    });

    const req = httpMock.expectOne('/api/attendance');
    expect(req.request.method).toBe('POST');
    req.flush(mockAttendance);
  });

  // Add more tests for other functionalities of the AttendanceService if needed

});
