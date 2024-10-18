import { Component, Input,OnInit } from '@angular/core';
import { Circuito } from '../models/circuito.model';



@Component({
  selector: 'app-seleccion-circuito',
  templateUrl: './seleccion-circuito.component.html',
  styleUrls: ['./seleccion-circuito.component.css']
})


export class SeleccionCircuitoComponent implements OnInit{

  
  circuitoss: string[] = ["Malasia", "Japon", "Austria", "Belgica", "Barcelona", "Monaco"];
  circuito: number=1;
  circuitos: Circuito[] = [];

  getCircuito(): string {
    return this.circuitoss[this.circuito];
  }
  ngOnInit(): void{
    for(let i=0; i<=6; i++){
      this.circuitos[i -1]= new Circuito(i)
    }
  }
/*
  async elegir(){
  
    if(this.circuito<this.circuitos.length){
      this.circuito++;
    }
    else{
      this.circuito=1;
    }
    }
  

  async atras(){

      if(this.circuito>1){
        this.circuito--;
      }
      else{
        this.circuito=this.circuitos.length;
      }
      }

*/
}
