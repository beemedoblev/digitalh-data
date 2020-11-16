

function leerTareas(){
    let tareasJSON = fs.readFileSync(path.join(__dirname ,'./tareas.json'), 'utf-8');
    return JSON.parse(tareasJSON)
    

}
