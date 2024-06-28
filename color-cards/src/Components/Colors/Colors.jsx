import React from 'react'
import './Colors.css'

const Colors = (props) => {
    return (
        <div className="colors">
            {props.colors.map((color, index) => {
                return (
                    <div className="color" key={index} style={{backgroundColor: color}}>
                        <span>{color}</span>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Colors


