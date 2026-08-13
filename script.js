

//let nombre = prompt ( 'tu nombre: ');
//let apellido = prompt ( 'tu apellido: ');
//let edad = prompt ( 'tu edad: ');

//console.log( `hola ${nombre} ${apellido} y tu edad es esta ${edad}`)

// let salario = prompt ( 'escribe tu salario en dolares' )

// let dolar = salario / 3200;

// console.log( ` tu salario en pesos colombianos es de ${dolar}`)


// // pedir el peso de una persona 
// // le decimos cuanto pesa en marte la luna y venus 

// let edadHumano = Number (prompt(''))


// pedir datos de un triangulo y decir el area;

// let base = Number ( prompt ('escribe la base de el triangulo '))
// let area = Number ( prompt (`escribe el are de el triangulo`))

// let operacion = base * area /2

// console.log( operacion)

// pedir una temperatura en c y convertirla en f;

// let celsius = Number ( prompt ('escribe los grados celsius'))
// let farenjeith = celsius * 1.8 + 32

// console.log( farenjeith)

// pedir una distancia en km y convertirla a m;         

// let precio = prompt('escriba un precio')
// let descuento = precio * 0.80 ;

// console.log (descuento)

// let nota1 = Number (prompt('escriba la primera nota'))

// let nota2 = Number (prompt('escriba la segunda nota'))

// let nota3 = Number (prompt('escriba la tercera nota'))


// let promedio = (nota1 + nota2 + nota3) / 3

// console.log( promedio)

// si el precio es menor a 100 dolares, no hay descuento y hay cobro por envio
// pero si el precio es entre 100 y 200 hay un 20 % de descuento y el envio es gratis
// si es mayor a 200, hay un descuento del 30%


// let precio = prompt(' escriba el precio');

// if  ( precio <= 100 ){
//     console.log('no tienes descuento y contara con cobro adicional por envio')
// }else if( precio >=100 && precio <=200){
//     console.log('Tienes un 20% de descuento y el envio es gratis')
// }else{
//     console.log('tienes un descuento por 30%')
// }


// let precios = [100, 200, 155, 348, 56];




// for (let i = 0; i < 5; i++) {
//     let precio = precios[i]
//     if (precio <= 100) {
//         console.log('No tienes descuento');
//     } else if (precio > 100 && precio <= 200) {
//         console.log('Tienes un descuento del 20%')
//     } else {
//         console.log('Tienes un descuento del 30%')
//     }
// }


// let peso = prompt ('ingrese su peso');
// let sexo = prompt (' ingrese su sexo, M = Masculuno  F= femenino');

// let libras = ( peso *2.205);


// console.log( 'su peso en libras es ' + libras)


// if ( sexo === 'M' ){

// if ( libras < 160){
//     console.log( 'su peso es demasiado bajo para competir en peso bajo')
// }else if( libras >=160 && libras <= 180 ){
//  console.log( ' su peso es medio para competir, participe en peso medo!!')
// } else { libras > 180
//     console.log( 'su peso es mayor puede competir peso pesado')
// }
// }

// else { sexo === 'F'

// if ( libras < 115){
//     console.log( 'su peso es demasiado bajo para competir, F')
// }else if( libras >=115 && libras <= 135 ){


//  console.log( ' su peso es medio para competir, participe!! ,F')
// } else { libras > 180
//     console.log( 'su peso es mayor puede competir  ,F ')

// }
// }


// let bajo = 160;
// let medio = 180;
// if ( genero == 'f'){
//     bajo = 115;
//     medio = 135;
// }

// if( libras <= bajo){
//     console.log(' categoria gallo')
// }else if (libras <= medio) {
//     console.log( 'categoria ligero')
// }else {
//     console.log( 'categoria pesado')
// }

// let preparacion = prompt('escoja francesa, moka, v60')
// let gramos = prompt (' ponga los gramos')

// let francesa = ( gramos *15)
// let moka = ( gramos *14)
// let v60 = ( gramos *16)

// if ( preparacion === 'francesa' ){
//     console.log( 'tienes que echar esta cantidad de gramos' + francesa)
// }else if ( preparacion === 'moka'){
//     console.log( 'tienes que echar esta cantidad de gramos' + moka)
// }else{
//     preparacion === 'v60'
//     console.log( 'tienes que echar esta cantidad de gramos' + v60)
// }



// let year = prompt(' escribe un año');
 
// if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log ('Es bisiesto')
// }else {
//     console-log ('no es bisiesto')
// }
//   % operador para saber si es dibisible entre si 

// let asistencia =  prompt(' cuantas personas asistieron a la cena ');
// let comio = prompt ('que persona comio mas?')
// let precio = prompt ('precio total de la cena')

// let cuenta =( precio/asistencia);
// let cena =( cuenta/asistencia);
// let cuenta_m = (precio * cena);



// console.log ( 'cada uno debe pagar ' + cena)
// console.log ( 'el que comio mas' + comio + 'paga'+ cuenta_m)


//for 

// se declara una variable
//  let i = 1
//  luego se declara la condicion para que se repita

//  i <= 10  como la variable let i tiene un valor de 1 y la condicion es que si es menor que dies se repite

//  luego se declara el incremento 

//  i++ esto le agrega mas 1 a la variable 

//  quedaria asi 

//  for (let i =1; i <= 10; i++){
//     console.log(i)
//  }

// let number = Number(prompt('escriba el numero de 1 al 10'));
// let number2 = Number (prompt('escriba hasta que numero quiere la multiplicacion'));


// for( let i = 1; i <= number2 ; i++){
//     console.log(i * number)
// }


// for (let i = 1; i <=3; i++){

//     let name = prompt('ingrese su nombre')

//     for(let j = 1; j <=3; j++){

//         let notas = []
//         let nota = prompt('ingrese sus notas')
        
//         notas.push= (nota);
//         console.log( `${name} tu nota es ${nota}`)

//     };


//     // console.log( name + ' ' + nota);
// }


//  
//     let nota = Number(prompt('ingrese su nota final'))
//     if( nota >= 3 ){
//         console.log('pasaste')
//     }else{
//         console.log('no pasaste')
//   

// let dolar = Number(prompt ("cuantas veces va acombertir"));



// for( let i = 0; i <= dolar; i++){

//     let conver = Number(prompt(' escribe lo que vas a convertir' ));
//     let ejer = conver*3200;

//     console.log (`su conversion es: ${ejer}`);
    

// }


// if( i % 2 === 0){ console.log('esto sirve para saber si algo es divisible o no')
// }


// for ( let i = 1; i <=50; i++){

//     if(  i % 3 === 0 && i % 5 ===0){
//         console.log( i + 'Fizzbozz')
//     }else if( i % 5 ===0){
//         console.log( i + 'bozz')
//     }else if (i % 3 === 0){ 
//         console.log( i + 'fiz')
//     }
// }


// nomarray.push (el dato que uno quiera agregar) sirve para agregar elementos a un Array
// nomarray.pop() se coloca al final para que tome el ultimo elemento agragado en un array

// nomarray.shift(); elimina el primer elemento que contenga un array
// normarray.unshift('dato el que se quiere agrgar') crea un elemento al principio de un array

// let frutas = [ 'fresa', 'mora', 'kiwi']
// let fruta = prompt('ingrese una nueva fruta')
// frutas.push(fruta);
// console.log(frutas);


// let factorial = prompt('escriba el numero para sacar factorial')
//  let valor = 1

// for( let i = 1; i <= valor ; i++){

//     factorial *= i
//     console.log(factorial)
// }

// nomArray.includes ('el dato por confirmar si esta en array o no') includes sirve para mirar si un caracter o algo exista en un arrai


// let hashes = ['w1234w5s', '123456789', '9874561230', '112233445566' , 'juanito123', 'pepito123', '123' ,'321' , '789']

// let inseguras = [];
// let medias = []
// let segura = [];

// for (let i = 0; i < hashes.length; i++) {

//     medias.push(hashes.includes)
    
//     if( hashes[i].length <= 8 ){

//       inseguras.push(hashes[i])
    
//      }else if(hashes[i].includes('#')
//      ){
//         segura.push(hashes[i])
//      }
//      else{
        
//         medias.push(hashes[i])
//     }
// }
//     console.log( 'su contraseña es segura ' + segura)
//     console.log( 'su contraseña es insegura ' + inseguras)
//     console.log( 'su contraseña es media ' + medias)
    

// let numAzar = Math.floor((Math.random () *10) +1 );

// for(let i = 1; i <= 5; i++){

//     let num = Number(prompt('ingrese un numero'));

//     if( num === numAzar ){

//         console.log('ganaste adivino el numero')
//         break;

//     }else if ( num > numAzar){

//         console.log('ya casi, escriba un numero menor')
//     }else if( num < numAzar){
       
//         console.log('ya casi, escriba un numero mayor')

//     }
//     {
//          console.log('intenta de nuevo ')

//     }
// }

// let estudiantes = [

//     {
//         nombres: 'shakira',
//         nota: [ 4, 5]

//     },

//     {
//         nombres: 'batman',
//         nota: [ 3, 4]

        
//     },

//     {
//         nombres: 'goku',
//         nota: [ 2, 5]

        
//     },

//     {
//         nombres: 'shakira',
//         nota: [ 1, 3]

        
//     }

// ]

// for (let i = 0; i < estudiantes.length; i++) {

//     let comparacion = estudiantes[i].nota[0] + estudiantes[i].nota[1] / 2
    
//     if( comparacion >= 4 ){
    
//         console.log(  estudiantes[i].nombres + ' tu promedio es ' + comparacion + '  ' + `estudiante paso  `)
//     }else{
//         console.log(  estudiantes[i].nombres + '  tu promedio es  ' + comparacion + '  ' + `estudiante no paso  `)
//     }

// }


// const estudiantes = [

//     {
//         nombre: 'shakira',
//         notas: [3,4,5],
//         aprobado: false
//     },

//     {
//         nombre: 'eminem',
//         notas: [1,5,1],
//         aprobado: false
//     },

//     {
//         nombre: 'goku',
//         notas: [4,4,2],
//         aprobado: false
//     },

//     {
//         nombre: 'luis',
//         notas: [4,4,1],
//         aprobado: false
//     },

//     {
//         nombre: 'Laura',
//         notas: [5,2,5],
//         aprobado: false
//     },

// ]

// for (let i = 0; i < estudiantes.length; i++) {
    
//     console.log(estudiantes[i].nombre)
    
// };


// para ahorrar la suma de valores en un array 

// se puede hacer de la siguiente manera 
//  variable += array[i];


const productos = [

    {
        nombre: 'tv',
        marca: 'samsung',
        precio: 2000,
        stock: 4,
        modelo: 2009

    },

    {
        nombre: 'celular',
        marca: 'redmi note',
        precio: 1000,
        stock: 10,
        modelo: 2024

    },

    {
        nombre: 'audifonos',
        marca: 'redmi',
        precio: 3000,
        stock: 25,
        modelo: 2023

    },

    {
        nombre: 'portatil',
        marca: 'acer',
        precio: 4000,
        stock: 30,
        modelo: 2022

    },

    {
        nombre: 'pc',
        marca: 'asus',
        precio: 5000,
        stock: 5,
        modelo: 2025

    },

    {
        nombre: 'baffles',
        marca: 'bora',
        precio: 1500,
        stock:  21,
        modelo: 2022

    },

]

let inversionTotal = 0;

for (let i = 0; i < productos.length; i++) {
    
   inversion = productos[i].precio + productos[i].stock

   inversionTotal = inversionTotal + inversion
    
}

console.log( 'su inversion total en todos los productos fue de ' + inversionTotal)