export class  Personaje{

    imagen : string="";
    media : string="";
    estadisticas : string="";
    informacion : string="";


constructor (id:number){
    if(id==1){
        this.imagen="/assets/imagenes/minardi.jpg";
        this.media="<br>75";
        this.estadisticas = "Fernando Alonso - Minardi<br><br>Experiencia - 55 <br> Coche - 65 <br> Manejo - 79 <br> Qualy - 75 <br> Ritmo - 80";
        this.informacion ="";
    } else  if(id==2){
        this.imagen="/assets/imagenes/renault.jpg";
        this.media="<br>94";
        this.estadisticas = "Fernando Alonso - Renault<br><br>Experiencia - 85  <br> Coche - 96 <br> Manejo - 90 <br> Qualy - 89 <br> Ritmo - 94";
        this.informacion ="";
    } else  if(id==3){
        this.imagen="/assets/imagenes/ferrari.jpg";
        this.media="<br>91";
        this.estadisticas = "Fernando Alonso - Ferrari<br><br>Experiencia - 90<br>Coche - 77<br>Manejo - 98<br>Qualy - 90<br>Ritmo - 89";
        this.informacion ="";
    } else  if(id==4){
        this.imagen="/assets/imagenes/mclaren.jpg";
        this.media="<br>82";
        this.estadisticas = "Fernando Alonso - Mclaren<br><br>Experiencia - 94<br>Coche - 65<br>Manejo -85<br>Qualy - 80<br>Ritmo - 78";
        this.informacion ="";
    } else  if(id==5){
        this.imagen="/assets/imagenes/aston.jpg";
        this.media="<br>88";
        this.estadisticas = "Fernando Alonso-Aston Martin<br><br>Experiencia - 98<br>Coche - 84<br>Manejo - 90<br>Qualy - 82<br>Ritmo - 85";
        this.informacion ="";
    }
}
}