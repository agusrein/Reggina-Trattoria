import React from 'react'
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import { dataBase } from '../../services/config';
import { addDoc, collection } from 'firebase/firestore'
import './Checkout.css'
import { Link } from 'react-router-dom';
import PopUp from '../PopUp/PopUp';

const Checkout = () => {
  const { cart, emptyCart, total } = useContext(CartContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("")


  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !surname || !phone || !email || !emailConfirmation) {
      setError('Por favor complete todos los datos.');
      return;
    }

    if (email !== emailConfirmation) {
      setError('Los emails ingresados no coinciden.')
      return;
    }

    if (cart == 0) {
      setError('Primero debes seleccionar productos para finalizar tu orden.')
      return;
    }

    const order = {
      items: cart.map(prod => ({
        id: prod.item.index,
        name: prod.item.title,
        counr: prod.count
      })),
      total,
      date: new Date(),
      client: { name, surname, phone, email }
    }

    addDoc(collection(dataBase, 'orders'), order)
      .then(docref => {
        setOrderId(docref.id);
        emptyCart()
      })
      .catch(error => console.log('Error al generar la orden de compra.', error))
  }


  return (
    <>
      <div className='d-flex align-items-center mb-5 mt-4 flex-column col-12'>
        {cart.length > 0 && (
          <div className=' p-3 div__container--cart-checkout col-xxl-6 col-xl-6 col-lg-6 rounded-2 shadow-sm'>
            <h5 className='text-center mt-2 mb-2 pt-1'>Resumen de compra</h5>

            <table className='w-100 table__container--cart-checkout mt-4 mb-4'>
              <tbody className='w-100'>
                <tr>
                  <td className='col-2 fw-normal ps-3 fw-semibold pb-1'>Cantidad</td>
                  <td className='col-7 fw-normal ps-3 fw-semibold pb-1'>Detalle</td>
                  <td className='col-3 fw-normal text-center fw-semibold pb-1'>Precio</td>
                </tr>

                {cart.map(prod => (
                  <tr className='' key={prod.item.index}>
                    <td className='col-2 ps-3 pt-1 pb-1'>{prod.count} </td>
                    <td className='col-7 ps-3 pt-1 pb-1'>{prod.item.title}</td>
                    <td className='col-3 text-center pt-1 pb-1'>$ {prod.item.price}</td>
                  </tr>))}

              </tbody>
            </table>
            <Link className='text-decoration-none' to="../cart"><p className='text-center mt-2 mb-2'>¿Deseas modificar tu compra?</p></Link>
          </div>
        )}

        <form className='d-flex flex-column align-items-center col-5 mt-5 pb-3 pt-3 rounded-2 shadow-sm' onSubmit={submitHandler}>
          <h3 className='mt-5 mb-2'>Estas a un Paso de Finalizar tu Pedido!</h3>
          <p className='text-center mb-4'>Completa el siguiente formulario</p>
          <div className='d-flex col-11 justify-content-between'>
            <input className='shadow-sm rounded-2 me-1 w-100' type="text" onKeyDown={() => setError('')} placeholder='Ingrese Nombre' onChange={(e) => setName(e.target.value)} />
            <input className='shadow-sm rounded-2 ms-1 w-100' type="text" onKeyDown={() => setError('')} placeholder='Ingrese Apellido' onChange={(e) => setSurname(e.target.value)} />
          </div>
          <input className='shadow-sm mt-4 col-11 rounded-2' type="number" onKeyDown={() => setError('')} placeholder='Teléfono' onChange={(e) => setPhone(e.target.value)} />
          <input className='shadow-sm mt-4 col-11 rounded-2' type="email" onKeyDown={() => setError('')} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <input className='shadow-sm mt-4 col-11 rounded-2' type="email" onKeyDown={() => setError('')} placeholder='Confirmar Email' onChange={(e) => setEmailConfirmation(e.target.value)} />
          <div className='d-flex w-100 m-0 p-0'>
            <div className='d-flex flex-column col-7 justify-content-center align-content-center m-0 p-0'>
              <button className='shadow-sm ms-4 col-11 btn__order rounded-2' type='submit'>Ordenar</button>
              {
                error && <p className='form__error col-12 text-center ps-2 mt-1'>{error}</p>
              }
            </div>
            <img src="../img/icon-rute-not-found.png" alt="Imagen de icono" className='div__container--img-not-found col-4 img-fluid ' />
          </div>
        </form>
      </div>
      {
          orderId && <PopUp code={orderId}/> 
           }
    </>
  )
}

export default Checkout