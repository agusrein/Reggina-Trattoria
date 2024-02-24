import React from 'react';
import { useState,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { dataBase } from '../../services/config';
import {getDoc, doc} from 'firebase/firestore';
import CustomSpinner from '../CustomSpinner/CustomSpinner';


const ItemDetailContainer = ({index}) => {

const [productDetail,setProductDetail] = useState('');
const [loading, setLoading] = useState(true);
const idItem = index;

useEffect(()=>{

  setLoading(true);

  const newDoc = doc(dataBase,'Productos',idItem)

  getDoc(newDoc)
  .then(res=>{
    const data = res.data();
    const newProduct = {id: res.id, ...data};
    setProductDetail(newProduct)
  })
  .catch(error=>console.log(error))
  .finally(() => {
    setLoading(false)
  });

},[idItem])

  return (
    <div>
      {loading && <CustomSpinner/> }
      <ItemDetail stock={productDetail.stock} title={productDetail.title} description={productDetail.description} img={productDetail.img} price={productDetail.price}/>
    </div>
  )
}

export default ItemDetailContainer