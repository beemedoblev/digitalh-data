let cursos = ['Programacion','MKT','UX','Data Science','Python']

//destructuracion array

let [programacion,mkt] = cursos;

//console.log(cursos);
//console.log(programacion);
//console.log(mkt);


//desctructuracion objeto

let persona = {
    nombre: "Carli",
    edad: 24,
    domicilio: "Congreso 1661 6A"
}
let {nombre, edad} = persona

console.log(persona);
console.log(nombre);
console.log(edad);