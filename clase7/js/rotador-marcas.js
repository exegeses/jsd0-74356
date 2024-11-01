const contenedor = document.querySelector('#contenedor');
const botones = document.querySelectorAll('#contenedor img')
const span = document.querySelector('#contenedor span');
console.log(botones);

const marcas = [
    'Hermés','Zara','Boss',
    'Aeropostale','Kingpin','Tomy',
    'Gola','Hollister','Abercrombie',
    'JCrew'
   ];

// #### Estado inicial
let llave = 6;   
// Mostrar una de las marcas dentro del span
span.innerText = marcas[ llave ];

botones[1].addEventListener(
            'click',
            () => 
            {
                llave++;
                if( llave == marcas.length ){
                    llave = 0;
                }
                span.innerText = marcas[ llave ];
            }
);
botones[0].addEventListener(
            'click',
            () =>
            {
                llave--;
                if( llave < 0 ){
                    llave = marcas.length - 1;
                }
                span.innerText = marcas[ llave ];
            }
);