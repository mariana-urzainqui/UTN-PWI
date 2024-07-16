import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Cart, Detail, Home } from './Pages'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/detail/:producto_id' element={<Detail/>}/>
			<Route path='/cart' element={<Cart/>}/>
		</Routes>
	)
}

export default App
