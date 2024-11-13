import { Component } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../interfaces/popular-movies-response.interface';
import { SerieService } from '../../services/serie.service';
import { Serie } from '../../interfaces/serie.interface';
import { ActorService } from '../../services/actor.service';
import { Actor } from '../../interfaces/popular-actors-response.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  movies: Movie[] = [];
  listaSeries: Serie[] = [];
  actors: Actor[] = [];

  constructor(private tmdbService: TmdbService, private serieService: SerieService, private actorService: ActorService) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data) => {
      console.log('Datos recibidos:', data);

      this.movies = data.results;
    });
    this.serieService.getSeriesPopulares().subscribe(res => {

      this.listaSeries = res.results;
    })
    this.actorService.getFamousActors().subscribe(
      (data) => {
        this.actors = data.results; 
      },
      (error) => {
        console.error('Error fetching actors:', error);
      }
    );
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
