import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    const apiKey = '8c899905c209b40ab22093a143df9412';
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  }
}
