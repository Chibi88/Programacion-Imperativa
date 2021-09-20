let array1 = [23,82,46];
let array2 = [45,8,32];

puntosAlicia = 0;
puntosBob = 0;

function encontrarGanador (array1, array2) {

      for (let i=0; i<array.length; i++){
          if(array1[i]>array2[i]) {
              puntosAlicia = puntosAlicia + 1;
              } else {
            puntosBob = puntosBob + 1 ;
              }
      } 
      if (puntosAlicia>puntosBob){
          console.log ("Alicia es la ganadora");
      }else{ 
          console.log ("Bob es el ganador");

      }
}; 

console.log(encontrarGanador(array1, array2))