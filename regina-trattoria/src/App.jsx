import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';





const App = () => {

  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<div className='d-flex flex-column justify-content-center mt-5 mb-5 w-100 pb-5'><h2 className='text-center mt-5 pt-5'>Lo sentimos</h2><h5 className='text-center pb-5 mb-5'>No se ha encontrado la ruta especificada</h5></div>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App