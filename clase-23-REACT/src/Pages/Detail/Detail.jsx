import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { obtenerProductoPorId, eliminarProductoPorId } from '../../helpers/productos'
import { useGlobalContext } from '../../Context/GlobalContext'


const Detail = () => {
    const { producto_id } = useParams()
    
    const producto = obtenerProductoPorId(producto_id)

    if(!producto) {
        return <div>Producto no encontrado</div>
    }

    const {handleEliminarProducto} = useGlobalContext()

    const { 
        nombre,
        descripcion,
        precio,
        id,
        stock,
        codigo,
        categoria
    } = producto

    return (
        <div>
            <h1>{nombre}</h1>
            <span>Categoria: {categoria}</span>
            <p>
                {descripcion}
            </p>
            <span>
                <b>Precio:</b>{precio}
            </span>
            <span>
                <b>Unidades disponibles:</b>
                {stock}
            </span>
            <br/>
            <button>Comprar</button>
            <button onClick={() => handleEliminarProducto(id)}>Eliminar</button>
        </div>
    )
}

export default Detail
