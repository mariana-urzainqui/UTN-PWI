// Arrays: Lista de elementos ordenados. Cada elemento tiene su posición

//index/posicion   0     1       2
const nombres = [pepe, juan, ezequiel]

//para llamar a juan
console.log(nombres[1])

// propiedad: .lenght (muestra cuantos elementos tiene el array)

// metodos de array

// .push() : Agrega un elemento al final del array y devuelve la nueva longitud

nombres.push('maria')

//.unshift() : Agrega un elemento al principio del array y devuelve la nueva longitud

nombres.unshift('maria')

// .pop() : Elimina el ultimo elemento y lo retorna

nombres.pop()

// .shift() : Elimina el primer elemento y lo retorna

nombres.shift()

// .indexOf() : Devuelve la posicion de un string en el array de strings. SOLO SIRVE PARA ARRAYS DE STRING.

nombres.indexOf('juan')

/* splice() : Recibe 3 parametros 
1° parametro: Desde donde va a posicionarse
2° parametro: Cantidad de elementos que se quieran borrar (de 1 en adelante)
3° parametro: Si pongo 0 en el segundo paramentro se usa el 3° Elementos a agregar*/

nombres.splice(1,1) //Eliminaria a juan

//eliminar:

const nombres2 = ('maria', 'pedro', 'leonel', 'ezequiel', 'elias')

let posicionEzequiel = nombres2.indexOf('ezequiel')

nombres2.splice(posicionEzequiel, 1) //Eliminaria a ezequiel
nombres2.splice(posicionEzequiel, 2) //Eliminaria a ezequiel y a elias 

//agregar:
nombres2.splice(posicionEzequiel, 0, 'lucas') // Agrega a lucas antes de ezequiel


const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']

//Eliminar a leonel

let posicionLeonel = nombres3.indexOf('leonel')
nombres3.splice(posicionLeonel, 1)

//eliminar a el anterior a lucas
let posicionLucas = nombres3.indexOf('lucas')
nombres3.splice((posicionLucas - 1), 1)

//agregar antes de abril a 'sofia' sin eliminar a abril
let posicionAbril = nombres3.indexOf('abril')
nombres3.splice(posicionAbril,0,'sofia')


// includes: Para consultar si un elemento esta en mi array, tira true o false

console.log(nombres3.includes('leonel')) //tiraria true


//Bucles de arrays

for(let index = 0; index < nombres3.length; index = index + 1){   //Recorrer el array
    console.log(nombres3[index])
}


// mejor forma de hacerlo
for(let nombre of nombres3){
    console.log(nombre)
}







