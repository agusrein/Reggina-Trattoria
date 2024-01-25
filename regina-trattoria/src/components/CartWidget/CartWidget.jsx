import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='div__container--carrito'>
        <h5 className='nav-link mb-0'>Mi Pedido</h5>
        <img src='../img/carrito.png' alt='Imagen de carrito' className='carrito mt-0 mb-0'></img>
        <p className='mb-0'>2</p>
    </div>
  )
}

export default CartWidget