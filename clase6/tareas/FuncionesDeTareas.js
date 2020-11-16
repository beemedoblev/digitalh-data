const fs = require('fs');
const path = require('path');

function leerTareas() {
    let tareasJSON = fs.readFileSync(path.join(__dirname, '../tareas.json'), 'utf-8');

    return JSON.parse(tareasJSON)
}
let tareas = {
    detalle(indice) {
        let tareas = leerTareas();
        let tarea = tareas[indice];
        console.log(tarea.titulo)
        console.log('-'.repeat(tarea.titulo.length));
        console.log(tarea.descripcion);
    },
    listar() {
        let tareas = leerTareas();
            tareas.forEach(tarea =>
            console.log("Titulo " + tarea.titulo + " - " + " Estado " + tarea.estado));

    },
    listarPendiente(){
        let tareas = leerTareas();
        let tareasPendientes = tareas.filter(function(tarea){
            return tareas.estado == 'pendiente';
        })
        tareasPendientes.forEach(function(tarea){
            console.log("Titulo " + tarea.titulo + " - " + " Estado " + tarea.estado);
        })
    },

    crear(tareasJSON) {
        if(tareasJSON.length>0){
        let tarea = [{
            titulo: tareasJSON[0],
            descripcion: tareasJSON[1],
            estado : 'Pendiente'
        }]
    }
        //leer todas las tareas
        let tareas = leerTareas();
        //agregar la nueva tarea al array
        tareas.push(tarea)
        //guardar el nuevo array
        guardar(tarea);

    },
    guardar(tareas){
        let tareasString = JSON.stringify(tareas);
        fs.writeFileSync(path.join(__dirname, '../tareas.json'), tareasString)
        }
    



}
/*function guardarTareas(tareas) {
    let tareasString = JSON.stringify(tareas);
    fs.writeFileSync(path.join(__dirname, '../tareas.json'), tareasString)
}*/


module.exports = tareas;