import React from 'react';
import { useState,useEffect } from 'react';
import { getOneProduct } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

const [productDetail,setProductDetail] = useState('');
const {idItem} = useParams();

useEffect(()=>{
  getOneProduct(idItem)
  .then(resp => setProductDetail(resp))
},[idItem])

  return (
    <div>
      <ItemDetail title={productDetail.title} description={productDetail.description} img={productDetail.img} price={productDetail.price}/>
    </div>
  )
}

export default ItemDetailContainer