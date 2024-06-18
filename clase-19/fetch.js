//Inspeccionar-Red se ven todas las consultas

/* Fetch es una funcion que me permite hacer peticiones http, recibe dos parametros:
1) URL (un string que sera la url a la que vamos a consultar o peticionar)
2) un objeto de configuracion de la peticion
Retorna PROMISE que tiene 3 estados: 1ero pending (cuando esta pendiente) y dsp onFullFilled o Resolved (cuando se resuelve correctamente) o sino onRejected rejected (cuando falla)
 */

//Fetch es codigo asincronico
fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'GET'
})

/* Metodos HTTP:
- GET: me trae todo 
- POST: voy a enviar datos*/

// body: carga util headers: configuracion de la consulta

//async: hace que nuestra funcion se vuelva asincronica y retorne promise
//await : para que se resuelva eso primero

const solicitarUsuario = async () =>{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'GET'
    })
    console.log(respuesta)
    const resultado = await respuesta.json()
    console.log(resultado)
}



