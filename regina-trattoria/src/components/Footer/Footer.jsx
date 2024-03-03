import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div className='mt-5 mb-0'>
            <footer className='pt-3 d-flex align-items-center mt-5 mb-0 col-12'>
                <div className='col-3 text-center align-self-end'>
                    <img className='img__camarero mb-0 pb-0' src='../img/camarero.png'></img>
                </div>
                <div className='col-9 d-flex justify-content-evenly align-items-center'>
                    <h6 className='col-8 text-center fw-normal'>Reggina Trattoria | © 2023 Company, Inc</h6>
                    <div className='col-4 d-flex flex-wrap'>

                        <FontAwesomeIcon icon={faTwitter} className='m-3 fs-2' />
                        <FontAwesomeIcon icon={faInstagram} className='m-3 fs-2' />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer