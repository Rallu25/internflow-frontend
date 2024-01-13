import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/dtos/student';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { Team } from 'src/app/dtos/team';
import { AddTeamDialogComponent } from '../add-team-dialog/add-team-dialog.component';
import { TeamService } from 'src/app/services/team.service';
import { TeamStudentsComponent } from '../team-students/team-students.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from 'src/app/services/event-service';
import { RoleService } from 'src/app/services/role-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];
  studentSelected: Student | undefined;
  teams: Team[] = [];
  role: 'mentor' | 'teamlead' | 'student'; 
  constructor(
    private router: Router,
    private studentService: StudentService,
    private dialog: MatDialog,
    private teamService: TeamService,
    private snackBar: MatSnackBar,
    private eventService: EventService,
    private roleService: RoleService
  ) { this.role = this.roleService.getRole();}

  ngOnInit(): void {
    this.studentService.searchStudents().subscribe((students) => {
      this.students = students;
    });
    this.fetchTeams();
    this.eventService.teamAdded$.subscribe(() => {
      this.fetchTeams(); 
    });
  }

  addStudent() {
    this.studentSelected = new Student({
      studentId: -1,
      firstName: '',
      lastName: '',
      email: '',
      team: '',
      attendance: '',
      grade: -1
    })
  }
  openAddStudentDialog() {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.addStudent(result).subscribe(newStudent => {
          console.log('New student added:', newStudent);
        }, error => {
          console.log('Error adding student:', error);
        });
      }
    });
  }

  fetchTeams(): void {
    this.teamService.searchTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

  openAddTeamDialog(): void {
    const dialogRef = this.dialog.open(AddTeamDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.teamService.saveTeam(result).subscribe(
          (newTeam) => {
            console.log('New team added:', newTeam);
            this.fetchTeams();
          },
          (error) => {
            console.log('Error adding team:', error);
          }
          
        );
        
      }
    });

  }

  openStudentTableDialog(team: Team): void {
    const dialogRef = this.dialog.open(TeamStudentsComponent, {
      width: '800px',
      data: { team: team }
    });
    
  }

  deleteTeam(team: Team): void {
    const confirmation = confirm(`Are you sure you want to delete ${team.teamName}?`);
    if (confirmation) {
      this.teamService.deleteTeam(team.teamId).subscribe(
        () => {
          this.fetchTeams();
          this.snackBar.open('Team deleted successfully!', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        },
        (error) => {
          console.log('Error deleting team:', error);
          this.snackBar.open('An error occurred while deleting the team.', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        }
      );
      
    }
  }







}

