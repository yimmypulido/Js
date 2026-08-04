

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


let peso = prompt ('ingrese su peso');

let libras = ( peso *2.205);

console.log( 'su peso en libras es ' + libras)

if ( libras < 160){
    console.log( 'su peso es demasiado bajo para competir')
}else if( libras >=160 && libras <= 180 ){
 console.log( ' su peso es medio para competir, participe!!')
} else { libras > 180
    console.log( 'su peso es mayor puede competir')
};



