import { Component } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../interfaces/popular-movies-response.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  movies: Movie[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data) => {
      console.log('Datos recibidos:', data);

      this.movies = data.results;
    });
  }

}
