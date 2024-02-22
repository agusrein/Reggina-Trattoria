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
        <div className='d-flex flex-column justify-content-center mt-5 mb-5 w-100 pb-5 div__container--img-message'>
         <img src="../img/icon-message.png" alt="Icono ilustrativo" className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-11 col-12"/>
          <h2 className='text-center mt-5 pt-5'>Tu orden se encuentra vacía.</h2>
          <Link to='/' className='text-center mt-3 pb-5 mb-5 text-decoration-none anchor__cart fs-5'>Hecha un vistazo a nuestro Menú!</Link>
          
        </div>
      </>
    )
  }


  return (
    <> {cart.map(prod => <CartItem key={prod.item.index} item={prod.item} count={prod.count} deleteItem={deleteToCart}/>)}
      <div className="d-flex mt-5 justify-content-center col-12">
        <h5 className="pe-2">Total de tu Orden:</h5>
        <h5>$ {total}</h5>
      </div>
      <div className="d-flex justify-content-center mt-3 mb-5 col-12 pb-5">
      <Link className='text-decoration-none col-2 me-2 shadow-sm' to='/checkout'><button className="col-12 rounded-2 btn__close-order">Finalizar Orden</button></Link>
      <button className="col-1 rounded-2 align-self-start btn__empty-cart shadow-sm"onClick={() => emptyCart()}>Vaciar Orden</button>
      </div>
      
    </>
  )
}

export default Cart