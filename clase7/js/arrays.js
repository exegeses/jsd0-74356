const frase = document.querySelector('#frase');
const marcas = [
                'Hermés','Zara','Boss',
                'Aeropostale','Kingpin','Tomy',
                'Gola','Hollistar','Abercrombie'
               ];
console.log( marcas );

frase.innerText = marcas[3];

const diasSemana = [
                        'Domingo', 'Lunes', 'Martes',
                        'Miércoles', 'Jueves', 'Viernes',
                        'Sábado'
                   ];
const fecha = new Date();
//obtenemos el número de dïa de la semana
let numDiaSemana = fecha.getDay();
console.log('nº dia de la semana: ', numDiaSemana);
/*
    Para mostrar el día de la semana en español 
    podemos utilizar la combinación del array 
    con el número correspondiente al día de la semana
*/
document.write('Hoy es: ', diasSemana[ numDiaSemana ]);