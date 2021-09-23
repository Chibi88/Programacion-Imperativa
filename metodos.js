// Crear una función que reciba un array compuesto por números, y retorne un nuevo
// array con todos los valores divididos por la suma de todos los del array —usar map y reduce()

let numeros = [1,2,3,4,5,6,7,8,9];

let sumaNumeros = numeros.reduce (function (acum, numeros){
            return acum + numeros;
            });

//console.log(sumaNumeros);

let numerosDivididos = numeros.map (function (numeros){
    return numeros / sumaNumeros;
});

//console.log(numerosDivididos);

/*Crear una función que reciba un array de palabras y un número, y que retorne un array
con solo las palabras que tengan más que esa cantidad de letras —revisá cómo
funciona el método filter()—.*/

let cosas = ["hola", "pendorcho", "ss", "silvina"];

function filtradorDeArrays(cosas, numero) {
    let resultado = cosas.filter( palabra => palabra.length > numero )
    return resultado
}
 
console.log(filtradorDeArrays(cosas, 5));



