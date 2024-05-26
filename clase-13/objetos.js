// Tipos de datos Objetos: Tiene propiedades o atributos ej:

/* let usuario = {
    'edad': 19,
    'nombre': 'juan',
    'apellido': 'suarez',
    'mejor amigo':{
        'nombre': 'juan'
    }
} */

/*
Crear un objeto llamado producto que tenga las sig propiedades
precio : number
nombre : string
marca : string
id : number
descripcion : string
*/

/* let producto ={
    precio: 200,
    nombre: 'Remera',
    marca: 'Bullbenny',
    id: 6287,
    descripcion: 'Remera Negra Bullbenny',
} */

// Como los llamo: objeto ['propiedad']


/* const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    }
} */
/*
Por consola mostrar un informe del usuario
'El usuario {nombre} {lastname} tiene las preferencias de usuario en:\nModo: {theme} \nLenguaje: {lang}'
*/

/* console.log('El usuario ' + user['name'] + ' ' + user['lastname'] + ' ' + 'tiene las preferencias de usuario en: ' + '\n' + 'Modo: ' + user['user preferences']['theme'] + '\n' + 'Lenguaje' + user['user preferences']['lang'])  */



/* 'El usuario {name} {lastname} creo su cuenta en fecha {created_at} vive en {adress} y su telefono es {tel}'*/

/* const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences': {
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user info': {
        'created_at': '18/9/2005',
        'adress': 'av siempre viva 742',
        tel: '+22 1323-2122'
    }
}

console.log('El usuario ' + user['name'] + ' ' + user['lastname'] + ' creo su cuenta en fecha ' + user['user info']['created_at'] + ' y su telefono es ' + user['user info']['tel'])

console.log(`El usuario ${user['name']} ${user['lastname']} creo su cuenta en ${user['user info']['created_at']} y su telefono es ${user['user info']['tel']}`) */

/* console.log(`El usuario ${user.name} ${user.lastname} creo su cuenta en ${user['user info']['created_at']} y su telefono es ${user['user info'].tel}`) */

/* Crear una funcion llamada
calcularIva(precio, tipo_factura)
tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
calcularIva(100, 'C' | 'B')
{
    precio: 121
    iva: 21
    precioConIva: 121,
    factura: 'B' | 'C'
}
En el caso de si la factura es A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
}
 */

const calcularIva = (precio,tipo_factura) => {
    if(tipo_factura === 'B' || tipo_factura ==='C'){
        return{
            precio: precio *1.21,
            iva: precio *0.21,
            precioConIva: precio *1.21,
            factura: tipo_factura,
        }
    }
    else if(tipo_factura === 'A'){
        return{
            precio: precio,
            iva: precio *0.21,
            precioConIva: precio *1.21,
            factura: tipo_factura, 
        }
    }
}