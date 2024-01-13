import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internflow';
  showLayout: boolean = true;

  constructor(private router: Router) {
    // Listen to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check the current route
        this.showLayout = !event.urlAfterRedirects.startsWith('/login');
      }
    });
  }
}

