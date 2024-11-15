import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../interfaces/popular-movies-response.interface';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data) => {
      this.movies = data.results;
    });
  }
}
