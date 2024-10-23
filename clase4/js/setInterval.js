document.querySelector('#cita');

let numero = 0;
let intervalo = '';


function incrementar()
{
    numero++;
    cita.innerText = numero;
    if( numero == 30 ){
        cita.innerText = 'tiempo cumplido';
        clearInterval( intervalo );
    }
}

incrementar();

intervalo = setInterval( incrementar, 500 );