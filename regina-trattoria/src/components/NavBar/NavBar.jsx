import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <nav>
        <img src='./img/logue.png' alt="Imagen de Logo" />
            <ul>
                <li>Entradas</li>
                <li>Platos Principales</li>
                <li>Mi pedido</li>
            </ul>
            <CartWidget/>
        </nav>

    </header>
  )
}

export default NavBar