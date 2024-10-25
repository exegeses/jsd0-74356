// Ubicamos elementos dentro del DOM
const btnRB = document.querySelector('#btnRB');
const btnML = document.querySelector('#btnML');
const btnF = document.querySelector('#btnF');
const btnM = document.querySelector('#btnM');
const btnAM = document.querySelector('#btnAM');

const redbull = document.querySelector('#redbull');
const mclaren = document.querySelector('#mclaren');
const ferrari = document.querySelector('#ferrari');
const mercedes = document.querySelector('#mercedes');
const amartin = document.querySelector('#amartin');

/*  estado inicial:
    Ocultar todos menos 1 de los Dips
 */
mclaren.style.display = 'none';
ferrari.style.display = 'none';
mercedes.style.display = 'none';
amartin.style.display = 'none';

/* eventos + acciones */
btnRB.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'flex';
            mclaren.style.display = 'none';
            ferrari.style.display = 'none';
            mercedes.style.display = 'none';
            amartin.style.display = 'none';
        }
);
btnML.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'none';
            mclaren.style.display = 'flex';
            ferrari.style.display = 'none';
            mercedes.style.display = 'none';
            amartin.style.display = 'none';
        }
);
btnF.addEventListener(
    'click',
    function()
    {
        redbull.style.display = 'none';
        mclaren.style.display = 'none';
        ferrari.style.display = 'flex';
        mercedes.style.display = 'none';
        amartin.style.display = 'none';
    }
);
btnM.addEventListener(
    'click',
    function()
    {
        redbull.style.display = 'none';
        mclaren.style.display = 'none';
        ferrari.style.display = 'none';
        mercedes.style.display = 'flex';
        amartin.style.display = 'none';
    }
);
btnAM.addEventListener(
    'click',
    function()
    {
        redbull.style.display = 'none';
        mclaren.style.display = 'none';
        ferrari.style.display = 'none';
        mercedes.style.display = 'none';
        amartin.style.display = 'flex';
    }
);