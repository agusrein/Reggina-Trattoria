import React from 'react'
import './ItemDetail.css';
import { Context } from '../../context/context';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const ItemDetail = ({ title, description, price, img }) => {
  const onClose = useContext(Context);


  return (
    <>
      <div className='d-flex justify-content-center mt-5 mb-5 col-12'>
        <div className='div__container--item-detail col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-11 col-12 pt-3 pb-5 rounded-3 shadow d-flex flex-wrap'>
          <div className='col-12 m-0 p-0 text-end'><button className='me-3 rounded-1 button__detail--close' onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button></div>
          <div className='col-8'>
            <h4 className='mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-2 mt-1 mb-3 mb-xl-2 mb-xxl-2 mb-md-2 mb-sm-2 mb-lg-2  p-0 text-center pe-2 ps-2'>{title}</h4>
            <p className='mb-4 mt-2 p-0 text-center pe-5 ps-5'>{description}</p>
            <h5 className='fs-xxl-3 fs-xl-3 fs-lg-3 fs-md-3 fs-sm-6 text-center mt-xxl-5 mt-xl-5 mt-lg-5 mt-md-5 mt-sm-2 mt-1'>$ {price}</h5>
          </div>
          <div className='col-4 d-flex justify-content-center'>
            <img src={img} alt={title} className='rounded-circle img__item-detail shadow-sm col-11 img-fluid' />
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail