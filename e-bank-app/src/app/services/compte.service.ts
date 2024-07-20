import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compte } from '../module/compte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private baseURL = "http://localhost:8084/api/compte/affiche";

  constructor(private httpClient: HttpClient) { }
  
  getCompte(): Observable<Compte[]>{
    return this.httpClient.get<Compte[]>(`${this.baseURL}`);
  }
}
