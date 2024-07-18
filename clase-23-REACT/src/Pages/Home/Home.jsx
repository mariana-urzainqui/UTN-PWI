import React from 'react'
import { ProductList } from '../../Components'
import { useGlobalContext } from '../../Context/GlobalContext'

const Home = () => {
    const { productos } = useGlobalContext()
    return (
        <div>
            <h1>Elige nuestros productos</h1>
            <ProductList productos={productos}/>
        </div>
    )
}

export default Home
