import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PelisListaComponent } from './componentes/pelis-lista/pelis-lista.component';
import { PelisFormularioComponent } from './componentes/pelis-formulario/pelis-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    PelisListaComponent,
    PelisFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
