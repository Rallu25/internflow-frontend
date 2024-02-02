import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private role: 'mentor' | 'teamlead' | 'student' = 'student'; // default to 'student'

  constructor() { }

  setRole(role: 'mentor' | 'teamlead' | 'student'): void {
    this.role = role;
  }

  getRole(): 'mentor' | 'teamlead' | 'student' {
    return this.role;
  }
}