/* Si su edad es mayor a 16 y su lenguaje favorito es 'JS'
Mostrar por consola 'Bienvenido a desarrollo web Frontend' 
Sino mostrar por consola 'No se puede ser perfecto en todo*/

let edad = prompt('ingresa tu edad')
let lenguaje = prompt('ingresa tu lenguaje favorito')

if(edad > 16 && lenguaje=='JS'){
    console.log('Bienvenido a desarrollo web Frontend')
}
else{
    console.log('No se puede ser perfecto en todo')
}