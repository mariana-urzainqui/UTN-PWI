const validarEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validadPassword = (password) =>{
    return password && password >= 6 && password.toLowerCase() !== password
}

const login = () =>{
    const usuario = {
        email: null,
        password: null
    }

    let email = prompt('Ingrese un email')
    while(!validarEmail(email)){
        email = prompt('Error email invalido: Ingrese nuevamente el email')
    }
    usuario.email = email

    let password = prompt('Ingrese la password que tenga más de 6 caracteres y una mayuscula')
    while(!validadPassword(password)){
        password = prompt('Error password invalida')
    }
    usuario.password = password

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}


const calculadora = () =>{
    
}

const solictarYValidarNumero = () =>{
    let numero = prompt('Ingrese un numero')
    while(!numero || isNaN(numero)){
    alert('Error: dato no válido')
    numero = prompt('Ingrese un dato numérico')
    }      
}

const operacion = (numero1,numero2,operador) =>{
    if (operador === '+'){
        return numero1 + numero2
    }
    else if (operador === '-'){
        return numero1 - numero2
    }
}   

