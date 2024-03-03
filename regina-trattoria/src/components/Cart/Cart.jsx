import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import './Cart.css'


const Cart = () => {
  const { cart, total, totalQuantity, emptyCart, deleteToCart } = useContext(CartContext)

  if (totalQuantity === 0) {
    return (
      <>
        <div className='d-flex flex-column justify-content-center col-12 pb-5 div__container--img-message'>
          <div className="d-flex div__container--img justify-content-center col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-11 col-11"></div>
          <h2 className='text-center mt-5 pt-5 col-11'>Tu orden se encuentra vacía.</h2>
          <Link to='/' className='text-center col-12 mt-3 pb-5 mb-5 text-decoration-none anchor__cart fs-5'>Hecha un vistazo a nuestro Menú!</Link>

        </div>
      </>
    )
  }


  return (
    <>
      <div style={{ minHeight: "70vh" }}>
        {cart.map(prod => <CartItem key={prod.item.index} item={prod.item} count={prod.count} deleteItem={deleteToCart} />)}
        <div className="d-flex mt-5 justify-content-center col-12" >
          <h5 className="pe-2">Total de tu Orden:</h5>
          <h5>$ {total}</h5>
        </div>
        <div className="d-flex justify-content-center mt-3 mb-5 col-12 pb-5">
          <Link className='text-decoration-none col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-6 me-2 shadow-sm' to='/checkout'><button className="col-12 rounded-2 btn__close-order">Finalizar Orden</button></Link>
          <button className="col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-5 rounded-2 align-self-start btn__empty-cart shadow-sm" onClick={() => emptyCart()}>Vaciar Orden</button>
        </div>
      </div>

    </>
  )
}

export default Cart