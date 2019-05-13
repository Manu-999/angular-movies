import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss'],
})
export class MoviesSearchComponent implements OnInit {
  query: string = '';
  movies: object[];
  typeSubscription: any;

  constructor(private api: ApiMoviesService) {}

  searchMovie() {
    console.log(this.query);

    this.typeSubscription = this.api.searchMovies(this.query).subscribe((res: any) => {
      this.movies = res.results;
      this.query = 'valor cambiado!';
      // console.log(this.movies);
    });
  }
}
