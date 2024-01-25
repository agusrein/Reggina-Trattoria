import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Item = ({title,price,img,stock,index}) => {

  return (
    <>
  <div className="div__container--item mt-4 w-100 m-0 p-0 d-flex justify-content-center">
  <div className="shadow border border-2 rounded-3 col-xxl-6 col-xl-6 col-lg-6 col-md-8  col-12 m-0 d-flex  align-items-center">
    <div className='col-3'>
      <img className="imagen rounded-3" src={img} alt={title}></img>
    </div>
    <div className='col-9'>
    <div className='d-flex w-100 mb-3'>
      <p className="fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-5 fs-6 m-0 col-8">{title}</p>
      <p className="m-0 col-2 fw-semibold fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-5 fs-6">$ {price}</p>
      <ItemCount className='col-2' stock={stock}/>
    </div>
    <Link to={`/item/${index}`}>
    <Button className='rounded-3 col-6 shadow-sm'  variant="warning" size="sm">Más Detalles</Button>{' '}
    </Link>
    </div>
  </div>
</div>
    </>
  )
}

export default Item
