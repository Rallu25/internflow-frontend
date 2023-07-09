import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { StudentListComponent } from './components/student-list/student-list.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddStudentDialogComponent } from './components/add-student-dialog/add-student-dialog.component';
import { StudentService } from './services/student.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTeamDialogComponent } from './components/add-team-dialog/add-team-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { TeamService } from './services/team.service';
import { TeamStudentsComponent } from './components/team-students/team-students.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AddActivityDialogComponent } from './components/add-activity-dialog/add-activity-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { EditGradeDialogComponent } from './components/edit-grade-dialog/edit-grade-dialog.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { GradeEventService } from './services/grade-event-service';
import { SearchPipe } from './search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentListComponent,
    AddStudentDialogComponent,
    SidebarComponent,
    DashboardComponent,
    AddTeamDialogComponent,
    TeamStudentsComponent,
    LayoutComponent,
    ActivitiesComponent,
    AddActivityDialogComponent,
    EditGradeDialogComponent,
    SearchPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatSnackBarModule,
        MatSortModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgxPaginationModule,
    ],
  providers: [StudentService, TeamService, GradeEventService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
