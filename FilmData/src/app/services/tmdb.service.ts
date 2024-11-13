import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PopularMoviesResponse } from '../interfaces/popular-movies-response.interface';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '596271f851a9dea26ed639882123ebf1';

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<PopularMoviesResponse> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=es-ES&page=1`;
    return this.http.get<PopularMoviesResponse>(url);
  }

  
}



