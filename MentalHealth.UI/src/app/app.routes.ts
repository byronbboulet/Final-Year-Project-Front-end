import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'Tutorials', component: TutorialsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];