import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id: string;
  typeSubscription: any;
  movie: object;
  similar: object[];
  constructor(
    private route: ActivatedRoute,
    private api: ApiMoviesService
  ) { }

  ngOnInit() {
    this.typeSubscription = this.route.params.subscribe(params => {
      this.id = params.id;
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      this.api.getMovies(this.id).subscribe((res: any) => {
        this.movie = res;
      });
      this.api.getSimilarMovies(this.id).subscribe((res: any) => {
        this.similar = res.results;
      });
    })
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.typeSubscription.unsubscribe();
  }
}
