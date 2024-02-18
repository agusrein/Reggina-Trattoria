import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className='w-100 container__nav'>
        <Link to='/'>
          <img src='../img/logue.png' alt="Imagen de Logo" className='logue' />
        </Link>
        <div className='d-flex justify-content-evenly align-items-center w-100'>
          <NavLink to='/category/1' className='nav__link text-decoration-none fw-semibold ps-2 pe-2 text-center'>Entradas</NavLink>
          <NavLink to='/category/2' className='nav__link text-decoration-none fw-semibold ps-2 pe-2 text-center'>Pizzas</NavLink>
          <NavLink to='/category/3' className='nav__link text-decoration-none fw-semibold ps-2 pe-2 text-center'>Los Principales</NavLink>
          <NavLink to='/category/4' className='nav__link text-decoration-none fw-semibold ps-2 pe-2 text-center'>Sandwiches</NavLink>
          <NavLink to='/category/5' className='nav__link text-decoration-none fw-semibold ps-2 pe-2 text-center'>Bebidas</NavLink>
          <NavLink className='nav__link text-decoration-none fw-semibold ps-2 pe-2' to='/cart'><CartWidget/></NavLink>
        </div>
      </nav>
    </>

  );
}

export default NavBar;
