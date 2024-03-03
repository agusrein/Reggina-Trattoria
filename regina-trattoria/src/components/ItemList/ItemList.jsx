import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ product }) => {
  return (
    <div>
      {product.map(e => <Item key={e.id} title={e.title} price={e.price} img={e.img} stock={e.stock} index={e.id} />)}
    </div>
  )
}

export default ItemList