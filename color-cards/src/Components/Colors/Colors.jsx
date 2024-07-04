import React from 'react'
import './Colors.css'

const Colors = (props) => {
    return (
        <div className="colors">
            {props.colors.map((color, index) => {
                return (
                    <div className="color" style={{backgroundColor: color}} key={color + index}>
                        <span className='color-hex'>{color}</span>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Colors


