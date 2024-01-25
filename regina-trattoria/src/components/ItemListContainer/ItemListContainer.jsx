import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts,getProductByCategory } from '../../asyncmock';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [product,setProducts] = useState([])
  const {idCategory} = useParams();

  useEffect(()=>{
    
    const functionProducts = idCategory ? getProductByCategory : getProducts;
    functionProducts(idCategory)
    .then(resp => setProducts(resp))

  },[idCategory])

  return (
   <>
   <ItemList product={product}/>
   </>
  )
}

export default ItemListContainer