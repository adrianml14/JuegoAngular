import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';

@Component({
  selector: 'app-cartas-personajes',
  templateUrl: './cartas-personajes.component.html',
  styleUrls: ['./cartas-personajes.component.css']
})
export class CartasPersonajesComponent{

  @Input () personaje : Personaje;

}
