import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private teamAddedSource = new Subject<void>();

  teamAdded$ = this.teamAddedSource.asObservable();

  triggerTeamAdded() {
    this.teamAddedSource.next();
  }
}
