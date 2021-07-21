import React, { useState } from 'react'
import './SCard.css'
function SCard(props) {

    const[active,setActive]=useState(false);

    const onMouseOver = () =>{
        setActive(true);
    }

    const onMouseLeave = () =>{
        setActive(false);
    }

    return (
        <div className='scard-container' onMouseLeave={onMouseLeave}>
            <img className='scard-img' src={props.src} onMouseOver={onMouseOver} />
            {active && <button className='scard-btn'>+</button>}
            <h1 className='scard-title'>{props.title}</h1>
            <h1 className='scard-label'>{props.label}</h1>
        </div>
    )
}

export default SCard
