import React from 'react'

const ProductForm = () => {
    return (
            <form>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" />
                <br/>
                <label htmlFor="precio">Precio</label>
                <input type="text" name="precio" id="precio" />
                <br/>
                <label htmlFor="stock">Stock</label>
                <input type="text" name="stock" id="stock" />
                <br/>
                <label htmlFor="codigo">Codigo</label>
                <input type="text" name="codigo" id="codigo" />
                <br/>
                <label htmlFor="categoria">Categoria</label>
                <input type="text" name="categoria" id="categoria" />
                <br/>
                <label htmlFor="thumbnail">Thumbnail</label>
                <input type="text" name="thumbnail" id="thumbnail" />
                <br/>
                <button type='submit'>Guardar Producto</button>
            </form>
    )
}

export default ProductForm
