import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeleccionPersonajeComponent } from './seleccion-personaje/seleccion-personaje.component';
import { CartasPersonajesComponent } from './cartas-personajes/cartas-personajes.component';
import { SeleccionCircuitoComponent } from './seleccion-circuito/seleccion-circuito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraComponent } from './barra/barra.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule } from './app-routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionPersonajeComponent,
    CartasPersonajesComponent,
    SeleccionCircuitoComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
