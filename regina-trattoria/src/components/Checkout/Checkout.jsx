import React from 'react'
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import {dataBase} from '../../services/config';
import {addDoc, collection} from 'firebase/firestore'
import './Checkout.css'
import { Link } from 'react-router-dom';

const Checkout = () => {
  const {cart,emptyCart,total} = useContext(CartContext);
  const [name,setName] = useState("");
  const [surname,setSurname] = useState("");
  const [email,setEmail] = useState("");
  const [emailConfirmation,setEmailConfirmation] = useState("");
  const [phone,setPhone] = useState("");
  const [orderId,setOrderId] = useState("");
  const [error,setError] = useState("")


  const submitHandler = (e) =>{
    e.preventDefault();

    if (!name || !surname || !phone || !email || !emailConfirmation){
      setError('Por favor complete todos los datos.');
      return;
    }

    if (email !== emailConfirmation) {
      setError('Los emails ingresados no coinciden.')
      return;
    }

    if(cart==0){
      setError('Primero debes seleccionar productos para finalizar tu orden.')
      return;
    }

    const order = {
      items: cart.map(prod=> ({
        id: prod.item.index,
        name: prod.item.title,
        counr: prod.count
      })),
      total,
      date : new Date(),
      client: {name,surname,phone,email}
    }

    addDoc(collection(dataBase, 'orders'), order)
      .then(docref=>{
        setOrderId(docref.id);
        emptyCart()
      })
      .catch(error=> console.log('Error al generar la orden de compra.', error))
  }


  return (
    <>
    <div className='d-flex align-items-center mb-5 mt-2 flex-column col-12'>
      <h3 className='mt-5 mb-3'>Estas a un Paso de Finalizar tu Pedido!</h3>
      <form className='d-flex flex-column align-items-center w-100 mt-4' onSubmit={submitHandler}>
        {
          cart.map(prod=>(
            <div key={prod.item.index} className='col-5 mt-3'>
              <p>{prod.item.title}</p>
              <p>{prod.item.price}</p>
              <p>{prod.count}</p>
            </div>

          ))
        }
        <input className='mt-4 col-5 rounded-2' type="text" onKeyDown={()=>setError('')} placeholder='Ingrese Nombre' onChange={(e)=>setName(e.target.value)}/>
        <input className='mt-4 col-5 rounded-2' type="text" onKeyDown={()=>setError('')} placeholder='Ingrese Apellido' onChange={(e)=>setSurname(e.target.value)}/>
        <input className='mt-4 col-5 rounded-2' type="number" onKeyDown={()=>setError('')} placeholder='Teléfono' onChange={(e)=>setPhone(e.target.value)}/>
        <input className='mt-4 col-5 rounded-2' type="email" onKeyDown={()=>setError('')} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input className='mt-4 col-5 rounded-2' type="email" onKeyDown={()=>setError('')} placeholder='Confirmar Email' onChange={(e)=>setEmailConfirmation(e.target.value)}/>

        {
          error && <p className='mt-3 form__error'>{error}</p>
        }

        <button className='col-5 btn__order rounded-2 mt-2' type='submit'>Ordenar</button>

        {
          orderId && <p className='mt-5 fw-semibold'>GRACIAS POR SU COMPRA SU NRO DE ORDEN : {orderId}</p>
        }


      </form>
    </div>
    </>
  )
}

export default Checkout