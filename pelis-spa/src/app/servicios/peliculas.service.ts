import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../modelos/pelicula.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PeliculasService {
  API_URI = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<Pelicula> {
    return this.http.get(`${this.API_URI}/peliculas`);
  }

  getPelicula(id: string): Observable<Pelicula> {
    return this.http.get(`${this.API_URI}/peliculas/${id}`);
  }

  agregarOEditarPelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this.http.post(`${this.API_URI}/peliculas`, pelicula);
  }

  actualizarPelicula(id: number | string, pelicula: Pelicula): Observable<Pelicula> {
    return this.http.put(`${this.API_URI}/peliculas/${id}`, pelicula);
  }

  eliminarPelicula(id: number | string): Observable<Pelicula> {
    return this.http.delete(`${this.API_URI}/peliculas/${id}`);
  }
}
