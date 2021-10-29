import React from 'react';

import './banner.css'
import backgroundImg from '../../../src/assets/images/slider-eclipse.png';
import backgroundOverlay from '../../assets/images/overlay.png'
import { Col, Container, Row } from 'react-bootstrap';
import MaskGuy from '../../assets/images/slider-courier-mask.png'
const Banner = () => {


    return (
        <div>
            <div className="banner position-relative">

                <div className="background-img" style={{ backgroundImage: `url(${backgroundImg})` }}>
                    <div className="background-overlay" style={{ backgroundImage: `url(${backgroundOverlay})` }}>
                        <Container className='pt-5'>
                            <Row>
                                <Col className='' xs={12} lg={6}>
                                    <h1 className='text-xxl text-light'>Express
                                        <br />
                                        <span className='yellow-text'>Home Delivery</span>
                                    </h1>
                                </Col>
                                <Col className='' xs={12} lg={6}>
                                    <img src={MaskGuy} className='w-100' alt="" />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;