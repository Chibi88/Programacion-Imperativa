const fs = require ("fs");

let bicicletasJson = fs.readFileSync("./bicicletas.JSON", "utf-8")

let bicicletasParseadas = JSON.parse(bicicletasJson)

//2

let carrera = {
        bicicletas: bicicletasParseadas,
        
        bicisPorTanda : 6,

        bicicletasHabilitadas : function () {
            return this.bicicletas.filter (bicicleta => bicicleta.doppingPositivo === false)
        },

        listarBicicletas : function (arrayBicicletas){
            arrayBicicletas.forEach( bicicleta => {
                console.log (" id: "+ bicicleta.id + " rodado: " + bicicleta.rodado 
                            + " peso en kg: " + bicicleta.pesoEnKg + 
                            [bicicleta.doppingPositivo? " descalificado " : " habilitado "]);

            });
                
            },

        buscarPorCiclista : function (ciclista){
            return this.bicicletas.find (bicicleta => bicicleta.ciclista === ciclista);
        },

        buscarPorLargo : function (largoEnCm){
            let bicicletasHabilitadasLargo = this.bicicletasHabilitadas ();
            return bicicletasHabilitadasLargo.filter (bicicleta => bicicleta.largoEnCm <= largoEnCm)
        },

        ordenarPorPeso : function () {
            return this.bicicletas.sort ((a,b) => a.pesoEnKg - b.pesoEnKg);
        },

        generarTanda : function (rodado, pesoEnKg) {
            let bicicletasHabilitadasTanda = this.bicicletasHabilitadas ();
            let biciFiltrada = bicicletasHabilitadasTanda.filter ( bicicleta => bicicleta.rodado <= rodado && bicicleta.pesoEnKg <= pesoEnKg);
            return biciFiltrada.slice (0,this.bicisPorTanda)
        },

        calcularPodio : function (tandaGenerada){
            let bicisPodio = this.bicicletas.sort ((a,b) => b.puntaje - a.puntaje ).slice(0,3);
            console.log ("“El ganador es:" + bicisPodio[0].ciclista+ " con un puntaje de: "
                            + bicisPodio[0].puntaje + " el segundo puesto es para: " + bicisPodio[1].ciclista 
                            + " con un puntaje de : " + bicisPodio[1].puntaje
                            + " y el tercer puesto es para:" + bicisPodio[2].ciclista + " con un puntaje de: "
                            + bicisPodio[2].puntaje)
            
        },
}

console.log (carrera.calcularPodio(bicicletasParseadas))