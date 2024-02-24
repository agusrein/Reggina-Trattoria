import React from 'react';
import './CartItem.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const CartItem = ({ item, count, deleteItem}) => {
  return (
    <>
    <div className='d-flex mt-3 justify-content-center col-12 pt-4'>
    <div className='col-4 div__container--CartItem rounded-2 p-3 shadow-sm'>
      
      <h5 className='text-center mb-2'>{item.title}</h5>
      <div className='div__dividier--cart rounded-pill'></div>
      <div className='col-12 d-flex'>
      <p className='mt-2 col-10'>Cantidad: {count}</p>
      <button className='col-2 rounded-pill btn__delete mt-2 shadow-sm' onClick={()=>deleteItem(item.index)}><FontAwesomeIcon icon={faTrashCan} className='fs-5'/></button>
      </div>
      <h5>$ {item.price}</h5>
      </div>
      </div>
    </>
  );
}

export default CartItem;