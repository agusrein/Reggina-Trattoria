import React from 'react';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);
  return (
    <Link to='/cart' className='text-decoration-none'>
    <div className='div__container--carrito'>
    <FontAwesomeIcon icon={faCartShopping} style={{color: "#393937",}} className='fs-4'/>
        { totalQuantity > 0 && <p className='mb-0'>{totalQuantity}</p>}
    </div>
    </Link>
  )
}

export default CartWidget