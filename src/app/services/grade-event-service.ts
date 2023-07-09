import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeEventService {
  private gradeAddedSource = new Subject<void>();

  gradeAdded$ = this.gradeAddedSource.asObservable();

  triggerGradeAdded() {
    this.gradeAddedSource.next();
  }
}
