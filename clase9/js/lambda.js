// funciones sin parámetros
function foo() {
    console.log("función foo");
}
foo();

// funciones anónima
let bar = function() {
    console.log('función bar');
}
bar();

// función Landa o función flecha
let foobar = () =>
                    {
                        console.log('función foobar');
                    }
foobar();

/* funciones con parámetros */
// funciones
function foo2( item ) {
    console.log("función foo2, parámetro: ", item);
}
foo2( 10 );

// funciones anónima
let bar2 = function( item ) {
    console.log('función bar2, parámetro:', item);
}
bar2(20 );

// función Landa o función flecha
let foobar2 = ( item ) =>
                                {
                                    console.log('función foobar2, parámetro:', item);
                                }
foobar2( 30 );

/* nota: si una función flechs toma un ÚNICO parámetro
*   podemos quitar los paréntesis
*  */
let baz =  item  =>
                {
                    console.log('función baz, parámetro:', item);
                }
baz( 40 );

/* cuándo una función flecha retorna un valor */
let qux = function( item )
                            {
                              return item * 2;
                            }
console.log ( qux(5) );
// podemos convertirlo a funcióp flecha
let qux2 =  item  =>
                        {
                            return item * 2;
                        }
console.log ( qux2(15) );

/* si la función flecha retornar un valor
    se puede omitir la palabra return y las llaves */
let qux3 =  item  =>  item * 2;
console.log ( qux3(20) );
