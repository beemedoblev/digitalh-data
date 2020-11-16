// Consumir el archivo de tareas.json
// 1. Requerir el módulo de FS
// 2. Utilizar el método .....sync para leer archivo

// 3. Utilizar el método JSON..... para convertirlo a un tipo de datos de JS.
// 4. Imprimir en consola el resultado.


const fs = require('fs');
const path = require('path');
const tareas = require("./funcionesDeTareas");

//let tareasJSON = fs.readFileSync(path.join(__dirname ,'./tareas.json'), 'utf-8');
//const tareas = require("./tareas.json");

//let tareas = JSON.parse(tareasJSON)






let accion = process.argv[2]

console.log(accion)
leerTareas();

switch (accion) {
    case 'listar':
        console.log(leerTareas());
    break;

    case undefined:
        console.log("oiga que accion quiere realizar?")
        break;

    default:
        console.log();
        console.log('¡Oiga! No entiendo esa acción...');
        console.log();
        console.log('Las acciones disponibles son:');
        console.log();
        console.log('- listar');
        console.log();
        break;
}
