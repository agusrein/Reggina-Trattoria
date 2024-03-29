import React from 'react';
import { useState } from 'react';
import './ItemCount.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


const ItemCount = ({ stock, functionAdd }) => {

    const [count, setCount] = useState(0);

    const functionSet = () => {
        setCount(0)
    }


    const renderCount = count > 0;

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
            <div className='d-flex flex-column'>
                <div className='d-flex'>
                    <button className='m-0 fw-bold p-1 btn__item--count rounded-2 shadow-sm' onClick={increment}><FontAwesomeIcon icon={faPlus} /></button>
                    {renderCount && (<span className='p-0 m-0'>{count}</span>)}
                    {renderCount && (
                        <button className='m-0 fw-bold p-1 btn__item--count rounded-2 shadow-sm' onClick={decrement}><FontAwesomeIcon icon={faMinus} /></button>
                    )}

                </div>
                <div>
                    {renderCount && (<button className='d-flex align-items-center btn__item--order btn mt-2' onClick={() => { functionAdd(count); functionSet(); }}>Ordenar</button>)}
                </div>
            </div>
        </>
    )
}

export default ItemCount