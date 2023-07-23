import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AddActivityDialogComponent } from './add-activity-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddActivityDialogComponent', () => {
  let component: AddActivityDialogComponent;
  let fixture: ComponentFixture<AddActivityDialogComponent>;

  const mockMatDialogRef = {
    close: jasmine.createSpy('close'),
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActivityDialogComponent ],
      imports: [
        MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: mockMatDialogRef }, 
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActivityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
