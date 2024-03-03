import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="w-100 container__nav">
        <Container>
          <Link to='/'>
            <img src='../img/logue.png' alt="Imagen de Logo" className='logue' />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='mt-3'>
            <Nav className="d-flex justify-content-evenly align-items-center w-100" >
              <NavLink to='/category/1' className='nav__link text-decoration-none fw-semibold p-2 align-self-start'>Entradas</NavLink>
              <NavLink to='/category/2' className='nav__link text-decoration-none fw-semibold p-2 align-self-start'>Pizzas</NavLink>
              <NavLink to='/category/3' className='nav__link text-decoration-none fw-semibold p-2 align-self-start'>Los Principales</NavLink>
              <NavLink to='/category/4' className='nav__link text-decoration-none fw-semibold p-2 align-self-start'>Sandwiches</NavLink>
              <NavLink to='/category/5' className='nav__link text-decoration-none fw-semibold p-2 align-self-start'>Bebidas</NavLink>
              <NavLink className='nav__link text-decoration-none fw-semibold p-2 align-self-start' to='/cart'><CartWidget /></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>

  );
}

export default NavBar;
