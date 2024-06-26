/* 
Ejecutar una peticion HTTP con metodo GET a esta direccion: https://jsonplaceholder.typicode.com/posts

Una vez obtenido el JSON de esa direccion deberas renderizar todos los posts en html en un div con la sig estructura

<div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <button>♥</button>
</div>
*/

const postContainerHTML = document.getElementById('posts-container')

const solicitarPost = async () =>{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET'
    })
    const resultado = await respuesta.json()
    
    let html = ''
    
    for (let i = 0; i < resultado.length; i++){
        const post = resultado[i]
        html += ` 
        <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button>♥</button>
        </div>
            `
    }
    postContainerHTML.innerHTML = html
}
solicitarPost()

/* 
Crear un formulario de posteo
el formulario tendra un input para el titulo 
y un textarea para el body y un boton con el texto post que active el evento submit

Cuando se envie el formulario se debera capturar titulo y body y se envia via fetch a esta direccion: 
'https://jsonplaceholder.typicode.com/posts'
Y van a mostrar por consola un 'Enviado'
*/

const formHTML = document.getElementById('post-form')
const titleHTML = document.getElementById('title')
const postHTML = document.getElementById('post')  

const postObject = (title,body) => {
    return {
        title: title,
        body: body,
    }
}

const sendPost = async (postObject) =>{
    const post = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postObject),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const resultado = await post.json()
    console.log('Enviado', resultado)
}

const handleSubmit = async (event) =>{
    event.preventDefault()
    const title = titleHTML.value
    const body = postHTML.value
    const post = postObject(title, body)
    await sendPost(post)
}

formHTML.addEventListener('submit', handleSubmit)

sendPost({
    title: 'Posteo prueba',
    body: 'Este es el body del posteo de prueba'
})



