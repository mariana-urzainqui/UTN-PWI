const validarEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validarPassword = (password) =>{
    return password && password >= 6 && password.toLowerCase() !== password
}

const solicitarDato = (objeto) => {
    let dato = prompt(objeto.mensaje)
    while(!objeto.fn_validacion(dato)){
        dato = prompt(objeto.error)
    }
    return dato
}

const DATOS = {
    EMAIL: {
        mensaje:'Ingrese un email',
        error:'Error email invalido: Ingrese nuevamente el email',
        fn_validacion: validarEmail
    },
    PASSWORD: {
        mensaje:'Ingrese la password que tenga más de 6 caracteres y una mayuscula',
        error:'Error password invalida',
        fn_validacion: validarPassword
    }
}

const login = () =>{
    const usuario = {
        email: null,
        password: null
    }

    usuario.email = solicitarDato(DATOS.EMAIL)

    usuario.password = solicitarDato(DATOS.PASSWORD)

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}

let objetoString = 
localStorage.setItem(   
    'usuario', 
    JSON.stringify(login())
)

const validacionOperacion = (operacion) =>{
    const OPERACIONES_DISPONIBLES = ['+', '-']
    for(let operacionDisponible of OPERACIONES_DISPONIBLES){
        if(operacionDisponible === operacion){
            return true
        }
    }
    return false
}

const validacionNumero = (numero) =>{
    return numero && !isNaN(numero)
}

const calculadora = () =>{
    let operacion = prompt('Ingrese una operacion')
    while(!validacionOperacion(operacion)){
        operacion = prompt('Error, operacion no disponible, seleccione una operacion')
    }

    let a = prompt("Ingrese un primer numero")
    while(!validacionNumero(a)){
        a = prompt("Error numero no valido, ingrese nuevamente")
    }

    let b = prompt('Ingrese un segundo numero')
    while(!validacionNumero(b)){
        b = prompt('Error numero no valido, ingrese nuevamente')
    }

    let resultado = 0

    if(operacion === '+'){
        resultado = Number(a) + Number(b)
    }
    else if(operacion === '-'){
        resultado = Number(a) - Number(b)
    }

    alert(`El resultado de ${a} ${operacion} ${b} es ${resultado}`)
}


