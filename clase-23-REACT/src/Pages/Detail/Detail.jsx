import React from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../../helpers/productos'


const Detail = () => {
    const parametros = useParams()

    const {
        nombre,
        descripcion,
        precio,
        id,
        stock,
        codigo,
        categoria
    } = obtenerProductoPorId(parametros.producto_id)
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
        </div>
    )
}

export default Detail
