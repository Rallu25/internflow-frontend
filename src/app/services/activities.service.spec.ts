import { TestBed } from '@angular/core/testing';
import { ActivitiesService } from './activities.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Activities } from '../dtos/activities'; 

describe('ActivitiesService', () => {
  let activitiesService: ActivitiesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActivitiesService],
    });
    activitiesService = TestBed.inject(ActivitiesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(activitiesService).toBeTruthy();
  });

  it('should save an activity', () => {
    const mockActivity: Activities = new Activities({
      activityId: 1,
      activityName: 'Test Activity',
      grade: null,
      attendance: null,
      creationDate: new Date(),
      activityDate: new Date(),
    });

    activitiesService.saveActivity(mockActivity).subscribe((result) => {
      expect(result).toEqual(mockActivity);
    });

    const req = httpMock.expectOne('/api/activity');
    expect(req.request.method).toBe('POST');
    req.flush(mockActivity);
  });

  it('should get a list of activities', () => {
    const mockActivities: Activities[] = [
      {
        activityId: 1,
        activityName: 'Activity 1',
        grade: null,
        attendance: null,
        creationDate: new Date(),
        activityDate: new Date(),
      },
      {
        activityId: 2,
        activityName: 'Activity 2',
        grade: null,
        attendance: null,
        creationDate: new Date(),
      },
    ];

    activitiesService.searchActivities().subscribe((result) => {
      expect(result).toEqual(mockActivities);
    });

    const req = httpMock.expectOne('/api/activity');
    expect(req.request.method).toBe('GET');
    req.flush(mockActivities);
  });

  it('should delete an activity', () => {
    const activityId = 1;

    activitiesService.deleteActivity(activityId).subscribe();

    const req = httpMock.expectOne(`/api/activity/${activityId}`);
    expect(req.request.method).toBe('DELETE');
  });
});