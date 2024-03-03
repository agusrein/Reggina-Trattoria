import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Context } from '../../context/context';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';



const Item = ({ title, price, img, stock, index }) => {

  const { addToCart } = useContext(CartContext);
  const { view } = useContext(CartContext);


  // Manejadores de agregado al carro de compras.
  const [addQuantity, setAddQuantity] = useState(0);


  const quantityHandler = (count) => {
    setAddQuantity(count);
    const item = { index, title, price };
    addToCart(item, count);
  }



  // Manejadores de Renderizado itemDetail
  const [render, setRender] = useState(false);

  const renderHandler = () => {
    setRender(!render);
  }
  const onClose = () => {
    setRender(false);
  }




  return (
    <>
      <Context.Provider value={onClose}>
        <div className="mt-4 w-100 m-0 p-0 d-flex justify-content-center">
          <div className="div__container--item shadow div__item--border rounded-3 col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-11 col-12 m-0 d-flex  align-items-center">
            <div className='col-3 div__container--item-img'>
              <img className="img rounded-2" src={img} alt={title}></img>
            </div>
            <div className='col-9 ps-2'>
              <div className='d-flex w-100 mt-3 col-12 justify-content-evenly'>
                <p className="fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-5  m-0 col-6">{title}</p>
                <p className="m-0 col-2 fw-semibold fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-5 fs-7">$ {price}</p>
                <ItemCount clasName='col-3' stock={stock} functionAdd={quantityHandler} />
              </div>
              <Button className='rounded-3 col-6 shadow-sm btn__item--details' variant="warning" size="sm" onClick={renderHandler}>Más Detalles</Button>
              {addQuantity > 0 && <Link className="text-decoration-none" to='/cart'><p className='mt-2 div__container--p-quantity'>Has agregado {view} unidades a tu pedido.¿Deseas visualizarlo?</p></Link>}
            </div>
          </div>
        </div>
        <div>
          {render && <ItemDetailContainer index={index} />}
        </div>
      </Context.Provider>
    </>
  )
}

export default Item
