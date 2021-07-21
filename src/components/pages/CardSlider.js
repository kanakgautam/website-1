import React, { useState } from 'react'
import CardArray10 from './CardArray10'
import './CardSlider.css'

function CardSlider() {

    const [arr, setArr] = useState([0, 1])
    const [small, setSmall]=useState(false);
    const max = (item1, item2) => {
        if (item1 >= item2) {
            return item1;
        }
        else {
            return item2;
        }
    }
    const min = (item1, item2) => {
        if (item1 <= item2) {
            return item1;
        }
        else {
            return item2;
        }
    }
    const increaseArr = () => {
        const arr1 = []
        for (let i = 0; i < 2; i++) {
            arr1.push(min(arr[i] + 1, 2 + i));
        }
        setArr(arr1);
    }
    const decreaseArr = () => {
        const arr1 = []
        for (let i = 0; i < 2; i++) {
            arr1.push(max(arr[i] - 1, 0 + i));
        }
        setArr(arr1);
    }


    return (
        <div className='card-slider-container'>
            <button className='card-slider-button' onClick={decreaseArr}>&lt;</button>
            {CardArray10.map((item, index) => {
                if (index <= arr[1] && index >= arr[0]) {
                    return (
                        <div className='card-slider-card'>
                            <p className='card-slider-card-para'>{item.para}</p>
                            <div className='card-slider-card-description'>
                            <h5 className='card-slider-card-name'>{item.name}</h5>
                            <p className='card-slider-card-post'>{item.post}</p>
                            </div>
                        </div>
                    )
                }
            })}
            <button className='card-slider-button' onClick={increaseArr}>&gt;</button>
        </div>
    )
}

export default CardSlider
