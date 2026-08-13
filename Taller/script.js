// ejercicio n°1 


// let colores = [  'blanco', 'negro', 'gris', 'azul', 'dorado',]

//     console.log( colores[colores.length - 1] )
//  console.log (  ' primer color ' +  colores[0])
 

//ejercicio n°2

// const numeros = [ 96, 45, 59, 5, 66, 99]

// } console.log( `el array tiene este numero de elementos ` + numeros.length)


// ejercicio n°3


// for (let i = 1; i <= 20 ; i++) {git
//  if ( i % 2 === 0){

//     console.log(i)
//  }
// }

// ejercicio n°4

// let numeros = [ 0, 45, 59, 55555, 66, 99,1000,];
// let numeroMayor = 0;

// for (let i = 0; i < numeros.length; i++) {
 
// if( numeros[i] > numeroMayor ){

//     numeroMayor = numeros[i];

// }
// }
//     console.log('este es el numero mayor ' + numeroMayor)

//ejercicio n°5

// let productos = [
// { nombre: "pantalla", precio: 15 },
// { nombre: "grafica", precio: 15 },
// { nombre: "memoriaRam", precio: 20},
// ];


// let precioTotal = 0;


//       for (let i = 0; i < productos.length; i++) {

//     precioTotal = precioTotal + productos[i].precio;

// }
//      console.log( 'el precio total de la compra es precioTotal ' + precioTotal)
    




// ejercicio n°6 

// const estudiantes =[
// {
//     nombre: 'Ana', 
//     nota: 4.5
// },
// {
//     nombre: 'Laura',
//     nota: 3.5
// }, 
// {
//     nombre: 'carlos',
//     nota:  1.5
// },
// {
//     nombre: 'pedro',
//     nota: 2.9
// },
// {
//     nombre: 'daniela',
//     nota: 5,
    
// }
// ]

// for (let i = 0; i < estudiantes.length; i++) {

//     if (estudiantes[i].nota >= 3){

//          let aprobado = estudiantes[i].nombre

//         console.log( 'estos son los estudiantes aprobados ' + aprobado + ' y la nota con que pasaron es:  ' + estudiantes[i].nota)
//     }

// }


// ejercicio n°7


// const ejercicios = [
// { nombre: "Sentadilla", peso: 80 },
// { nombre: "Press banca", peso: 60 },
// { nombre: "Peso muerto", peso: 120 },
// { nombre: "Dominadas lastradas", peso: 25 }
// ];
// let maximoPeso = 0;
// let ejercicioMasPesado = "";

// for (let i = 0; i < ejercicios.length; i++) {

//     if(ejercicios[i].peso > maximoPeso ){

//         maximoPeso = ejercicios[i].peso
//         ejercicioMasPesado = ejercicios[i].nombre
        
//     }
    
// }console.log( ' este es el peso mas alto ' + maximoPeso + ' y el nombre del ejercicio es ' + ejercicioMasPesado)


// ejercicio n°8


// const boxeadores = [
//     { nombre: "Floyd Mayweather", victorias: 50, derrotas: 0, kos: 27 },
//     { nombre: "Mike Tyson", victorias: 50, derrotas: 6, kos: 44 },
//     { nombre: "Muhammad Ali", victorias: 56, derrotas: 5, kos: 37 },
//     { nombre: "Gennadiy Golovkin", victorias: 42, derrotas: 2, kos: 37 }
// ];

// let victo = 0;
// let KOs = 0;
 
//     console.log( "estadistica de boxeadores")

// for (let i = 0; i < boxeadores.length; i++) {

//     let peleasTotales = boxeadores[i].victorias + boxeadores[i].derrotas;
//     let victorias = boxeadores[i].victorias / peleasTotales * 100;
//     let ko =  boxeadores[i].kos / peleasTotales * 100;
//     console.log (  boxeadores[i].nombre + '\n' + 'peleas: '  + peleasTotales )
//     console.log( '% de victorias ' + victorias.toFixed(1) + '%')
//     console.log( '% de Ko ' + ko.toFixed(1) + '%')

// }


// console.log(' === resumen ===')

// let nombre = '';

// for (let i = 0; i < boxeadores.length; i++) {


// if( boxeadores[i].victorias > victo ){

//         victo = boxeadores[i].victorias
        
//         nombre = boxeadores[i].nombre

//     }else if( boxeadores[i].kos > KOs ){

//         KOs = boxeadores[i].kos
//          console.log(  'peleador con mas Ko: ' + boxeadores[i].nombre + ' '+ KOs)

//     }
// }  console.log( 'peleador con mas victorias: ' + nombre + ' ' + victo +' victorias')