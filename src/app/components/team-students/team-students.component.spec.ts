import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStudentsComponent } from './team-students.component';

describe('TeamStudentsComponent', () => {
  let component: TeamStudentsComponent;
  let fixture: ComponentFixture<TeamStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
