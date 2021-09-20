//aca declaro las variables

const nombre1 = "Nicolas" ; 
const apellido1 = "Lopez" ; 
var edad1 = 27;
var peso1 = 83.5;
var altura1 = 1.70; 
const prepaga = true;

let imc1= peso1/(altura1*altura1);

//console.log ( nombre1 + " " + apellido1 +  " tiene " + edad1 + " de edad y su indice de masa corporal es de " + imc1);


function calcularIMC (peso1,altura1){
    return peso1/(altura1*altura1);
}


//console.log ()

//objeto literal

let paciente = {
    nombre : "Nicolas",
    apellido : "Lopez",
    edad : 27,
    peso : 83.5,
    altura : 1.70,
    prepaga : true,
    imc: function calcularIMC (){
        return this.peso/(this.altura*this.altura);
    }

} ;



//console.log(paciente.imc())

//funcion constructora 

function NuevoPaciente (nombre, apellido, edad, peso, altura, prepaga){
    this.nombre = nombre; 
    this.apellido = apellido; 
    this.edad = edad; 
    this.peso = peso;
    this.altura = altura;
    this.prepaga = prepaga;
    this.imc = function calcularIMC (){    
        return this.peso/(this.altura*this.altura);
    }
};

let paciente2 = new NuevoPaciente ("Esteban", "Piazza", 28, 80.1, 1.76, true);
let paciente3 = new NuevoPaciente ("Jose", "Fermoso", 33, 63.7, 1.53, false);
let paciente4 = new NuevoPaciente ("Juana", "Fernandez", 26, 55, 1.62, true);

console.log(paciente2.imc())
//console.log(paciente3.imc())
//console.log(paciente4)

//Calcular IMC 
