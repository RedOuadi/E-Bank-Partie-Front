import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jwt } from '../../model/Jwt';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.service.login(this.loginForm.value).subscribe(
        (response: Jwt) => {
          const jwToken = response.accessToken; // Make sure this matches your Jwt model
          localStorage.setItem('jwt', jwToken);
          this.router.navigateByUrl('/dashboard');
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
