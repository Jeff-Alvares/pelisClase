import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  /* Obtener datos de la API TMDB */
  getPelis(){
    return this.http.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_date.lte=2019-01-31&api_key=333d175cfa6dc69b4c15a2a00232692c&primary_release_date.gte=2019-01-01&language=es&include_image_language=es'
    );
  }
}