const frase = document.querySelector('#frase');

// Función para sumar dos números
function sumar( numero1, numero2 )
{
    return numero1 + numero2;
}

frase.innerText = sumar( 10, 20 );