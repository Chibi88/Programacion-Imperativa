// 1.


const fs = require('fs');
let autosJSON = fs.readFileSync('./AUTOS.json', 'utf8')

let autosParseados = JSON.parse(autosJSON)

//2.

let carrera = {
    autos: autosParseados,

    autosPorTanda: 5,

    autosHabilitados:function (){  
     return this.autos.filter (autoHabilitado => autoHabilitado.sancionado === false)},

    listarAutos: function (arrayDeAutos){
        arrayDeAutos.forEach(auto => {
            console.log("Piloto: " + auto.piloto + ", patente: " 
                                + auto.patente + ", peso en Kg: "  + auto.peso 
                                + [auto.sancionado? " Sancionado":" Puede correr"]);
        });
        },

    buscarPorPiloto: function (piloto) {
        return this.autos.find (auto => auto.piloto === piloto);
    },
    buscarPorAceleracion: function (aceleracion) {
        let autosHabilitadosAceleracion = this.autosHabilitados ();
        return autosHabilitadosAceleracion.filter (auto => auto.aceleracion >= aceleracion);
        
    },
    ordenarPorAngulo: function () {
        return this.autos.sort( (a, b) => a.anguloDeGiro - b.anguloDeGiro);
      },

    generarTanda: function (cilindrada, peso) { 
        let tandaHabilitada = this.autosHabilitados ();
        let autoTanda = tandaHabilitada.filter (auto => auto.cilindrada <= cilindrada && auto.peso <= peso)
        return autoTanda.slice(0, this.autosPorTanda)},

    calcularPodio: function (tandaGenerada) {
    let tanda = tandaGenerada.sort((a, b) => b.puntaje - a.puntaje).slice(0, 3)
    console.log ("El ganador es: " + tanda[0].piloto + "con un puntaje de: " + tanda[0].puntaje + 
    " el segundo puesto es para: " + tanda[1].piloto + "con un puntaje de: " + tanda[1].puntaje + 
    " y el tercer puesto es para: " + tanda[2].piloto + "con un puntaje de: " + tanda[2].puntaje);


}}


