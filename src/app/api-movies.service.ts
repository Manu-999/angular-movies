import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiMoviesService {
  urlBase = `https://api.themoviedb.org/3/`;
  key = 'da63f96158928b6fc3e74f1d20e6a5ce';
  generateUrl = (type: string) => this.urlBase + `movie/${type}?api_key=` + this.key;
  generateSearchUrl = (query: string) => `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&query=${query}`;

  constructor(private http: HttpClient) { }

  getMovies(type: string) {
    return this.http.get(this.generateUrl(type));
  }

  getMovie(id: string) {
    return this.http.get(this.generateUrl(id))
  }

  getSimilarMovies(id: string) {
    return this.http.get(this.generateUrl(id + '/similar'));
  }

  searchMovies(query: string) {
    return this.http.get(this.generateSearchUrl(query));
  }
}
