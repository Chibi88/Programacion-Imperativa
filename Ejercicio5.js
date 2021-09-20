/* crear la funcion hacerGol que incremente la cantidad de goles del jugador en uno e imprima por 
pantalla “GOL!!!!!!!!!”. 
Además, deberá incrementar el valor del jugador en 10.000 dólares. 
A continuación, pruebe ejecutar varias veces la función e imprimir 
por pantalla la nueva cantidad de goles del jugador y el 
precio del jugador en el mercado.*/

let nombreJugador = "Pepe";
let golesJugador = 1; 
let precioEnDolares = 1000; 

function hacerGol() {
    golesJugador ++;
    precioEnDolares = precioEnDolares + 10000;
    console.log("Gol!!!!!! el total de goles anotados por " + nombreJugador + " es de: " + golesJugador + ", ahora el precio del jugador en dólares es de: " + precioEnDolares)
};

console.log(hacerGol());
console.log(hacerGol());

