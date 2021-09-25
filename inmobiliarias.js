// 1.

//utilizando el modulo fs, leo el json

const fs = require('fs');
let departamentosJSON = fs.readFileSync('./departamentos.json', 'utf8')

//console.log (departamentosJSON)

//parseo el string del json a un array de objetos

let deptos = JSON.parse(departamentosJSON)

//console.log (deptos)

// 2. 

 let inmobiliaria = {
    departamentos: deptos,
    departamentosDisponibles: deptos.filter (departamento => departamento.disponible === true),
    listarDepartamentos: function(departamentosParaImprimir){
        this.departamentos.forEach(departamento => {
            console.log("ID: " + departamento.id + " Precio: " 
                               + departamento.precioAlquiler 
                               + " Disponible: " + departamento.disponible);
        });
    },
    buscarPorId: function (id) {
        return this.departamentos.find(departamento => departamento.id === id);
    },

    buscarPorPrecio: function (precio) {
        let departamentosDisponibles = this.departamentosDisponibles();
        let departamentosResultante = departamentosDisponibles.filter(departamento => departamento.precioAlquiler <= precio);
        return departamentosResultante;
    },
    ordenarPorPrecio: function (){
        return this.departamentos.sort ((a,b) => a.precioAlquiler - b.precioAlquiler);
    },
        
}
 

/* 

Agregar un método buscarPorId que permita buscar él departamento en función de su identificador.
Este método debe devolver un departamento en caso de encontrar el identificador.


*/




console.log (inmobiliaria.listarDepartamentos())