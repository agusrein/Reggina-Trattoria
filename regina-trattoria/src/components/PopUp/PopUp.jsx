import { Link } from "react-router-dom";
import './PopUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const PopUp = ({ code }) => {
  return (
    <>
      <div className="d-flex justify-content-center div__container--popUp pt-5">
        <div className="div__container--order-success p-3 col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-11 col-12 rounded-2 shadow-lg d-flex flex-column">
          <Link to='/' className='align-self-end'><button className='me-1 rounded-1 button__detail--close' ><FontAwesomeIcon icon={faXmark} /></button></Link>
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