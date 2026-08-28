let api1 = 'https://dattebayo-api.onrender.com/characters'

let api2 = 'https://rickandmortyapi.com/api/character'

let api3 = 'https://pokeapi.co/api/v2/pokemon'


async function  getData() {

   try {

    let res = await fetch (api1)
    let data = await res.json()
    let ninjas = data.characters
    
    for (const n of ninjas) {
        
        console.log(n.name)

    }

   } catch (error) {

        console.log(error)

   }
    
}


// getData();


async function getPerson() {
    
    try {
        
        let responsive = await fetch(api2)
        let dat = await responsive.json()
        let personajes = dat.results

        for (const n of personajes) {
            
            console.log(n.name)
        }

    } catch (error) {
        
        console.log(error)

    }


}


// getPerson();


async function getPokemon() {

    try {
        
   
    let respon = await fetch(api3)
    let datos = await respon.json()
    let pokemones = datos.results

    for (const n of pokemones) {
        
        console.log(n.name)
    }
   
     } catch (error) {

    }
}


getPokemon();