import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Cart, Detail, Home, NewProduct, Login } from './Pages'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/login' element={<Login/>}/>
			<Route path='/detail/:producto_id' element={<Detail/>}/>
			<Route path='/cart' element={<Cart/>}/>
			<Route path='/product/new' element={<NewProduct/>}/>
		</Routes>
	)
}

export default App
