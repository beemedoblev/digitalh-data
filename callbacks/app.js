/*let unObjeto = {
    titulo : 'un titulo',
    desc: 'una descrip',
    temas: ['programacion','metodologias','habilidades blandas'
]
}
let temas = unObjeto.temas[2];
*/

 
let escribirEnConsola = function(){
    console.log('estamos ejecutando un callback');
}

let ejecutarCallback = function (unaFuncion){
    unaFuncion()
}

ejecutarCallback(escribirEnConsola);


let array = ['asldakdasd','zarasa',"pepito","etc adksjasd kajsdkajd"];

let arrayEnMayusculas = array.map(elemento=> elemento.toUpperCase());


//metodos Array

let arrayMuchasPAlabras = array.filter(
    function(elemento){
        return elemento.split(' ').length < 1;
    }
);

let cantidadDeLetras = array.reduce(
    function(total,elemento){
        return total + elemento.length
    },0
)

console.log(arrayEnMayusculas);
console.log(arrayMuchasPAlabras);
console.log('Cantidad De Letras: '+ cantidadDeLetras);