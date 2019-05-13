import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  type: string;
  typeSubscription: any;
  movies: object[] = [];
  lastPagedLoaded = 0;
  validTypes = ['top_rated', 'popular', 'upcoming'];

  constructor(private route: ActivatedRoute, private api: ApiMoviesService, private router: Router) {}

  ngOnInit() {
    this.typeSubscription = this.route.params.subscribe(params => {
      this.type = params.type;
      if (this.validTypes.includes(params.type)) {
        this.moreMovies();
      } else {
        this.router.navigate(['/movies/popular']);
      }
    });
  }
  moreMovies() {
    this.api.getMovies(this.type, this.lastPagedLoaded + 1).subscribe((res: any) => {
          this.movies = [...this.movies, ...res.results];
          this.lastPagedLoaded = res.page;
    });
  }

  ngOnDestroy() {
    this.typeSubscription.unsubscribe();
  }
}
