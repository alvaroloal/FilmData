import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { ActorsComponent } from './components/actors/actors.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'peliculas', component: PopularMoviesComponent},
  {path: "seriesPopulares", component: ListaSeriesComponent},
  {path: "actores",component: ActorsComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
