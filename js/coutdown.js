// para obtener el formato de la fecha aplicar en console newDate ();
// crear una funcion para obtener el tiempo que falta
const getTimeRest = deadline =>{ // parametro (con tipo de dato STRING) que recibe la fecha limite
    // agregar parametro con string y formato de js
    let now = new Date(), // date -> devuelve la fecha en la que nos encontramos -> probar en cosola
        // aca asignamos una variable a NewDate para luego retornar la fecha de finalizacion asignada
        timeRest = (new Date(deadline) - now + 1000) / 1000, // new date ('deadline')es el timepo que falta para la fecha limite // '(.... - now + 1000) / 1000 es calcular los milisegudos y agregar esos milisegundos al contador para que este no este defasado por 1 seg
        // aca tenemos milisegundos a segundos
        timeSeconds = ('0' + Math.floor(timeRest % 60)).slice(-2), // truco: concatener un 0 como string / math.floor rendondeamos el numero / use metodo slice: este metodo hace que saca los fragmentos desde atras entonces esta operacion toma 2 digitos timeRest + 0(string) agregado anteriormente para que este slice se quede con estos datos y asi transformar los milisegundos en segundos
        // aca tenemos los milisegundos a minutos
        timeMinutes = ('0' + Math.floor(timeRest / 60 % 60)).slice(-2), // se divide en 60 por que 1 minuto tiene 60 segundos
        // aca tenemos los milisegunfos a horas
        timeHours = ('0' + Math.floor(timeRest / 3600 % 24)).slice(-2),
        // aca tenemos los milisegunfos a dias
        timeDays = Math.floor(timeRest / (3600 * 24));
        
        //falta retornar estos objetos creados. 
        return{
            timeRest,
            timeSeconds,
            timeMinutes,
            timeHours,
            timeDays

            // antes de avanzar probar en consola estos objetos creados.
        }
    };
    console.log(getTimeRest('Mon Aug 23 2021 01:52:49 GMT-0400'));

    const countdown = (deadline, elem, finalMessage) => {
        const ele = document.getElementById(elem) ;
        const updateTime = setInterval (() => {
            let time = getTimeRest(deadline);
            ele.innerHTML = `${time.timeDays}d:${time.timeHours}h:${time.timeSeconds}s`;
            if (time.timeRest <=1) {
                clearInterval(updateTime);
                elem.innerHTML = finalMessage;
            }
        }, 1000)
    };

    countdown('Mon Aug 30 2021 21:30:00 GMT-0400', 'clock', 'Actualiza el portafolio hoy');






// NOTA1: LAS COMPUTADORAS USAN LOS MILISEGUNDOS COMO BASE EN EL FORMATO TIEMPO
// NOTA2: 1 HORA TIENE 3600 SEGUNDOS
// NOTA3: 1 SEG TIENE 1000 MILISEGUNDOS
