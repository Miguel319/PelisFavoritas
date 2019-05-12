import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { Pelicula } from 'src/app/modelos/pelicula.model';

@Component({
  selector: 'app-pelis-lista',
  templateUrl: './pelis-lista.component.html',
  styleUrls: ['./pelis-lista.component.css']
})
export class PelisListaComponent implements OnInit {
  peliculas: any = [];

  constructor(private peliculaServicio: PeliculasService) { }

  ngOnInit() {
    this.peliculaServicio.getPeliculas().subscribe(
      (res) => {
        this.peliculas = res;
      },
      (err) => console.log(err)
    );
  }

}
