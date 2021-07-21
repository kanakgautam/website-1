import React from 'react'
import './SmallCard.css'

function SmallCard(props) {
    return (
        <div className='small-card-container'>
            <button className='small-card-btn'>✔</button>
            <h1 className='small-card-heading'>{props.title}</h1>
        </div>

    )
}

export default SmallCard

