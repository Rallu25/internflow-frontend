import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityEventService {
  private activityAddedSource = new Subject<void>();

  activityAdded$ = this.activityAddedSource.asObservable();

  triggerActivityAdded() {
    this.activityAddedSource.next();
  }
}
