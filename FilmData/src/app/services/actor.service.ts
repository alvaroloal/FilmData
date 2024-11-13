import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActorResponse } from '../interfaces/popular-actors-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private apiUrl = 'https://api.themoviedb.org/3/person/popular';
  private apiKey = 'ea873ab26becd7979d8481971848519e'; 

  constructor(private http: HttpClient) { }

  getFamousActors(): Observable<ActorResponse> {
    return this.http.get<ActorResponse>(`${this.apiUrl}?api_key=${this.apiKey}`);
  }
}
