import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {dataBase} from '../../services/config';
import {collection, getDocs, where, query} from 'firebase/firestore'

const ItemListContainer = () => {
  const [product,setProducts] = useState([])
  const {idCategory} = useParams();

  useEffect(()=>{
    const products = idCategory ? query(collection(dataBase,'Productos'),where('category','==',idCategory)) : collection(dataBase, 'Productos');
    
    getDocs(products)
    .then( res =>{
      const newProducts = res.docs.map(doc=>{
        const data = doc.data();
        return{id: doc.id, ...data}
      })
      setProducts(newProducts);
    })
    .catch(error=> console.log(error))

  },[idCategory])

  return (
   <>
   <ItemList product={product}/>
   </>
  )
}

export default ItemListContainer