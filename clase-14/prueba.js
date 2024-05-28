/* const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro'] */

/* 
Obtener cantidad total de caracteres de una lista de nombres:
Quiero que dado el array de nombres, por cada nombre sumes la cantidad de caracteres 
Al finalizar el recorrido decir 'la cantidad de caracteres es: {sumatoria caracteres}'


Ejemplo: ['pepe', 'juan'] //la sumatoria de caracteres es 8
*/
/* 
let cantidadCaracteres = 0
for(let index = 0 ; index < nombres3.length ; index = index + 1){
    cantidadCaracteres = cantidadCaracteres + nombres3[index].length
}
console.log('La cantidad de caracteres es ' + cantidadCaracteres) */

/* for(let nombre of nombres3){
    console.log(nombre)
} */

//Dado el siguiente array crear un segundo array llamado mayusculas que solo contenga las palabras en mayusculas

/* const array = ['pepe', 'lucas', 'PEDRO', 'JuaN']
 */
//esto debe generar un segundo array con ['PEDRO', 'JuaN']

/* const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
] */


/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung */

/* const arraySamsung = []

for(const producto of productos){
    if(producto.marca === 'samsung'){
        arraySamsung.push(producto)
    }
} */



/* Crear una funcion que se llame buscarProducto(string) recibira un string y por cada producto del array 
de productos verificara si el titulo tiene incluido el string buscado
Esta funcion debe retornar un array de productos */

//EJEMPLO: 
/* buscarProducto('noblex') //retorna:  
[ 
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    }
]
buscarProducto('celular')
[
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    }
] */

const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    },
]



function buscarProducto (busqueda){
    const arrayProductos = [] 
    for (const producto of productos){
        if (producto.title.includes(busqueda)){
            arrayProductos.push(producto)
        }
    }
    return arrayProductos;
}

console.log (buscarProducto('noblex'));
console.log(buscarProducto('celular'));
