import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PelisListaComponent } from "./componentes/pelis-lista/pelis-lista.component";
import { PelisFormularioComponent } from './componentes/pelis-formulario/pelis-formulario.component';

const routes: Routes = [
  { path: "", redirectTo: "/peliculas", pathMatch: "full" },
  { path: "peliculas", component: PelisListaComponent },
  { path: "peliculas/editar/:id", component: PelisFormularioComponent },
  { path: "peliculas/agregar", component: PelisFormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
