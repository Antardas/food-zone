import axios from 'axios';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddFood = () => {
    const { register, handleSubmit, reset, watch } = useForm();
    console.log(watch('price'))
    console.log('Checking private router');
    const onSubmit = data => {
        axios.post('http://localhost:5000/addFood', {
            data
        }).then(res => {
            console.log(res.data);
            if (res.data.insertedId) {
                alert('Your product Added');
                reset();
            }
            console.log(res);
        })
    };

    return (
        <div>
            <Container>

                <form onSubmit={handleSubmit(onSubmit)} className='grid'>
                    <Row xs={1} md={3}>

                        <Col>
                            <label className='m-2' htmlFor="foodName">Food Name</label>
                            <input className='form-control'  type="text" id="foodName" placeholder="Food Name" {...register("foodName", { required: true, maxLength: 80 })} />
                        </Col>
                        <Col>
                            <label className='m-2' htmlFor="description">Description</label>
                            <input className='form-control'  type="text" id='description' placeholder="description" {...register("description", { required: true, })} />
                        </Col>
                        <Col>
                            <label className='m-2' htmlFor="price">Price</label>
                            <input className='form-control' type="number"  id='price' placeholder="price" {...register("price", { required: true})} />
                        </Col>
                        <Col>
                            <label className='m-2' htmlFor="foodImg">Food Image</label>
                            <input className='form-control'  type="url" id='foodImg' placeholder="food image" {...register("foodImg", { required: true })} />
                        </Col>
                        <Col>
                            <label className='m-2' htmlFor="deliveryStar">Delivery Star</label>
                            <input className='form-control' type="number" step="0.01" id='deliveryStar' placeholder="Delivery Star" {...register("deliveryStar", { required: true })} />
                        </Col>
                        <Col>
                            <label className='m-2' htmlFor="dinningStar">Dinning Star</label>
                            <input className='form-control' type="number" step="0.01" id='dinningStar' placeholder="dinningStart" {...register("dinningStart", { required: true })} />
                        </Col>
                        <Col>
                            <label className='m-2' htmlFor="address">Address</label>
                            <input className='form-control'  type="text" placeholder="address" id='address' {...register("address", {})} />
                        </Col>
                    </Row>
                    <input className='btn-primary btn ms-auto mt-3'  type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default AddFood;