import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // Route for login without layout
  { path: 'login', component: LoginComponent },
  // Redirect empty path to 'login'
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Nested routes within layout for other pages
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: DashboardComponent },
      { path: 'activities', component: ActivitiesComponent },
      // ... other routes that should have the layout
    ]
  },
  // Catch-all for undefined routes
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
