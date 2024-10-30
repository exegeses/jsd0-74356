const selector = document.querySelector('#selector');
const btn = document.querySelector('#btn');
const caja = document.querySelector('#caja');

function pintar( codigoColor )
{
    caja.style.backgroundColor = codigoColor;
}

function obtenerCodigo()
{
    return selector.value;
}

btn.addEventListener(
        'click',
        function()
        {
            // obtener el código de color seleccionado
            let codigoSeleccionado = obtenerCodigo();

            // Pintar el article con el color seleccionado
            pintar( codigoSeleccionado );
        }
);