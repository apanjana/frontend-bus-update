import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';  // Optional: For routing after successful login
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule]
})
export class LoginComponent {
  signInForm: FormGroup;
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    // Sign In form initialization
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });

    // Sign Up form initialization
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Handle Sign In form submission
  onSignInSubmit() {
    if (this.signInForm.valid) {
      const formData = this.signInForm.value;
      this.http.post('/api/users/login', formData).subscribe({
        next: (response: any) => {
          console.log('Login success:', response);
          // Store JWT token in localStorage
          localStorage.setItem('token', response.token);
          // Optionally, redirect the user after login
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Login error:', error);
        }
      });
    } else {
      console.log('Sign In form is invalid');
    }
  }

  // Handle Sign Up form submission
  onSignUpSubmit() {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;
      this.http.post('/api/users/register', formData).subscribe({
        next: (response: any) => {
          console.log('Registration success:', response);
          // Optionally, you could log the user in immediately after registration
        },
        error: (error) => {
          console.error('Registration error:', error);
        }
      });
    } else {
      console.log('Sign Up form is invalid');
    }
  }
}
