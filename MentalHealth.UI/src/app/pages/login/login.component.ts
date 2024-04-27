import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(user => {
          if (user) {
            console.log('Login successful user => ', user);
            localStorage.setItem(
              'userData',
              JSON.stringify({
                auth: true,
                userId: user.id,
                username: user.username,
                profileImage: user.profileImage,
                email: user.email,
              }),
            );
            // Navigate to home page
            this.router.navigate(['/Home']);
          } else {
            console.log('Login failed');
          }
        });
    }
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}