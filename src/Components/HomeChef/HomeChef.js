import React from 'react';
import { Col, Row } from 'react-bootstrap';
import girlChef from '../../assets/images/gir-chef.png'
import donutBg from '../../assets/images/bg-shape.png'
import { useForm } from 'react-hook-form';
import './homeChef.css'
const HomeChef = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div>
            <div className='w-100 block container-fluid py-4' style={{ backgroundImage: `url(${donutBg})`, backgroundSize: 'auto', backgroundColor: '#FCA311', backgroundRepeat: 'no-repeat' }}>
                <Row className='container m-5 mx-auto g-4'>
                    <Col xs={12} lg={4} className='bg-light py-2 rounded-3'>
                        <div><h3 className='text-dark'>Register Now
                        </h3></div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='form-control mb-3' type="text" placeholder="Full Name" {...register("Full Name", { required: true, maxLength: -2 })} />
                                <input className='form-control mb-3' type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                <input className='form-control mb-3' type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, maxLength: 12 })} />

                                <input className='btn btn-outline-warning w-100 text-dark' type="submit" />
                            </form>
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <h3>Become A HomeChef.</h3>
                        <p>Now you can make food happen pretty much wherever you are thanks to the free easy-to-use</p>
                        <Row className='mt-lg-5 md-xs-2'>
                            <Col className='bg-light m-2 py-2 text-center rounded'>
                                <i class="fal fa-burger-soda fs-2 text-warning "></i>
                                <h4>155+</h4>
                                <h6>Food</h6>
                            </Col>
                            <Col className='bg-light m-2'>
                                <img src="" alt="" />
                                <h3>OK</h3>
                                <h5>Clients</h5>
                            </Col>
                            <Col className='bg-light m-2'>
                                <img src="" alt="" />
                                <h3>35+</h3>
                                <h5>Chef</h5>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4} className='position-relative'>
                        <div className='contact-chef d-none d-lg-block'>
                            <img src={girlChef}  alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HomeChef;