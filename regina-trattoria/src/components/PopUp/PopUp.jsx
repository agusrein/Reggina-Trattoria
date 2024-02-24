import { Link } from "react-router-dom";
import './PopUp.css';

import React from 'react'

const PopUp = ({code}) => {
  return (
    <>
        <div className="d-flex justify-content-center div__container--popUp pt-5">
                <div className="div__container--order-success p-3 col-6 rounded-2 shadow-lg d-flex flex-column">
                  <Link to='/' className='align-self-end'><button className="rounded-2 button__detail--close pb-1 text-center align-self-end">
                    x
                  </button></Link>
                  <h2 className="col-12 text-center">Muchas gracias por su compra!</h2>
                  <p className="col-12 text-center mt-2">
                    ( Tu pedido ya se encuentra en preparación )
                  </p>
                  <h5 className="col-12 text-center mt-2 div__container--order-number">
                    Tu número de orden es : {code}
                  </h5>
                  <img
                    className="img__order--succes col-12 align-self-center"
                    src="../img/icon-order-succes.png"
                    alt="Imagen de orden exitosa"
                  />
                  <div className="div__dividier rounded-pill col-9 align-self-center" />
                </div>
              </div>
    </>
  )
}

export default PopUp