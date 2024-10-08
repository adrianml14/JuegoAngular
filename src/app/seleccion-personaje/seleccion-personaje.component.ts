import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';

@Component({
  selector: 'app-seleccion-personaje',
  templateUrl: './seleccion-personaje.component.html',
  styleUrls: ['./seleccion-personaje.component.css']
})
export class SeleccionPersonajeComponent  {
  escuderias: string[] = ["Minardi", "Renault", "Ferrari", "Mclaren", "Aston Martin"];
  personaje: number=1;
  personajes: Personaje[] = [];

  getEscuderia(): string {
    return this.escuderias[this.personaje - 1];
  }
  ngOnInit(): void{
    for(let i=0; i< 6; i++){
      this.personajes[i]= new Personaje(i)
    }
  }

  async elegir(){
  
      if(this.personaje<this.escuderias.length){
        this.personaje++;
      }
      else{
        this.personaje=1;
      }
      }
    

    async atras(){

        if(this.personaje>1){
          this.personaje--;
        }
        else{
          this.personaje=this.escuderias.length;
        }
        }
}


