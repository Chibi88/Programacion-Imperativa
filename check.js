
const {listaEstudiantes, Alumno} = require ("./index");

// Micro desafío - Paso 3


let curso = {
    nombreCurso : "Curso de developer",
    notaAprobacion : 8,
    faltasMax : 2, 
    estudiantes : listaEstudiantes,
    aprobo: function (alumno)
   
};

 console.log(curso);   


/*Micro desafío - Paso 5
Crear un método a curso que reciba un alumno (como parámetro) y retorne true si
aprobó el curso o false si no, para aprobar el alumno tiene que tener un promedio por arriba
de nota de aprobación y tener menos faltas que faltas máximas, si tiene la misma cantidad
tiene que estar 10% arriba de la nota de aprobación.*/


/*Micro desafío - Paso 4
Crear el método que permite agregar alumnos a la lista del curso, es decir, cuando
llamemos a nuestro método en nuestro objeto curso, debería agregarse un alumno más a la
propiedad lista de estudiantes del obj curso.*/

let alumno4 = new Alumno("Budin", 2, [4,3,9]);

agregarAlumno: function(alumno){
        this.listaEstudiantes.push(alumno);
        }

console.log(curso.agregarAlumno())

