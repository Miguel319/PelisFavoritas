import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PelisListaComponent } from "./componentes/pelis-lista/pelis-lista.component";

const routes: Routes = [
  { path: "", redirectTo: "/peliculas", pathMatch: "full" },
  { path: "peliculas", component: PelisListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
