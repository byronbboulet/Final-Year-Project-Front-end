import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class LoginComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value.username, this.signupForm.value.password)
        .subscribe(user => {
          if (user) {
            console.log('Signup successful');
            // Navigate to home page
            this.router.navigate(['/']);
          } else {
            console.log('Signup failed');
          }
        });
    }
  }
}