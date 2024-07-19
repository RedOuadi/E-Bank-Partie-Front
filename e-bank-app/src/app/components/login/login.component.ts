
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login(credentials: any) {
    this.authService.login(credentials).subscribe(response => {
      localStorage.setItem('token', response.token); // Store the token in localStorage
    });
  }
}
