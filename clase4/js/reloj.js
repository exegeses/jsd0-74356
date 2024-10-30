/*
    Crear un reloj digital
    formato:  hh:mm:ss  i.e.: 23:14:40
*/
// ubicamos elementos dentro del DOM
const cita = document.querySelector('#cita');

function agregarCero(numero)
{
    if( numero < 10 ){
        numero = '0' + numero;
    }
    return numero;
}


// Declaramos funciones de control
function mostrarReloj()
{
    // creamos un objeto de fecha
    const fecha = new Date();

    // Obtenemos el número correspondiente a las horas
    let horas = fecha.getHours();
    horas = agregarCero( horas );

    console.log('horas:', horas);

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes();
    minutos = agregarCero( minutos );

    console.log('minutos:', minutos);

    // Obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds();
    segundos = agregarCero( segundos );

    console.log('segundos:', segundos);

    // Escribimos en el span con él id="cita"
    // cita.innerText = horas + ':' + minutos + ':' + segundos;
    cita.innerText = `${horas}:${minutos}:${segundos}`;
}

// Llamamos a la función mostrarReloj()
mostrarReloj();

// actualizamos el llamado a la función
setInterval( mostrarReloj, 1000 );