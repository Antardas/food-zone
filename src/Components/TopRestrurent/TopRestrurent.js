import React from 'react';
import { Col, Row } from 'react-bootstrap';
import resturent1 from '../../assets/images/restrurent/01.jpg'
import resturent2 from '../../assets/images/restrurent/02.jpg'
import resturent3 from '../../assets/images/restrurent/03.jpg'
import resturent4 from '../../assets/images/restrurent/04.jpg'
import resturent5 from '../../assets/images/restrurent/05.jpg'
import resturent6 from '../../assets/images/restrurent/06.jpg'
import resturent7 from '../../assets/images/restrurent/07.jpg'
import resturent8 from '../../assets/images/restrurent/08.jpg'
import resturent9 from '../../assets/images/restrurent/09.jpg'
import resturent10 from '../../assets/images/restrurent/10.jpg'

const TopRestrurent = () => {
    return (
        <div style={{ backgroundColor: "#FAFEFF" }} className='py-5'>
            <div className='text-center'>
                <h1>Top Restaurants</h1>
                <p className='fs-5 w-50 mx-auto text-dark-50'>Completely network impactful users whereas next-generation applications engage out thinking via tactical action.</p>

                <div>
                    <Row className='container g-2 rounded-3 mx-auto'>
                        <Col xs={6} md={3} lg='auto' className='rounded'>
                        <img src={resturent1} alt="" />
                        </Col>
                        <Col xs={6} md={3} lg='auto' className='rounded'>
                        <img src={resturent2} alt="" />
                        </Col>
                        <Col xs={6} md={3} lg='auto' className='rounded'>
                        <img src={resturent3} alt="" />
                        </Col>
                        <Col xs={6} md={3} lg='auto' className='rounded'>
                        <img src={resturent4} alt="" />
                        </Col>
                        <Col xs={6} md={3} lg='auto' className='rounded'>
                        <img src={resturent5} alt="" />
                        </Col>
                        <Col xs={6} md={3} lg='auto' className='rounded'>
                        <img src={resturent6} alt="" />
                        </Col>
                        <Col xs={6} md={3} lg='auto' className='rounded'>
                        <img src={resturent7} alt="" />
                        </Col>
                        <Col xs={6} md={3} lg='auto' className='rounded'>
                        <img src={resturent8} alt="" />
                        </Col>
                        <Col xs={6} md={3} lg='auto' className='rounded'>
                        <img src={resturent9} alt="" />
                        </Col>
                        <Col xs={6} md={3} lg='auto' className='rounded'>
                        <img src={resturent10} alt="" />
                        </Col>
                    </Row>
                </div>

            </div>
        </div>
    );
};

export default TopRestrurent;