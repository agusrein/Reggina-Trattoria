import React from 'react';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (

    <div className='div__container--cart'>
      <FontAwesomeIcon icon={faCartShopping} style={{ color: "#393937", }} className='fs-4' />
      {
        totalQuantity > 0 &&
        <div className='div__container--cart-heart'>
          <FontAwesomeIcon icon={faHeart} />
          <span>{totalQuantity}</span>
        </div>
      }
    </div>

  )
}

export default CartWidget