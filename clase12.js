//ejercicio 1 

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map (function(num){
    return num - 1 ;

});

// ejercicio 2 

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]


let aprobados = estudiantes.filter (function(nota){
    return nota.aprobado == true;
});

let desaprobados = estudiantes.filter (function(nota){
    return nota.aprobado == false;
});

// ejercicio 3

let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce (function (acum,vueltas){
    return acum + vueltas;
    });


// ejercicio 4 

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach ( function (productos){ console.log ("tengo que comprar estyo:" + productos);}
);
