import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionPersonajeComponent } from './seleccion-personaje/seleccion-personaje.component';
import { SeleccionCircuitoComponent } from './seleccion-circuito/seleccion-circuito.component';



const routes: Routes = [ //ruta, componente
  { path:'', component: SeleccionPersonajeComponent},
  { path:'personaje', component: SeleccionPersonajeComponent},
  { path:'circuito', component: SeleccionCircuitoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
