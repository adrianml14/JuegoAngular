export class  Circuito{

    imagen : string="";
    estadisticas : string="";
    informacion : string="";


constructor (id:number){
    if(id==1){
        this.imagen="/assets/imagenes/malasia.jpg";
        this.estadisticas = "";
        this.informacion ="Sepang";
    } else  if(id==2){
        this.imagen="/assets/imagenes/japon.jpg";
        this.estadisticas = "";
        this.informacion ="Suzuka";
    } else  if(id==3){
        this.imagen="/assets/imagenes/austria.jpg";
        this.estadisticas = "";
        this.informacion ="Red Bull Ring";
    } else  if(id==4){
        this.imagen="/assets/imagenes/spa.jpg";
        this.estadisticas = "";
        this.informacion ="Spa-Francorchamps";
    } else  if(id==5){
        this.imagen="/assets/imagenes/barcelona.jpg";
        this.estadisticas = "";
        this.informacion ="Montmeló";
    } else  if(id==6){
        this.imagen="/assets/imagenes/monaco.jpg";
        this.estadisticas = "";
        this.informacion ="Monaco";
    }
}
}