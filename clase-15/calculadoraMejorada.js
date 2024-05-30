const validarEmail = (email) =>{
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
}

const validadPassword = (password) =>{
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

