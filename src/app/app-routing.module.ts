import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';

const routes: Routes = [
  { path: 'movies/:type', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'search/:query', component: MoviesSearchComponent },
  { path: 'search', component: MoviesSearchComponent },
  { path: '**', redirectTo: 'movies/popular', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
