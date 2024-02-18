import React from 'react';
import { useState,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
// import { useParams } from 'react-router-dom';
import { dataBase } from '../../services/config';
import {getDoc, doc} from 'firebase/firestore';


const ItemDetailContainer = ({index}) => {

const [productDetail,setProductDetail] = useState('');
// const {idItem} = useParams();
const idItem = index;

useEffect(()=>{
  const newDoc = doc(dataBase,'Productos',idItem)

  getDoc(newDoc)
  .then(res=>{
    const data = res.data();
    const newProduct = {id: res.id, ...data};
    setProductDetail(newProduct)
  })
  .catch(error=>console.log(error))
},[idItem])

  return (
    <div>
      <ItemDetail stock={productDetail.stock} title={productDetail.title} description={productDetail.description} img={productDetail.img} price={productDetail.price}/>
    </div>
  )
}

export default ItemDetailContainer