import React from 'react'
import './CardContainer.css'
import ColorCard from '../ColorCard/ColorCard'


const CardContainer = (props) => {
    return (
        <div className='color-cards-container'>
            {props.colorCards.map((colorCard, index) => {
                return (
                    <ColorCard
                        key={index}
                        colors={colorCard.colors}
                        likes={colorCard.likes}
                        update={colorCard.update}
                    />
                )
            })
            }
        </div>
    )
}

export default CardContainer
