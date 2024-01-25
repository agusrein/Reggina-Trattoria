import React from 'react'
import './Footer.css';



const Footer = () => {
    return (
        <div className='mt-5 mb-0 pt-4'>
           <footer className='pt-3 d-flex align-items-center mt-5 mb-0'>
            <div className='col-3 text-center'>
                <img className='img__camarero mb-0 pb-0' src='../img/camarero.png'></img>
            </div>
            <h6 className='col-6 text-center fw-normal'>Reggina Trattoria | © 2023 Company, Inc</h6>
            <div className='col-3'>
                
               <i className='p-2'>icono</i> 
               <i className='p-2'>icono</i> 
            </div>
           </footer>
        </div>
    )
}

export default Footer