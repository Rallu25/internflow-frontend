import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Team } from '../dtos/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private readonly API_URL = 'http://localhost:8080/api/team'; // Update the URL with your actual backend URL

  constructor(private http: HttpClient) {}

  path = '/api/team';

saveTeam(team: Team): Observable<Team> {
    return this.http.post(this.path, team).pipe(
        map((response: any) => {
            return new Team(response);
        })
    );
}

searchTeams(): Observable<Team[]> {
  return this.http.get(this.path)
    .pipe(
      map((response: unknown) => {
        const teamList = (response as Team[]);
        if (teamList) {
            return teamList;
        }
        return [];
      })
    );
}
}
