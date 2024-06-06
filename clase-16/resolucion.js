const categoriasDisponibles = ['tecnologia', 'hogar', 'otros']

const validarStringConMinimo = (valor, minimo) => valor && isNaN(valor) && valor.length > minimo
const validarTitulo = (valor) => validarStringConMinimo(valor,4)
const validarPrecio = (valor) => valor && !isNaN(valor) && valor >1
const validarDescripcion = (valor) => validarStringConMinimo(valor,10)
const validarCategoria = (valor) => categoriasDisponibles.includes(valor)
const validarMarca = (valor) => validarStringConMinimo(valor,3)

const crearObjetoConfeccion = (mensaje,error,validacion) =>{
    return{
        mensaje: mensaje,
        error: error,
        validacion: validacion
    }
}

const datos_producto = {
    titulo: crearObjetoConfeccion(
        'Ingrese un titulo min (4) caracteres:',
        'Error al ingresar titulo, ingrese nuevamente:',
        validarTitulo
    ),
    precio: crearObjetoConfeccion(
        'Ingrese un precio positivo mayor a $1',
        'Error al ingresar precio, ingrese nuevamente',
        validarPrecio
    ),
    descripcion: crearObjetoConfeccion(
        'Ingrese una descripción min (10) caracteres:',
        'Error al ingresar descripción, ingrese nuevamente: ',
        validarDescripcion
    ),
    categoria: crearObjetoConfeccion(
        'Ingrese una categoria válida (categorias válidas: ' + categoriasDisponibles.join(', ')+')',
        'Error al ingresar una categoria (categorias válidas:' + categoriasDisponibles.join(', ')+')',
        validarCategoria
    ),
    marca: crearObjetoConfeccion(
        'Ingrese una marca min (3) caracteres',
        'Error al ingresar marca, ingrese nuevamente',
        
    )
}


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
    while(!(categoria == 'tecnologia' || categoria == 'hogar' || categoria == 'otros')){
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