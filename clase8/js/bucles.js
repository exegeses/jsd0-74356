
// bucle while
document.write('<h2>Bucle while()</h2>');
let n = 1;
while( n < 10 ){
    // bloque de código a iterar
    document.write( n );
    n++;
}

// bucle do ... while()
document.write('<h2>Bucle do ... while()</h2>');
n = 1; // reseteamos el valor de la variable "n"
do{
    document.write('código dentro de bucle');
    n++;
}while( n > 10 )

// bucle for()
document.write('<h2>Bucle for()</h2>');
//for( inicio; condicion; increment )
for( let n = 1; n < 10; n++ ){
    // bloque de código a iterar
    document.write( n );
}

/*
* otras estructuras de repetición son
* for( .. in )
* forEach(  )
* for( .. of )
* ---
* map()
* */