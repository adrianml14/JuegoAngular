import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SegundoComponent } from './components/segundo/segundo.component';

const routes: Routes = [ //ruta, componente
  { path:'inicio', component: InicioComponent},
  { path:'segundo', component: SegundoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }