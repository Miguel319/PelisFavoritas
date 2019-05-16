import { Component, OnInit, HostBinding } from "@angular/core";
import { Pelicula } from "src/app/modelos/pelicula.model";
import { PeliculasService } from "src/app/servicios/peliculas.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pelis-formulario",
  templateUrl: "./pelis-formulario.component.html",
  styleUrls: ["./pelis-formulario.component.css"]
})
export class PelisFormularioComponent implements OnInit {
  @HostBinding("class") classes = "row";
  pelicula: Pelicula = {
    id: 0,
    titulo: "",
    descripcion: "",
    director: "",
    imagen: "",
    creado_en: new Date()
  };

  modoEditar: boolean = false;

  constructor(
    private peliculaService: PeliculasService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit() {
    const paramametros = this.rutaActiva.snapshot.params;
    
    if (paramametros.id) {
      this.peliculaService.getPelicula(paramametros.id)
        .subscribe(
          (res) => {
            console.log(res);
            this.pelicula = res;
            this.modoEditar = true;
          },
          (error) => console.error(error)
        )
    }
  }

  guardarPelicula() {
    delete this.pelicula.creado_en;
    delete this.pelicula.id;

    this.peliculaService
      .agregarOEditarPelicula(this.pelicula)
      .subscribe(
        res => this.router.navigate(["/peliculas"]),
        err => console.error(err)
      );
  }

  actualizarPelicula() {
    delete this.pelicula.creado_en;

    this.peliculaService.actualizarPelicula(this.pelicula.id, this.pelicula)
    .subscribe(
      (res) => this.router.navigate(["/peliculas"])
    ,
      (error) => console.log(error)
    )
  }
}
