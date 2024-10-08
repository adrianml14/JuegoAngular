import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeleccionPersonajeComponent } from './seleccion-personaje/seleccion-personaje.component';
import { CartasPersonajesComponent } from './cartas-personajes/cartas-personajes.component';
import { SeleccionCircuitoComponent } from './seleccion-circuito/seleccion-circuito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionPersonajeComponent,
    CartasPersonajesComponent,
    SeleccionCircuitoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
