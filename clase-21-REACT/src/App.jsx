import React from 'react'
import RowArticle from './components/RowArticle'

/* import { Button } from './components/Boton'
import { Carta } from './components/Carta'


const App = () => {
  let nombreUsuario = 'julieta'
  return (
  <div>
    <div>
      <h1>Hola {nombreUsuario}</h1>
      <Button texto = 'boton 1'/>
      <Carta/>
    </div>
    <div>
      <h1>Hola</h1>
      <Button texto = 'agregar a fav'/>
      <Carta/>
    </div>
  </div>
  )
} */

const App = () => {
  return (
  <div>
    <RowArticle titulo = 'Lift-off: The MDN Curriculum launch' direccion_author = 'developer.mozilla.org' fecha = '4 months ago'/>
    <RowArticle titulo = "Baseline's evolution on MDN" direccion_author = 'developer.mozilla.org' fecha = '7 months ago'/>
    <RowArticle titulo = 'Introducing the MDN Playground: Bring your code to life!' direccion_author = 'developer.mozilla.org' fecha = 'a year ago'/>
  </div>
  )
}


export default App
