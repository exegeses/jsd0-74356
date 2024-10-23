// Ubicar elementos dentro del DOM
const caja = document.querySelector('#caja');


//declaramos funciones
function cajaAzul()
{
    caja.style.backgroundColor = 'hsl(220, 50%,50%)';
    caja.style.rotate = '30deg';
    caja.innerText = 'azul';
}
function cajaRoja()
{
    caja.style.backgroundColor = 'hsl(0, 60%,50%)';
    caja.style.rotate = '-20deg';
    caja.innerText = 'rojo';
}
function cajaVerde()
{
    caja.style.backgroundColor = 'hsl(120, 60%, 40%)';
    caja.style.rotate = '25deg';
    caja.innerText = 'verde';
}
