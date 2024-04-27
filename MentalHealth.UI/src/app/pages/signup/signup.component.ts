import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      profileImage: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value.username, 
        this.signupForm.value.email, 
        this.signupForm.value.profileImage,
        this.signupForm.value.password)
        .subscribe(user => {
          if (user) {
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
            console.log('Signup successful user => ', user);
            // Navigate to home page
            this.router.navigate(['/Home']);
          } else {
            console.log('Signup failed');
          }
        });
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}