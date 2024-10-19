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
    // Si el circuito seleccionado es el mismo, no hace nada
    if (this.circuitoSeleccionado === circuito) {
      return;
    }
    // Cierra cualquier otro circuito abierto
    this.circuitoSeleccionado = circuito;
    this.circuitos.forEach(c => c.abierto = false); // Cierra todos
    circuito.abierto = true; // Solo abre el circuito actual
  }

  // Función para cerrar el circuito seleccionado
  cerrarCircuito() {
    if (this.circuitoSeleccionado) {
      this.circuitoSeleccionado.abierto = false; // Cierra el circuito
      this.circuitoSeleccionado = null; // Resetea la selección
    }
  }

}
