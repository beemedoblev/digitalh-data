//objeto date();
let fechaActual = new Date();

//console.log(fechaActual.toUTCString());

// con el metodo utcString nos lo da un poco mas legible
//pero queremos que sea un poco mas legible que con utc
 //getFullYear();
//esto nos da el year actual.
//console.log(fechaActual.getFullYear());

//getMonth()
//para el mes
//enero = 0 y me va a devolver siempre un mes menos que el real
//console.log(fechaActual.getMonth());

//getday()
//para el dia
// tambien nos da domingo = 0 es decir el dia real menos 1
//console.log(fechaActual.getDay());

//getdate()
//para el dia del mes
//nos devuelve el dia del mes ejemplo 20 de septiembre
//console.log(fechaActual.getDate());

//fecha mas legible abajo utilizando la instancia fecha actual

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let diaDelMes= fechaActual.getDate();

let meses= ["enero","febrero","marzo","mayo","abril","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

console.log("hoy es el "+diaDelMes +" de "+meses[mes] + " de "+ anio);