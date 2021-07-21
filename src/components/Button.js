import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

function Button() {
    return (
        <div>
           <Link to='/'>
               <button className='btn'>Get started</button>
           </Link> 
        </div>
    )
}

export default Button
