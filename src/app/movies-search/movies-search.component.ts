import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})

export class MoviesSearchComponent implements OnInit {
  query: string;
  typeSubscription: any;
  movies: object[];
  constructor(
    private route: ActivatedRoute,
    private api: ApiMoviesService,
    private router: Router
  ) { }


  ngOnInit() {
    this.typeSubscription = this.api.searchMovies(this.query).subscribe((res: any) => {
      this.movies = res.results;
      console.log(this.movies);
    })
  }

  ngOnDestroy(): void {
    this.typeSubscription.unsubscribe();
  }
}
