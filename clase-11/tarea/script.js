/* 1) Escribe un programa que le pida al usuario que introduzca su edad mediante un prompt. Luego, el programa debe determinar y mostrar en la consola en qué etapa de la vida se encuentra el usuario según su edad. Las etapas son las siguientes:
Si la edad es menor de 0, mostrar "Edad no válida."
Si la edad es menor de 13, mostrar "Eres un niño."
Si la edad es entre 13 y 17 inclusive, mostrar "Eres un adolescente."
Si la edad es entre 18 y 64 inclusive, mostrar "Eres un adulto."
Si la edad es 65 o mayor, mostrar "Eres una persona mayor." */

/* let edad = prompt('Ingresa tu edad')

if(edad <=0){
    console.log('Edad no válida')
}
else if(edad<13){
    console.log('Eres un niño')
}
else if(edad >=13 && edad <=17){
    console.log('Eres un adolescente')
}
else if(edad>=18 && edad <=64)[
    console.log('Eres un adulto')
]
else{
    console.log('Eres una persona mayor')
} */

/* 2)
Crea un programa que le pida al usuario que introduzca una calificación numérica (entre 0 y 100) mediante un prompt. El programa debe convertir la calificación a una letra según la siguiente escala:
90 a 100: A
80 a 89: B
70 a 79: C
60 a 69: D
0 a 59: F
Si la calificación introducida está fuera del rango de 0 a 100, el programa debe mostrar "Calificación no válida." */

/* let calificacion = prompt('Ingresa una calificación numérica')

if(calificacion >=90 && calificacion <=100){
    console.log('A')
}
else if(calificacion >=80 && calificacion <=89){
    console.log('B')
}
else if(calificacion >=70 && calificacion <=79){
    console.log('C')
}
else if(calificacion >=60 && calificacion <=69){
    console.log('D')
}
else if(calificacion >=0 && calificacion <=59){
    console.log('F')
}
else{
    console.log('Calificación no válida.')
} */

/* 3)
Desarrolla un programa que le pida al usuario las longitudes de los tres lados de un triángulo mediante tres prompts separados. El programa debe determinar y mostrar en la consola el tipo de triángulo que se forma (equilátero, isósceles o escaleno) según las longitudes de los lados introducidos:
Equilátero: todos los lados son iguales.
Isósceles: dos lados son iguales.
Escaleno: todos los lados son diferentes.
Si alguna de las longitudes introducidas es menor o igual a 0, el programa debe mostrar "Longitudes no válidas." */

let longitud_1 = prompt('Ingresa primer longitud del triángulo')
let longitud_2 = prompt('Ingresa segunda longitud del triángulo')
let longitud_3 = prompt('Ingresa tercer longitud del triángulo')
if(longitud_1<=0 || longitud_2<=0 ||longitud_3<=0){
    console.log('Longitudes no válidas')
}
else if(longitud_1 === longitud_2 & longitud_2 === longitud_3){
    console.log('Equilatero')
}
else if(longitud_1 === longitud_2 || longitud_1 === longitud_3 || longitud_2 ===longitud_3){
    console.log('Isósceles')
}
else{
    console.log('Escaleno')
}
