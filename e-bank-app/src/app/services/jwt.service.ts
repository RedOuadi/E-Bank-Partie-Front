import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Jwt } from '../model/Jwt';

const url = 'http://localhost:8084/api/auth/';



@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }

  register(signRequest: any): Observable<Jwt> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Jwt>(url + 'signup', signRequest, { headers });
  }


  login(loginRequest: any): Observable<Jwt> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<Jwt>(url + 'login', loginRequest, { headers });
  }

  sayHello(): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get(url + 'demo', { headers });
  }

  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      return new HttpHeaders().set('Authorization', 'Bearer ' + jwtToken);
    }
    return undefined;
  }

  refreshToken(refreshToken: string): Observable<Jwt> {
    return this.http.post<Jwt>(url + 'refresh', { refreshToken });
  }

  logout(): void {

    localStorage.removeItem('jwt');
    localStorage.removeItem('refreshToken');
  }
}




