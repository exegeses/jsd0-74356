/*
    Crear un reloj digital
    formato:  hh:mm:ss  i.e.: 23:14:40
*/
// ubicamos elementos dentro del DOM
const cita = document.querySelector('#cita');

// Declaramos funciones de control
function mostrarReloj()
{
    // creamos un objeto de fecha
    const fecha = new Date();

    // Obtenemos el número correspondiente a las horas
    let horas = fecha.getHours();
    if( horas < 10 ){
        horas = '0' + horas;
    }
    console.log('horas:', horas);

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0' + minutos;
    }
    console.log('minutos:', minutos);

    // Obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0' + segundos;
    }
    console.log('segundos:', segundos);

    // Escribimos en el span con él id="cita"
    // cita.innerText = horas + ':' + minutos + ':' + segundos;
    cita.innerText = `${horas}:${minutos}:${segundos}`;
}

// Llamamos a la función mostrarReloj()
mostrarReloj();

// actualizamos el llamado a la función
setInterval( mostrarReloj, 1000 );