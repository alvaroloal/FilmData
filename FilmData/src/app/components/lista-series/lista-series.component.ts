import { Component, OnInit } from '@angular/core';
import { Serie } from '../../interfaces/serie.interface';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrl: './lista-series.component.css'
})
export class ListaSeriesComponent implements OnInit{

  listaSeries: Serie[] = [];

  constructor(private serieService: SerieService) {}


  ngOnInit(): void {
      
    this.serieService.getSeriesPopulares().subscribe(res => {

      this.listaSeries = res.results;
    })
  }


}
