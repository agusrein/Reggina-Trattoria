import React from 'react';
import { useState } from 'react';
import './ItemCount.css'



const ItemCount = ({ stock }) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className='d-flex'>
                <button className='m-0 fw-bold p-1 btn__item--count rounded-circle shadow-sm' onClick={increment}>+</button>
                <span className='p-0 m-0'>{count}</span>
                <button className='m-0 fw-bold p-1 btn__item--count rounded-circle shadow-sm' onClick={decrement}>-</button>
            </div>
        </>
    )
}

export default ItemCount