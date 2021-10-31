import React from 'react';
import bg from '../../assets/images/bg-shape.png'
import logo from '../../assets/images/logo.png'
const Footer = () => {
    return (
        <div id='footer'>
            <div className='bg-dark w-100 py-5 bg-dark mt-5' style={{ backgroundImage: `url(${bg})` }}>
                <div className='' style={{ backgroundColor: '' }}>

                    <div className=' mx-auto'>
                        <img className='mx-auto d-block' src={logo} alt="" />
                    </div>
                </div>
                <div className='d-flex fs-2 justify-content-center text-light mt-5'>
                    <div>
                        <a className='text-light' href="https://www.google.com"><i className="fab me-4 d-inline-block fa-facebook"></i></a>
                        <a className='text-light' href="https://www.google.com"><i className="fab me-4 d-inline-block fa-twitter"></i></a>
                        <a className='text-light' href="https://www.google.com"><i className="fab me-4 d-inline-block fa-instagram"></i></a>
                        <a className='text-light' href="https://www.google.com"><i className="fab me-4 d-inline-block fa-google-plus"></i></a>
                        <a className='text-light' href="https://www.google.com"><i className="far me-4 d-inline-block fa-envelope"></i></a>
                    </div>

                </div>
                <div >
                    <hr />
                    <h3 className='text-light text-center mt-5'>Copyright All Right Reserved</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;