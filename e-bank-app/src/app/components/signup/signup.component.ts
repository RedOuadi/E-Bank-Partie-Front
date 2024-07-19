// signup.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  signup(userDetails: any) {
    this.authService.signup(userDetails).subscribe(response => {
      localStorage.setItem('token', response.token); // Store the token in localStorage
    });
  }
}

