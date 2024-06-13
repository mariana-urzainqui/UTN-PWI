const alertar = () =>{
    alert('Hola mundo')
}

const btn2HTML = document.getElementById('btn-2')
btn2HTML.onclick = alertar

const btn3HTML = document.querySelector('.btn-3')
/* btn3HTML.addEventListener('click', alertar) */
btn3HTML.addEventListener('mouseover', alertar)

/* Los eventos siempre van entre comillas simples */

const formLoginHTML = document.getElementById('form-login')

const handleLogin = (evento) =>{
    evento.preventDefault()
    console.log('formulario enviado')
    console.dir(formLoginHTML.password.value)
    console.dir(formLoginHTML.username.value)
}

formLoginHTML.addEventListener('submit', handleLogin)