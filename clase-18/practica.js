const comprarBtnHTML = document.getElementById('comprar')
const contadorContainerHTML = document.getElementById('elegir-cantidad')
const contadorCantidadHTML = document.getElementById('numero')
const agregarBtnHTML = document.getElementById('agregar')
const restarBtnHTML = document.getElementById('restar')

contadorContainerHTML.style.display = 'none'

const comprar = () =>{
    comprarBtnHTML.style.display = 'none'
    contadorContainerHTML.style.display = 'flex'
}

comprarBtnHTML.addEventListener('click', comprar )

const volver = ()=>{
    comprarBtnHTML.style.display = 'flex'
    contadorContainerHTML.style.display = 'none'
}

const renderizarContador = () =>{
    contadorCantidadHTML.innerText = numero
}

const agregar = () =>{
    numero = numero + 1
    renderizarContador()
}

const restar = () =>{
    if (numero > 1){
    numero = numero - 1
    renderizarContador()
    }
    else if (numero === 1){
        volver()
    }
}

let numero = 1
renderizarContador()

agregarBtnHTML.addEventListener ('click', agregar)
restarBtnHTML.addEventListener('click', restar)
