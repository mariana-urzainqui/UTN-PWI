const numeroHTML = document.getElementById('numero')
const agregarHTML = document.getElementById('agregar')
const restarHTML = document.getElementById('restar')

const renderizarContador = () =>{
    numeroHTML.innerText = numero
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
}

let numero = 1
renderizarContador()

agregarHTML.addEventListener ('click', agregar)
restarHTML.addEventListener('click', restar)