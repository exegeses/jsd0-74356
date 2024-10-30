// Mostrar mensaje en la Consola del navegador
console.log('mensaje a imprimir en Consola');

// función saludar()
function saludar( nombre )
{
    console.log('Hola ', nombre);
}

saludar('Rick');
saludar('Morty');

/* Ubicamos elemento dentro del DOM */
const caja = document.querySelector('#caja');

function pintar( codigoColor )
{
    caja.style.backgroundColor = codigoColor;
}
