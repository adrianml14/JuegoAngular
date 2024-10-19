import { Component, Input,OnInit } from '@angular/core';
import { Circuito } from '../models/circuito.model';



@Component({
  selector: 'app-seleccion-circuito',
  templateUrl: './seleccion-circuito.component.html',
  styleUrls: ['./seleccion-circuito.component.css']
})


export class SeleccionCircuitoComponent{
  
  circuitos: Circuito[];
  circuitoSeleccionado: Circuito | null = null;

  constructor() {

    this.circuitos = [
      new Circuito(1),
      new Circuito(2),
      new Circuito(3),
      new Circuito(4),
      new Circuito(5),
      new Circuito(6)
    ];
  }

  abrirCircuito(circuito: Circuito) {

    if (this.circuitoSeleccionado === circuito) {
      return;
    }
    this.circuitoSeleccionado = circuito;
    this.circuitos.forEach(c => c.abierto = false); 
    circuito.abierto = true; 
  }

  cerrarCircuito() {
    if (this.circuitoSeleccionado) {
      this.circuitoSeleccionado.abierto = false; 
      this.circuitoSeleccionado = null; 
    }
  }

}
