// creamos una variable para utilizar logicamente la etiqueta canvas llamada "canvas1"
const canvas = document.getElementById('canvas1');
// Avisamos el metodo en js para usar graficos 2D o 3D
const ctx = canvas.getContext('2d');

// definimos la altura del lienzo
canvas.height = window.innerHeight;
// definimos el ancho del lienzo 
canvas.width = window.innerWidth;
// declaramos una variable del TIPO LET, para luego config como una matriz vacia
let particlesArray = []; // esta vacio
const numberOfParticles = 300;

// creamos una clase JS(particle), para utlizar una tecnica que mezcla muchos objetos similares, con metodos y funciones
// al crear muchos objetos, c/u contendra datos o propiedades para una particula como sus coordenadas X,Y,Z
// color, tama;o, Estos datos se pueden actualizar para mover las particulas
// de esta manera le decimos al lienzo(canvas1) donde dibujar las particulas 
class Particle {
    //x e y son las coordenadas inicales de las particulas antes de calcular el movimento 
    // las coordenadas se deben pasar como argumentos (x,y) 
    //el constructor sirve para incializar un objeto dentro de una clase
    constructor(x, y){  //argumentos
        this.x = x; // coordenada horizontal / propiedad x esta en un nuevo objeto X
        this.y = y; // coordenada vertical / propiedad y esta en un nuevo objeto y
        this.size = 10; // este sera el tama;o de cada particula or use -> this.size = Math.random() * 15 + 1; 
        this.weight = 2; // este sera el peso inicial de la particula or use -> this.weight = Math.random() *  1 + 1; 
        this.directionX = (Math.random() * 8)- 4 ; // asignamos un movimento hacia la derecha 
        //en este constuctor declaramos y propiedades que se le agregan a la particula 
    }
    // tenemos que limitar las particulas para que estas no esten de forma aleatoria en todo momento
    //  
    update(){ // metodo que permite calcular y actualizar la posicion de la particula
        if(this.y > canvas.height) { 
        this.y=0 - this.size;
        this.weight = 2;
        this.x = Math.random() * canvas.width * 1.5;  //ancho del lienzo
        }
        this.weight += 0.01; //aqui aumentamos el peso de las particulas = a la velocidad
        this.y += this.weight; // aqui asignamos en el eje(y) el aumento del peso, esto luego se combina con una funciton
        this.x += this.directionX;
    }

    draw(){ // metodo que permite asignar la forma geom + su propiedades en el cual vamos a dibujar en el lienzo de JS
        //este es el color del relleno del cual se compondran los circulos en el lienzo de js
        ctx.fillStyle = '#1995AD'; // el color se debe asignar entre las comillas
        ctx.beginPath(); // indica a javascript que dibujaremos en el, + invocar un metodo especial incorporado llamado arc/arco 
        //MATH.PI*2 ES UNA ECUACION RADIAL QUE DA EXACTAMENTE 360 GRADOS
        //Aqui permite orientar a la posicion de: (eje x + eje y + tama;o de la particula + angulo incial + angulo final) para asi dibujar el lienzo
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); //es necesirio conocer los argumentos para poder avisarle a js
        ctx.closePath();
        ctx.fill()  
    }
}
function init(){
    for(let i = 0; i < numberOfParticles; i++){
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle (x,y));
    }
}
init();


// Ahora podemos crear la primera particula ya que tenemos las propiedades del objeto que queremos dibujar con JS mendiante 
//su lienzo predefinido llamado canvas e identificado en la etiqueta html como id="canvas1"
const particle1 = new Particle(1250, 100) // aqui creamos la 1era particula
const particle2 = new Particle(287, 90) // aqui creamos la 2da particula

// Bucle conocido como recurvisidad
//el trabajo de esta funcion es llamar a todo lo que se debe ejecutar para cada fps 
function  animate(){ // aqui creamos el bucle animado
    ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i <particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    
    requestAnimationFrame(animate);
}
animate();
//-NOTA1: ES6 LLAMO CONSTRUCTOR AL METODO QUE UTILIZA UN OBJETO AGREGADO A UNA FUNCION