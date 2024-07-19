// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8084/api/auth';

  constructor(private http: HttpClient) {}

  login(authRequestDTO: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, authRequestDTO);
  }

  signup(signUpRequestDto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, signUpRequestDto);
  }
}
