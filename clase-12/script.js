/* Solicitar un string al usuario y vallidar que sea un string valido
Casos invalidos:
' '
null
number(cualquier tipo de number excepto el NaN) */

/* let texto = prompt ('Ingrese una palabra')
while( !texto || isNaN(texto)){
    alert('No ingresaste un dato valido')
    texto = prompt ('Ingrese una palabra valida')
} */

/* FOR
Es un bucle que usamos cuando queremos repetir un bloque de codigo una determinada cantidad de veces 

ej: Di por consola hola mundo 5 veces
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')

Principio DRY = Don't repeat yourself

*/

/* Como se haria con FOR */
//    incio            limite          actualización 
/* for(let iterador = 1; iterador <=5; iterador = iterador +1){
    console.log('Hola mundo' + iterador)

    Se puede poner 'iterador' o 'i'
} */

/* Solicitar 3 nombres y mostrarlo por alerta 3 veces */


/* for(let iterador = 1; iterador <=3; iterador = iterador +1){
    let nombre = prompt('Ingrese nombre')
    alert(nombre)
} */

/* Vamos a solicitar un numero 3 veces al finalizar mostrar el resultado e la sumatoria de los 3 numeros */

/* let listadenumeros=0
for(let i=1;i<=3;i++){
    let numero=Number(prompt('ingrese un numero'))
    listadenumeros= listadenumeros + numero
}
alert(listadenumeros) */
/* 
camelCase = ingles
snake_case = español */

/* Vamos a solicitar al usuario una cantidadDeRepeticiones
Vamos a solicitar un numero la cantidad de repeticiones ingresada por el usuario, al finalizar mostrar el resultado de la sumatoria entre los 3 numeros
Validar que el numero ingresado sea una numero, en caso de que no volver a solicitarlo
Validar que la cantidadDeRepeticiones ingresada sea un numero,en caso de que no volver a solicitarlo */

/* let cantidadDeRepeticiones = prompt('Ingrese una cantidad de repeticiones')
let suma = 0
while(!cantidadDeRepeticiones || isNaN(cantidadDeRepeticiones)){
    alert('Dato no valido')
    cantidadDeRepeticiones = prompt('Ingrese un dato numérico')
}
for(let i = 1; i <= cantidadDeRepeticiones; i = i +1){
    numero = prompt('Ingrese un numéro: ')
    while(!numero || isNaN(numero)){
        alert('Dato no valido')
        numero = prompt('Ingrese un dato numerico')
    }
    suma = suma + numero
}
alert('El resultado es: ' + suma) */

/* FUNCIONES */

/* //Declarar una función nombre seria el parametro 
function saludar(nombre){ 
    alert('Hola a todos')
}
Invocar mi funcion pepe seria el argumento
saludar('pepe') */

/* Crear una funcion llamada sumar, que reciba dos numeros y muestre por consola el resultado de la suma de los numeros */

/* function sumar(numero1, numero2){
    let suma = numero1 + numero2
    console.log(suma)
} */

/* Crear una función llamada calcularIva que reciba un precio y muestre el iva por consola de dicho precio */

/* function calcularIva(importe){
    console.log(importe*0.21)
} */


/* let string = prompt('Ingrese un string')

while(!string || isNaN(string)){
    alert('Error! No es un string')
    string = prompt('Ingrese un string válido')
} */

/* 
for(let iterador = 1; iterador <=3; iterador = iterador + 1){
    let nombre = prompt('Ingrese un nombre')
    alert('nombre')
} */

/* let resultado = 0
for(let iterador = 1; iterador <=3; iterador = iterador +1){
    let numero = Number(prompt('Ingrese un número'))
    resultado = resultado + numero
}
alert(resultado) */

/* let cantidadDeRepeticiones = prompt('Ingrese cantidad de repeticiones')
let resultado = 0
while(!cantidadDeRepeticiones || isNaN(cantidadDeRepeticiones)){
    alert('Error:Ingrese un número')
    cantidadDeRepeticiones = prompt('Por favor ingrese un número')
}
for(let iterador = 1; iterador <= cantidadDeRepeticiones; iterador = iterador + 1){
    let numero = prompt('Ingrese un número')
    while(!numero || isNaN(numero)){
        alert('Error: ingrese un número')
        numero = prompt('Ingrese un numero valido')
    }
    resultado = resultado + Number(numero)
}
alert(resultado) */


/* function sumar (numero1, numero2){
    console.log(numero1 + numero2)
} */

/* function calcularIva (precio){
    console.log(precio*0.21)
} Esto no ata a la consola nomas, para hacerla mas agnostica se usa el return

function calcularIva (precio){
    return precio*0.21
*/

