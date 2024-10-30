/* 
    Al pulsar el botón vamos a generar un número aleatorio entre 0 y 10
    - a ese número aleatorio lo vamos a mostrar dentro del span
*/

function generarNumero()
{
    // random() genera un número aleatorio entre 0 ~ 1
    let numeroAleatorio = Math.random();
    let numeroMultiplicado = numeroAleatorio * 10;
    let numero = Math.round(numeroMultiplicado);
    return numero;
}

//console.log( generarNumero() );
const btn = document.querySelector('#btn');
const frase = document.querySelector('#frase');

btn.addEventListener(
        'click',
        function()
        {
            frase.innerText = generarNumero();
        }
);