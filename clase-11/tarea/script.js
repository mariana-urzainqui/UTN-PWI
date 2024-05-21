/* 1) Escribe un programa que le pida al usuario que introduzca su edad mediante un prompt. Luego, el programa debe determinar y mostrar en la consola en qué etapa de la vida se encuentra el usuario según su edad. Las etapas son las siguientes:
Si la edad es menor de 0, mostrar "Edad no válida."
Si la edad es menor de 13, mostrar "Eres un niño."
Si la edad es entre 13 y 17 inclusive, mostrar "Eres un adolescente."
Si la edad es entre 18 y 64 inclusive, mostrar "Eres un adulto."
Si la edad es 65 o mayor, mostrar "Eres una persona mayor." */

/* let edad = Number(prompt('Ingresa tu edad'))

if(edad <=0){
    console.log('Edad no válida')
}
else if(edad<13){
    console.log('Eres un niño')
}
else if(edad >=13 && edad <=17){
    console.log('Eres un adolescente')
}
else if(edad>=18 && edad <=64){
    console.log('Eres un adulto')
}
else if(edad>=65){
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
/* 
let calificacion = Number(prompt('Ingresa una calificación numérica'))

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

/* let longitud_1 = prompt('Ingresa primer longitud del triángulo')
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
 */

/* 4)
Escribe un programa que le pida al usuario que introduzca un número del 1 al 7 mediante un prompt. El programa debe mostrar en la consola el día de la semana correspondiente al número introducido:
1: Lunes
2: Martes
3: Miércoles
4: Jueves
5: Viernes
6: Sábado
7: Domingo
Si el número introducido no está en el rango de 1 a 7, el programa debe mostrar "Número no válido." */

/* let numero_semana = Number(prompt('Ingresa el número correspondiente al día de semana seleccionado'))

if(numero_semana >7 || numero_semana <1){
    console.log('Número no válido.')
}
else if(numero_semana === 1){
    console.log('Lunes')
}
else if(numero_semana === 2){
    console.log('Martes')
}
else if(numero_semana === 3){
    console.log('Miércoles')
}
else if(numero_semana === 4){
    console.log('Jueves')
}
else if(numero_semana === 5){
    console.log('Viernes')
}
else if(numero_semana === 6){
    console.log('Sábado')
}
else{
    console.log('Domingo')
} */

/* 5)
Crea un programa que le pida al usuario que introduzca una temperatura en grados Celsius mediante un prompt. El programa debe determinar y mostrar en la consola el estado del agua a esa temperatura:
Sólido: 0 grados Celsius o menos.
Líquido: entre 0 y 99 grados Celsius.
Gaseoso: 100 grados Celsius o más.
Si la temperatura introducida no es un número válido, el programa debe mostrar "Temperatura no válida." */

let temperatura = prompt('Introduzca una temperatura en grados Celsius para ver el estado del agua en esa temperatura')
if (temperatura === ' ' || temperatura === null || isNaN(temperatura)){ /* o (!temperatura || isNaN(temperatura))*/
    console.log('Temperatura no válida.')
}
else{
    if(temperatura <=0){
        console.log('Sólido')
    }   
    else if(temperatura >0 && temperatura <=99){
        console.log('Líquido')
    }
    else if(temperatura >= 100){
        console.log('Gaseoso')
    }
}

