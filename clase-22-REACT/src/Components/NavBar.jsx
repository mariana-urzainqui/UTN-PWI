import React from 'react'

const NavBar = (props) => {
    const { isLogged, isAdmin, lang } = props.userData
    const languageData = props.data[lang.toUpperCase()] || props.data.EN

    return (
        <nav>
            <span>Logo</span>
            <span>{languageData.inicio}</span>
            {!isLogged && <button>{languageData.login}</button>}
            {isAdmin && <button>{languageData.producto}</button>}
        </nav>
    )
}

export default NavBar
