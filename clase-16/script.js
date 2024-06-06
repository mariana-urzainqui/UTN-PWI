/* 
Crear una funcion llamada registrarProducto
La funcion solicitara al usuario:
-Titulo: Debe ser un string con mas de 4 caracteres
-Precio: Debe ser un numero positivo mayor a 1
-Descripcion: Debe ser un string con almenos 10 caracteres
-Categoria: Debe ser un string que este dentro de las sig opciones ['tecnologia', 'hogar', 'otros']
-Marca: Debe ser un string con almenos 3 caracteres

Se solicitara siempre mediante uso de prompts

Se mostrara al usuario la sig plantilla/texto por prompt (para que pueda contestar):
Confirmar producto:
-Titulo: 'Mesa de trabajo de madera'
-Precio: '300'
-Descripcion: 'Mesa de trabajo ideal para astillarse'
-Categoria: 'hogar'
-Marca: 'Jorge el carpintero'
Si el usuario elige cancelar (con el button) o escribe 'CANCELAR' o 'NO' se volvera a comenzar
Si el usuario presiona aceptar o escribe 'SI' entonces la funcion creara un objeto del producto y lo mostrara por consola
*/

const registrarProducto = () =>{
    let titulo = prompt('Ingrese el titulo del producto')
    while(titulo.length <=4){
        alert('Error el titulo debe ser mayor a 4 caracteres')
        titulo = prompt('Ingrese un nuevo titulo')
    }
    let precio = Number(prompt('Ingrese el precio'))
    while(isNaN(precio) || precio <=1){
        alert('Error el precio debe ser mayor a 1')
        precio = prompt('Ingrese un nuevo precio')
    }
    let descripcion = prompt('Ingrese una descripción')
    while(descripcion.length <10){
        alert('Error la descripción debe contener al menos 10 caracteres')
        descripcion = prompt('Ingrese una nueva descripción')
    }
    let categoria = prompt('Ingrese la categoría que corresponda: tecnologia, hogar u otros')
    while(categoria !== 'tecnologia' & categoria !== 'hogar' & categoria !=='otros'){
        alert('Las categorias permitidas son tecnologia, hogar u otros')
        categoria = prompt('Ingrese una categoria dentro de las opciones permitidas')
    }
    let marca = prompt('Ingrese una marca')
    while(marca.length <3){
        alert('Error la marca debe ser de al menos 3 caracteres')
        marca = prompt('Ingrese una nueva marca')
    }
    return {
        'titulo': titulo,
        'precio': precio,
        'descripcion': descripcion,
        'categoria': categoria,
        'marca': marca,
    }
}

let producto = registrarProducto()
let confirmacion = prompt(`Confirmar producto escribiendo SI en caso de que no este correcto escribir CANCELAR o NO:
    Titulo: ${producto.titulo}
    Precio: ${producto.precio}
    Descripción: ${producto.descripcion}
    Categoria: ${producto.categoria}
    Marca: ${producto.marca}
`)
while(confirmacion == null || confirmacion.toLowerCase() === 'cancelar' || confirmacion.toLowerCase() === 'no'){
    producto = registrarProducto()
    confirmacion = prompt(`Confirmar producto escribiendo SI en caso de que no este correcto escribir CANCELAR o NO:
    Titulo: ${producto.titulo}
    Precio: ${producto.precio}
    Descripción: ${producto.descripcion}
    Categoria: ${producto.categoria}
    Marca: ${producto.marca}
`)
}
if(confirmacion.toLowerCase() === si){
    console.log(producto)
}
else{
    confirmacion = prompt('Confirmar con las siguientes opciones: SI, NO, CANCELAR ')
}

registrarProducto()