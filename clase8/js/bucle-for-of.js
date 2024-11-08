// ubicamos elementos dentro del DOM
const contenedor = document.querySelector('#container');

const marcas = [
    'Hermés','Zara','Boss',
    'Aeropostale','Kingpin','Tomy',
    'Gola','Hollister','Abercrombie',
    'JCrew'
];

// for( let variableAuxiliar  of   array )
for( let unaMarca of marcas ){
    //console.log( unaMarca );
    contenedor.innerHTML += `<li>${unaMarca}</li>`;
}