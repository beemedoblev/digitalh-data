// Consumir el archivo de tareas.json
// 1. Requerir el módulo de FS
// 2. Utilizar el método .....sync para leer archivo
// 3. Utilizar el método JSON..... para convertirlo a un tipo de datos de JS.
// 4. Imprimir en consola el resultado.

const {
    crear
} = require("./tareas/FuncionesDeTareas");
const tareas = require("./tareas/FuncionesDeTareas");

let accion = process.argv[2]//primer parametro ingresado en la terminal
let parametro = process.argv.slice[3];



console.log(accion)


switch (accion) {
    //agrupo casos en caso de que no pasen parametros o me pasen l
    case undefined:
    case 'l':
    case 'listar':
        tareas.listar();
        break;
    case 'listarPendientes':
        tareas.listarPendiente();
        break;
    case 'detalle':
        tareas.detalle(parametro)
        break;
    case 'crear':
         //leer todas las tareas
         let tareas = leerTareas();
         //agregar la nueva tarea al array
         tareas.push(tarea)
         //guardar el nuevo array
         guardar(tarea);
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