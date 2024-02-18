import React from 'react';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);
  return (
    <Link to='/cart' className='text-decoration-none'>
    <div className='div__container--carrito'>
        <img src='../img/carrito.png' alt='Imagen de carrito' className='carrito mt-0 mb-0'></img>
        { totalQuantity > 0 && <p className='mb-0'>{totalQuantity}</p>}
    </div>
    </Link>
  )
}

export default CartWidget