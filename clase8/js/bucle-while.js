// ubicamos elementos dentro del DOM
const contenedor = document.querySelector('#container');

const marcas = [
    'Hermés','Zara','Boss',
    'Aeropostale','Kingpin','Tomy',
    'Gola','Hollister','Abercrombie',
    'JCrew'
];

let n = 0;
/*while( n < marcas.length ) {
    document.write( marcas[ n ], '<br>' );
    n++;
}*/
while ( n < marcas.length){
    console.log( marcas[ n] );
    contenedor.innerHTML += `<span>${marcas[n]}</span><br>`;
    n++;
}