/* import React from 'react'
import RowInfo from './Components/RowInfo' */

/* import CodePointInfo from './Components/CodePointInfo' */
/* import Button from './Components/Button'

function App() {
  return (
      <div>
        <Button>Click</Button>
      </div>
  )
} */

/* function App() {
  return (
      <CodePointInfo>
        <span>Unicode: U+F61F</span>
        <span>CSS: \F61F</span>
        <span>JS: \uF61F</span>
        <span>HTML: &#xF&1F ;</span>
      </CodePointInfo>
  )
}

export default App
 */


/* function App() {
  return (
<>
  <RowInfo title= "Icon Font">
    <span>Using the web font? Copy, paste, and go.</span>
    <pre>
      <code>
        {`<i class="bi bi-window-sidebar"></i>`}
      </code>
    </pre>
  </RowInfo>
  <RowInfo title= "Code point">
    <span>Unicode: U+F61F</span>
    <span>CSS: \F61F</span>
    <span>JS: \uF61F</span>
    <span>HTML: &#xF&1F ;</span>
  </RowInfo>
  <RowInfo title= "Icon Font">
    <span>Using the web font? Copy, paste, and go.</span>
    <pre>
      <code>
      {`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-sidebar" viewBox="0 0 16 16">
  <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z"/>
</svg>`}
      </code>
    </pre>
  </RowInfo>
</>
  )
}

export default App */

/*
Tarea
const userData = {
    isLogged: true,
    isAdmin: true,
    lang: 'en'
  }
  Van a crear un componente llamado Navbar y van a pasarle por props el objeto userData
  Si isLogged es false entonces mostraran un button que diga 'login'
  Si isAdmin es true mostraran un <button></button> que diga 'crear producto'
  OPCIONAL:
  Si lang esta en 'en' todos los textos deben ser en ingles
  Si lang esta en 'es' todos los textos deben ser en español
  */

import React from 'react'
import NavBar from './Components/NavBar'

const userData = {
  isLogged: true,
  isAdmin: true,
  lang: 'en'
}

const data = {
  EN:{
    inicio: 'Home',
    login: 'Login',
    producto: 'Create product'
  },
  ES:{
    inicio: 'Inicio',
    login: 'Iniciar Sesión',
    producto: 'Crear producto'
  }
}

const App = () => {
  return (
    <NavBar userData={userData} data ={data}/>
  )
}


export default App