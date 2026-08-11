// ejercicio n°1 


// let colores = [ 'blanco', 'negro', 'gris', 'azul', 'dorado']

// for (let i = 0; i <= colores.length ; i++) {

    
// console.log( colores[i] )
// }

//  console.log (  ' primer color' +  colores[0])


//ejercicio n°2

// const numeros = [ 96, 45, 59, 5, 66, 99]


// for (let i = 0; i <= numeros.length; i++) {
     
//     console.log( `el array tiene este numero de elementos ` + numeros.length)
    
// }

// ejercicio n°3


// for (let i = 1; i <= 20 ; i++) {
    
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
// { nombre: "pantalla", precio: 500000 },
// { nombre: "grafica", precio: 12000 },
// { nombre: "memoriaRam", precio: 50000 }
// ];
// let precioTotal = 0;


// for (let i = 0; i < productos.length; i++) {
    
//     let precioTotal = productos[0].precio + productos[1].precio + productos[2].precio


//     console.log( 'el precio total de la compra es precioTotal ' + precioTotal)
// }


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
//     nota: 2.9,
// }
// ]

// for (let i = 0; i < estudiantes.length; i++) {

//     if (estudiantes[i].nota >= 3){

//          let aprobado = estudiantes[i].nombre

//         console.log( 'estos son los estudiantes aprobados ' + aprobado)
//     }

// }

const ejercicios = [
{ nombre: "Sentadilla", peso: 80 },
{ nombre: "Press banca", peso: 60 },
{ nombre: "Peso muerto", peso: 120 },
{ nombre: "Dominadas lastradas", peso: 25 }
];
let maximoPeso = 0;
let ejercicioMasPesado = "";

for (let i = 0; i < ejercicios.length; i++) {

    if(ejercicios[i].peso > maximoPeso ){

        maximoPeso = ejercicios[i].peso
        ejercicioMasPesado = ejercicios[i].nombre
        
    }
    
}console.log( ' este es el peso mas alto ' + maximoPeso + ' y el nombre del ejercicio es ' + ejercicioMasPesado)