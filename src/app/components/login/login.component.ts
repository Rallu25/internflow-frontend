import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private roleService: RoleService, private router: Router) { }

  onLogin(form: NgForm) {
    const { username, password } = form.value;
    if (username === 'mentor' && password === 'mentor') {
      this.roleService.setRole('mentor');
      this.router.navigate(['/home']); 
    } else if (username === 'teamlead' && password === 'teamlead') {
      this.roleService.setRole('teamlead');
      this.router.navigate(['/home']);
    } else if (username === 'student' && password === 'student') {
      this.roleService.setRole('student');
      this.router.navigate(['/home']); 
    } else {
      alert('Invalid login credentials');
    }
  }
}