import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8084/api/users/';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'all');
  }
}


