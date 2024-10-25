// ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');
const h1 = document.querySelector('h1');

let intervalo = '';


// Declaramos funciones de control
function control()
{
    // Creamos objetos de fecha
    const ahora = new Date();
    const final = new Date(2024, 11, 25);
    //const final = new Date(2024, 9, 24, 23, 13);

    // Diferencia entre momentos de fecha
    let diferencia = final - ahora;
    console.log('diferencia: ', diferencia);
    /*
    El resultado de la diferencia es un número expresado en Unix Timestamp
    El tiempo expresado en milisegundos desde el 01/011970
     */
    // obtenemos el tiempo expresado en segundos y quitamos decimales
    let segundos = parseInt( diferencia/1000 );
    console.log('segundos:', segundos);

    // obtenemos el tiempo expresado en minutos y quitamos decimales
    let minutos = parseInt(segundos/60);
    console.log('minutos:', minutos);

    // obtenemos el tiempo expresado en horas y quitamos decimales
    let horas = parseInt(minutos/60);
    console.log('horas:', horas);

    // obtenemos el tiempo expresado en dias y quitamos decimales
    let dias = parseInt(horas/24);
    console.log('dias:', dias);

    /* Calculamos el resto de horas, minutos y segundos */
    horas = horas%24; //console.log('horas:', horas);
    minutos = minutos%60; //console.log('minutos:', minutos);
    segundos = segundos%60; //console.log('segundos:', segundos);

/*######## detenemos cuenta regresiva */
    if( 
        segundos <= 0 &&
        minutos <= 0 &&
        horas <= 0 &&
        dias <= 0
      ){
            clearInterval( intervalo );
            dias = 0;
            horas = 0;
            minutos = 0;
            segundos = 0;
            h1.innerText = '¡Oferta finalizada!';
    }

    // agregamos ceros iniciales
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    if( horas < 10 ){
        horas = '0'+ horas;
    }
    if( dias < 10 ){
        dias = '0'+ dias;
    }

    // Escribimos en cada uno de los span
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

// invocamos función control()
control();

intervalo = setInterval( control, 1000 );