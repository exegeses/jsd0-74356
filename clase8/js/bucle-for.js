// ubicamos elementos dentro del DOM
const contenedor = document.querySelector('#container');

const marcas = [
    'Hermés','Zara','Boss',
    'Aeropostale','Kingpin','Tomy',
    'Gola','Hollister','Abercrombie',
    'JCrew'
];

for( let n = 0; n < marcas.length; n++ ){
    //document.write( marcas[n] + '<br>');
    contenedor.innerHTML += `<span>${marcas[n]}</span><br>`;
}