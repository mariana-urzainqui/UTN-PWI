import React from 'react'
import './ColorCard.css'
import Colors from '../Colors/Colors'


const ColorCard = (props) => {
    return (
        <div className='color-card'>
            <div className='colors'>
                <Colors colors={props.colors}/>
            </div>
            <div className='card-controls'>
                <button className='btn-like'>
                    <i className='bi bi-heart'></i>
                    {props.likes}
                </button>
                <span className='update'>
                    {props.update}
                </span>
            </div>
        </div>
    )
}

export default ColorCard
