/*
    Hacer una pregunta al usuario
    - El usuario va a responder
    - Almacenamos esa respuesta en memoria
*/
let respuesta = prompt('¿qué seleccionado ganó la copa del mundo Qatar 2022?');

//condicional 
if( respuesta.toLowerCase() == 'argentina' ){
    // Bloque de código a ejecutar si la condición es true
    cita.innerText = '¡Correcto!';
}
else{
    // bloque de código a ejecutar si la condición es false
    cita.innerText = '¡Incorrecto!';
}