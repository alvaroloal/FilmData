import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieResponse } from '../interfaces/serie.interface';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  POPULARES = "https://api.themoviedb.org/3/tv/popular?api_key=a73172f9b2f5f84377847c5a9d76d375";

  constructor(private http: HttpClient) { }


  getSeriesPopulares(): Observable<SerieResponse> {

    return this.http.get<SerieResponse>(this.POPULARES);
  }
}
