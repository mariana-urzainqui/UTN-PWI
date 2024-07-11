import React, { useState } from 'react'

const Counter = (props) => {
    const [contador, setContador] = useState(0)
    const handleClickAddButton = () => {
        setContador(contador + 1)
    }

    const handleClickRemoveButton = () => {
        setContador(contador > 0 ? contador - 1 : 0)
    }

    return (
        <div className='contenedor-contador'>
            <button onClick={handleClickRemoveButton}>-</button>
            <span>{contador}</span>
            {
                contador < props.limit
                    ? (<button onClick={handleClickAddButton}>+</button>)
                    : (<span>No se puede incrementar mas de {props.limit}</span>)
            }
        </div>
    )
}

export default Counter
