import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';





const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>

          <Route path='*' element={<div className='d-flex flex-column justify-content-center mt-5 mb-5 w-100 pb-5'><h2 className='text-center mt-5 pt-5'>Lo sentimos</h2><h5 className='text-center pb-5 mb-5'>No se ha encontrado la ruta especificada</h5></div>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App