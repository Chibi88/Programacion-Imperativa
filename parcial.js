function AutoNuevo (marca, modelo, color, anio, km, precio, cuotas, patente, vendido){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.km = km;
    this.precio = precio;
    this.cuotas = cuotas;
    this.patente = patente;
    this.vendido = vendido;
    };

let auto1 = new AutoNuevo ("Ford" , "Fiesta", "Azul", 2019, 200, 150000, 12, "APL123",  false);
let auto2 = new AutoNuevo ("Toyota" , "Corolla", "Blanco", 2019, 0, 100000, 14, "JJK116",  false);

let autos = [auto1, auto2]

console.log (autos)


const concesionaria = { 
    autos: autos,
    buscarAuto: function(patente) {
      for (let i = 0; i<autos.length; i++) {
          if (autos[i].patente == patente) {
              return autos[i];
          }
      }
      return null;
      },
      };
  

console.log(consecionaria)



const autos = require("./autos") ;

let concesionaria = { 
    autos: autos,
    buscarAuto: function(patente) {
      for (let i = 0; i<autos.length; i++) {
          if (autos[i].patente == patente) {
              return autos[i];
          }
      }
      return null;
      },
      venderAuto: function(patente) {
       this.buscarAuto(patente).vendido = true;
    },
   autosParaLaVenta: function(patente) {
        let autosDisponibles = [];
        for (let i = 0; i < autos.length; i++) {
            if (autos[i].vendido == false) {
                autosDisponibles.push(autos[i]);
                //    return autos[i]
            }
        }
        return autosDisponibles;
    },
};


//ej metodos 

 let autos 
autosParaLaVenta: function(patente) {
    let autosDisponibles = [];
    for (let i = 0; i < autos.length; i++) {
        if (autos[i].vendido == false) {
            autosDisponibles.push(autos[i]);
            //    return autos[i]
        }
    }
    return autosDisponibles;
},