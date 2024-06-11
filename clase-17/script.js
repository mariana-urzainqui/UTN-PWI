/* const usuario = {
    nombre: 'Pepe',
    apellido: 'Gonzalez',
    direccion: '9 de julio 5811',
    edad: 50,
};

const infoUsuario = document.getElementById('info-usuario')

infoUsuario.innerHTML = `
<h2> Nombre completo: ${usuario.nombre} ${usuario.apellido}</h2>
<span> Edad: ${usuario.edad}</span>
<span> Dirección: ${usuario.direccion}</span>
` */

const carrito = [
    {   
        nombre: 'Remera azul',
        id: 62621,
        precio: 15000,
        cantidad: 1,
        imagen: 'https://dcdn.mitiendanube.com/stores/001/205/102/products/remera-lisa-fr-rj-11-ef4b6ca4b08c3f434315906905869409-1024-1024.webp',
    },
    {   
        nombre: 'Remera verde',
        id: 62622,
        precio: 15500,
        cantidad: 2,
        imagen: 'https://dcdn.mitiendanube.com/stores/001/205/102/products/remera-lisa-fr-rj-11-ef4b6ca4b08c3f434315906905869409-1024-1024.webp',
    },
    {   
        nombre: 'Remera amarilla',
        id: 62623,
        precio: 20000,
        cantidad: 1,
        imagen: 'https://dcdn.mitiendanube.com/stores/001/205/102/products/remera-lisa-fr-rj-11-ef4b6ca4b08c3f434315906905869409-1024-1024.webp',
    },
    {   
        nombre: 'Remera roja',
        id: 62624,
        precio: 7000,
        cantidad: 4,
        imagen: 'https://dcdn.mitiendanube.com/stores/001/205/102/products/remera-lisa-fr-rj-11-ef4b6ca4b08c3f434315906905869409-1024-1024.webp',
    },
]

const renderizarCarrito = (carrito) =>{
    const carritoHTML = document.getElementById('carrito-total')
    const totalCarrito = document.getElementById('total')
    let total = 0
    let plantillaProductos = ''
    for (const producto of carrito){
        total = total + producto.precio * producto.cantidad
        plantillaProductos = plantillaProductos + `
        <h3>${producto.nombre} id: ${producto.id}</h3>
        <img width='100px' src="${producto.imagen}"/>
        <span>Precio unitario: $${producto.precio} x ${producto.cantidad} unidad(es)</span>
        <span>Total: (${producto.precio*producto.cantidad})</span>
        `
    }
    carritoHTML.innerHTML = plantillaProductos
    totalCarrito.innerHTML = `Total: $${total}`
}

renderizarCarrito(carrito)

const eliminarItemPorID = (id) =>{
    const productoBuscado = carrito.find((producto) => producto.id === id)
    if (productoBuscado){
        if(productoBuscado.cantidad === 1){
        }
        else{
            productoBuscado.cantidad = productoBuscado.cantidad - 1
        }
        renderizarCarrito(carrito)
    }
    else{
        console.error('Error: item con id inexistente')
    }
}






