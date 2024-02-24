import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div className='mt-5 mb-0 pt-5'>
           <footer className='pt-3 d-flex align-items-center mt-5 mb-0'>
            <div className='col-3 text-center'>
                <img className='img__camarero mb-0 pb-0' src='../img/camarero.png'></img>
            </div>
            <h6 className='col-6 text-center fw-normal'>Reggina Trattoria | © 2023 Company, Inc</h6>
            <div className='col-3'>
                
                <FontAwesomeIcon icon={faTwitter} className='m-3 fs-2'/>
                <FontAwesomeIcon icon={faInstagram} className='m-3 fs-2'/>
            </div>
           </footer>
        </div>
    )
}

export default Footer