    // funciones: 


let saldo = 500_000;




     export function consultarSaldo(){

        alert( ` Tu saldo es: ${saldo}` )

    };

     export function transferir(){

        let persona = prompt('A Quien Le Quiere Transferir');
        let cuanto = Number(prompt('cuanto va a transferir'));


        if( cuanto <= 0  ){
        alert('ingresa un monto valido ')    
        }else if( cuanto <= saldo ){
            saldo = saldo - cuanto * 4 / 1000
            alert(`enviaste ${cuanto} a ${persona}`)

        }
        
        else{
            alert('fondos insuficientes')
        }

    }

    export function retirar() {

        let retiro = Number(prompt('cuanto desea retirar'))

        if ( retiro <= saldo ){ 

            saldo = saldo - retiro * 4 / 1000

            alert( `su retiro es de: ${retiro}`)


        }else if(saldo === retiro)[

            alert('no puede retirar por el 4 x 1000 ')
        ]
        else{

            alert('saldo insuficiente')

        }
        
    }


    export function Depositar () {

        let deposito = Number(prompt('cuanto va a depositar'))
        
        saldo = deposito + saldo 

        alert(`depositaste ${deposito} y tu saldo actual es ${saldo}`)
    }