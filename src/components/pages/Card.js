import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className='card-container'>
            <img src={props.src} className='card-img'/>
            <h1 className='card-heading'>{props.title}</h1>
            <p className='card-para'>{props.para}</p>
        </div>
    )
}

export default Card
