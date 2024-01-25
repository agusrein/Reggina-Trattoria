import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({title,description,price,img}) => {
  return (
    <>
    <div className='d-flex justify-content-center mt-5 mb-5'>
    <div className='div__container--item-detail col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-12 pt-5 pb-5 rounded-3 shadow d-flex'>
      <div className='col-8'>
      <h4 className='mt-4 mb-2 p-0 text-center pe-2 ps-2'>{title}</h4>
      <p className='mb-4 mt-2 p-0 text-center pe-5 ps-5'>{description}</p>
      <h5 className='fs-3 text-center mt-5'>$ {price}</h5>
      </div>
      <div className='col-4 d-flex justify-content-center'>
        <img src={img} alt={title} className='rounded-circle img__item-detail shadow-sm' />
      </div>
    </div>
    </div>
    </>
  )
}

export default ItemDetail