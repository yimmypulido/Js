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

let productos = [
{ nombre: "pantalla", precio: 500000 },
{ nombre: "grafica", precio: 12000 },
{ nombre: "memoriaRam", precio: 50000 }
];
let precioTotal = 0;


for (let i = 0; i < productos.length; i++) {
    
    let precioTotal = productos[0].precio + productos[1].precio + productos[2].precio


    console.log( 'el precio total de la compra es precioTotal ' + precioTotal)
}

