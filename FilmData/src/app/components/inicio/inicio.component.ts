import { Component } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../interfaces/popular-movies-response.interface';
import { SerieService } from '../../services/serie.service';
import { Serie } from '../../interfaces/serie.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  movies: Movie[] = [];
  listaSeries: Serie[] = [];

  constructor(private tmdbService: TmdbService, private serieService: SerieService) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data) => {
      console.log('Datos recibidos:', data);

      this.movies = data.results;
    });
    this.serieService.getSeriesPopulares().subscribe(res => {

      this.listaSeries = res.results;
    })
  }


  getColor(vote_average: number): string {

    if(vote_average <= 20){

      return "danger";
    }
    else if(vote_average <= 50){

      return "warning";
    }
    else {

      return "success";
    }
  }

}
