import { TestBed } from '@angular/core/testing';
import { TeamService } from './team.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Team } from '../dtos/team';
import { TeamMock } from './spec-mocks/team.mock';

describe('TeamService', () => {
  let teamService: TeamService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamService],
    });
    teamService = TestBed.inject(TeamService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(teamService).toBeTruthy();
  });

  it('should save a team', () => {
    const mockTeam: Team = new Team (TeamMock.mockTeams[0]);
    teamService.saveTeam(mockTeam).subscribe((result) => {
      expect(result).toEqual(mockTeam);
    });

    const req = httpMock.expectOne('/api/team');
    expect(req.request.method).toBe('POST');
    req.flush(mockTeam);
  });

  it('should get a list of teams', () => {
    const mockTeams: Team[] = TeamMock.mockTeams;

    teamService.searchTeams().subscribe((result) => {
      expect(result).toEqual(mockTeams);
    });

    const req = httpMock.expectOne('/api/team');
    expect(req.request.method).toBe('GET');
    req.flush(mockTeams);
  });

  it('should delete a team', () => {
    const teamId = 1;

    teamService.deleteTeam(teamId).subscribe();

    const req = httpMock.expectOne(`/api/team/${teamId}`);
    expect(req.request.method).toBe('DELETE');
  });
});
