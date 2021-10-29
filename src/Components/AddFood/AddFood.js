import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddFood = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <Container>

                <form onSubmit={handleSubmit(onSubmit)} className='grid'>
                    <Row xs={1} md={3}>


                        <Col>
                            <label htmlFor="foodName">Food Name</label>
                            <input className='form-control'  type="text" id="foodName" className='form-control' placeholder="Food Name" {...register("foodName", { required: true, maxLength: 80 })} />
                        </Col>
                        <Col>
                            <label htmlFor="description">Description</label>
                            <input className='form-control'  type="text" id='description' placeholder="description" {...register("description", { required: true, maxLength: 100 })} />
                        </Col>
                        <Col>
                            <label htmlFor="price">Price</label>
                            <input className='form-control'  type="number" id='price' placeholder="price" {...register("price", { required: true, pattern: /^\S+@\S+$/i })} />
                        </Col>
                        <Col>
                            <label htmlFor="foodImg">Food Image</label>
                            <input className='form-control'  type="url" id='foodImg' placeholder="food image" {...register("foodImg", { required: true })} />
                        </Col>
                        <Col>
                            <label htmlFor="deliveryStar">Delivery Star</label>
                            <input className='form-control'  type="number" id='deliveryStar' placeholder="Delivery Star" {...register("deliveryStar", { required: true })} />
                        </Col>
                        <Col>
                            <label htmlFor="dinningStar">Dinning Star</label>
                            <input className='form-control'  type="number" id='dinningStar' placeholder="dinningStart" {...register("dinningStart", { required: true })} />
                        </Col>
                        <Col>
                            <label htmlFor="address">Address</label>
                            <input className='form-control'  type="text" placeholder="address" id='address' {...register("address", {})} />
                        </Col>
                    </Row>
                    <input className='btn-primary btn ms-auto'  type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default AddFood;