/*
    Mostrar la fecha actual
    formato:  17/10/2024     
*/
// Ubicar elementos dentro del DOM
const cita = document.querySelector('#cita');

// Creamos un objeto de fecha
//const fecha = new Date(2024, 7, 7);
const fecha = new Date();
console.log(fecha);

// obtenemos el número de día de mes
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    diaMes = '0' + diaMes;
}
console.log('dia:', diaMes);

// Obtenemos el número de mes actual
let mes = fecha.getMonth() + 1;
if( mes < 10 ){
    mes = '0' + mes;
}
console.log('mes:', mes);

// obtenemos el número de año actual
let anio = fecha.getFullYear();
console.log('añio:', anio);

// escribimos dentro del spam con el id='cita'
    // concatenación
//cita.innerText = diaMes + '/' + mes + '/' + anio;

    // interpolación
cita.innerText = `${diaMes}/${mes}/${anio}`;