import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='div__container--carrito'>
        <img src='./img/carrito.png' alt='Imagen de carrito' className='carrito'></img>
        <p>3</p>
    </div>
  )
}

export default CartWidget