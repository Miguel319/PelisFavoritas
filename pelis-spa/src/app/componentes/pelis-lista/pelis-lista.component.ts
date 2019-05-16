import { Component, OnInit, HostBinding } from "@angular/core";
import { PeliculasService } from "src/app/servicios/peliculas.service";

@Component({
  selector: "app-pelis-lista",
  templateUrl: "./pelis-lista.component.html",
  styleUrls: ["./pelis-lista.component.css"]
})
export class PelisListaComponent implements OnInit {
  @HostBinding("class") classes = "row";
  peliculas: any = [];

  constructor(private peliculaServicio: PeliculasService) {}

  ngOnInit() {
    this.getPeliculas();
  }

  getPeliculas() {
    this.peliculaServicio.getPeliculas().subscribe(
      res => {
        this.peliculas = res;
      },
      err => console.error(err)
    );
  }

  eliminarPelicula(id: number) {
    this.peliculaServicio
      .eliminarPelicula(id)
      .subscribe(res => this.getPeliculas(), err => console.error(err));
  }

  editarPelicula(id: number) {
    console.log(id);
  }
}
