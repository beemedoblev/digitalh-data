//metodo map();

let notas =[10,4,5,8,9,2,7];

let notasHastaEl100 = notas.map(function(numero){
    return numero * 10;
});

//console.log(notasHastaEl100);
//------------------------------------------------

//metodo filte():

let notasAprobadas = notas.filter(function(numero){
    return numero >= 7;
});

//console.log(notasAprobadas);

//------------------------------------------------
// metodo reduce();

let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero
});

//console.log(sumaNotas);
//------------------------------------------------
//metodo foreach();

notas.forEach(function(valor,indice){
    console.log("en la posicion "+ indice+ " tengo el valor "+valor);
});