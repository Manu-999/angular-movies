import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiMoviesService {
  urlBase = `https://api.themoviedb.org/3/`;
  key = 'da63f96158928b6fc3e74f1d20e6a5ce';
  generateUrl = (type: string) => this.urlBase + `movie/${type}?api_key=` + this.key;

  constructor(private http: HttpClient) { }

  getMovies(type: string) {
    return this.http.get(this.generateUrl(type));
  }

  // getMovieDetail(movie: object) {

  //   const url: string = `https://api.themoviedb.org/3/movie/${id}?api_key=323112ea2281b9eb70f319f4df422c6b&language=en-US`;
  // }
}
