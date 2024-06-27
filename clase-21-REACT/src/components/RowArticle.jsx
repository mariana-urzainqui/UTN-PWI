import React from "react"

const RowArticle = (props) => {
    return(
    <div>
        <div>
            <h2>{props.titulo}</h2>
            <a href="https://developer.mozilla.org/">{props.direccion_author}</a>
        </div>
        <div>
            <span>{props.fecha}</span>
        </div>
    </div>
    )
}


export default RowArticle