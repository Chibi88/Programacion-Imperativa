/*Micro desafío - Paso 1
Creemos un objeto alumno que tiene como atributos, nombre (string) cantidad de
faltas (number) y notas (array numeros), crearle un constructor e importar esto como el
módulo alumno*/

let alumno = {
    nombre: "Leandro",
    cantFaltas: 3,
    notas: [10,5,6],
    }
    

function Alumno (nombre, cantidadFaltas, notas){
    this.nombre = nombre;
    this.cantidadFaltas = cantidadFaltas;
    this.notas = notas;
    this.promedio = function calcularPromedio () {
        let suma = 0
        for (let i=0; i<this.notas.length; i++){
        suma = suma + this.notas[i]
        }
    this.promedio = suma/this.notas.length;
    return this.promedio;
    };
    this.faltar = ++this.cantidadFaltas;
    
}

let alumno1 = new Alumno ("Silvina", 4, [7,8,7]);
let alumno2 = new Alumno ("Lautaro", 2, [5,10,10]);
let alumno3 = new Alumno ("Felipe", 0, [10,8,9]);

alumno1.faltar()

/*console.log (alumno1);
console.log (alumno2.promedio());
console.log (alumno3.promedio());
/*Micro desafío - Paso 2
Nuestro objeto alumno va a tener el método calcular promedio que retorne el
promedio de sus notas, también va a tener un método que se llame faltar que simplemente
incrementa la cantidad de faltas por 1.*/

let listaEstudiantes = [alumno1, alumno2, alumno3]

//console.log(listaEstudiantes)

module.exports = {listaEstudiantes, alumno, Alumno};