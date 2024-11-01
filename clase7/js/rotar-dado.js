const caja = document.querySelector('#caja');
const boton = document.querySelector('#boton');
/*
    - Obtener un número aleatorio entre uno y seis (sin decimales)
    - Mostrar una imagen ( cara de dato ) según ese número obtenido
    - Reproducir el audio
*/
function getNumero()
{
    let numeroRandom = Math.random();
    let numero = Math.round( numeroRandom * 5 + 1 );
    return numero;
}
function playAudio()
{
    const audio = new Audio('audio/dice.mp3');
    audio.play();
}

boton.addEventListener(
        'click',
        () =>
        {
            let numero = getNumero();
            console.log( numero );
            playAudio()
            setTimeout(() => {
                caja.innerHTML = `<img src="red/dice-${numero}.png">`;
              }, 500);
        }
);
