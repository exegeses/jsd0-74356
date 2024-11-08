// ubicamos elementos dentro del DOM
const contenedor = document.querySelector('#container');

const capitales = {
    'Argentina':'Buenos Aires',
    'Brasil':'Brasilia',
    'Chile':'Santiago',
    'Venezuela':'Caracas',
    'Uruguay':'Montevideo',
    'Paraguay':'Asunción',
    'Perú': 'Lima'
}

//for( let variableAuxiliar  in  array )
for( let pais in capitales ) {
    contenedor.innerHTML += `<li>${pais}: ${capitales[pais]}</li>`
}