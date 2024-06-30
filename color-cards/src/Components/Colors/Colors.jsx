import React from 'react'
import './Colors.css'

const Colors = (props) => {
    return (
        <div className="colors">
            {props.colors.map((color) => {
                return (
                    <div className="color" style={{backgroundColor: color}}>
                        <span className='color-hex'>{color}</span>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Colors


