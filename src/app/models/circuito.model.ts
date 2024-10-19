export class  Circuito{

    imagen : string="";
    informacion : string="";
    nombre : string="";
    layout : string="";
    abierto : boolean;

constructor (id:number){
    if(id==1){
        this.imagen="/assets/imagenes/malasia.jpg";
        this.informacion = "Con una extensión de más de 5,5 kilómetros, el Circuito Internacional de Sepang ofrece un diseño de pista desafiante y diverso que pone a prueba las habilidades incluso de los pilotos más experimentados. El circuito presenta una combinación de largas rectas, curvas amplias y curvas cerradas, lo que proporciona una experiencia emocionante tanto para los competidores como para los espectadores.";
        this.nombre ="<b>Sepang</b>";
        this.layout ="/assets/imagenes/sepangLayout.webp";
        this.abierto = false;
    } else  if(id==2){
        this.imagen="/assets/imagenes/japon.jpg";
        this.informacion = "Una de las características más distintivas del circuito de Suzuka es su diseño único en forma de ocho. Este diseño no sólo ha contribuido a la fama del circuito sino que también ha inspirado numerosas imitaciones en juegos de carreras y pistas de juguete. El diseño en forma de ocho agrega una capa adicional de complejidad a la pista, lo que requiere que los conductores naveguen por una amplia gama de giros y cambios de elevación.";
        this.nombre ="<b>Suzuka</b>";
        this.layout ="/assets/imagenes/suzukaLayout.webp";
        this.abierto = false;
    } else  if(id==3){
        this.imagen="/assets/imagenes/austria.jpg";
        this.informacion = "Con una extensión de 4.318 kilómetros, el Red Bull Ring es una pista desafiante y emocionante que ofrece una experiencia única tanto para los conductores como para los espectadores. El circuito cuenta con un total de diez curvas, incluidas algunas curvas icónicas que se han convertido en sinónimo de la reputación de la pista.";
        this.nombre ="<b>Red Bull Ring</b>";
        this.layout ="/assets/imagenes/austriaLayout.webp";
        this.abierto = false;
    } else  if(id==4){
        this.imagen="/assets/imagenes/spa.jpg";
        this.informacion = "Con una extensión de más de 7 kilómetros, el circuito es conocido por sus curvas rápidas y amplias, cambios de elevación pronunciados y condiciones climáticas impredecibles. Estos factores lo convierten en una auténtica prueba de habilidad y valentía para los conductores, que exigen precisión y concentración en cada curva.";
        this.nombre ="<b>Spa-Francorchamps</b>";
        this.layout ="/assets/imagenes/spaLayout.webp";
        this.abierto = false;
    } else  if(id==5){
        this.imagen="/assets/imagenes/barcelona.jpg";
        this.informacion = "El circuito, diseñado por el arquitecto alemán Hermann Tilke, tiene una longitud total de 4.655 kilómetros (2.892 millas). Presenta una combinación de rectas de alta velocidad, curvas amplias y secciones técnicas, lo que lo convierte en una verdadera prueba de habilidad y precisión para los conductores. El trazado de la pista sufrió importantes modificaciones en 2007, mejorando las oportunidades de adelantamiento y aumentando las medidas de seguridad.";
        this.nombre ="<b>Montmeló</b>";
        this.layout ="/assets/imagenes/montmeloLayout.webp";
        this.abierto = false;
    } else  if(id==6){
        this.imagen="/assets/imagenes/monaco.jpg";
        this.informacion = "Ubicado en el Principado de Mónaco, el circuito abarca apenas 3,337 kilómetros (2,074 millas), lo que lo convierte en la pista más corta del calendario de Fórmula Uno. Sin embargo, lo que le falta en longitud lo compensa con creces con su intrincado diseño y su naturaleza desafiante. Con sus curvas cerradas, incluida la famosa curva cerrada y la sección del túnel de alta velocidad, los conductores deben poseer una habilidad y precisión excepcionales para recorrer el circuito con éxito.";
        this.nombre ="<b>Mónaco</b>";
        this.layout ="/assets/imagenes/monacoLayout.webp";
        this.abierto = false;
    }
}
}