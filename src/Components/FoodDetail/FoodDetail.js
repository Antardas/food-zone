import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './food-detail.css'

const FoodDetail = ({ handleAddToCart }) => {
    const { id } = useParams();
    const [food, setFood] = useState({});
    const { user } = useAuth();
    const history = useHistory();
    const { foodName, description, price, foodImg, deliveryStar, dinningStart, address } = food;
    useEffect(() => {
        axios.get(`https://agile-woodland-88969.herokuapp.com/foods/${id}`)
            .then(res => {
                setFood(res.data);
            })
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('https://agile-woodland-88969.herokuapp.com/addOrders', {
            data
        }).then(res => {
            // if(res.data.)
            if (res.data.insertedId) {
                history.push('/home')
                alert('Place Order succefully')
            } else {
                alert('Please Try agian!!')
            }
        });

    };


    if (!food?._id) {
        return <Spinner animation="border" className='mx-auto d-block mt-3' variant="warning" />
    }
    return (
        <div className='container d-flex'>
            <div className='col-12 col-md-6 mt-5 py-5 px-4 cart-Container'>
                <div className='mx-auto'>
                    <img className='mx-auto w-100 block' src={foodImg} alt={foodName} />
                </div>
                <div>
                    <h3>{foodName}</h3>
                    <p>{description}</p>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <span className='bg-warning px-2 rounded'>{dinningStart} <small><i className="fas fa-star"></i></small></span>
                            <small> | DINNING</small>

                        </div>
                        <div>
                            <span className='bg-warning px-2 rounded'>{deliveryStar} <small><i className="fas fa-star"></i></small></span>
                            <small> | DELIVERY</small>
                        </div>
                    </div>
                    <h3 className='text-danger mt-3'>$ {price}</h3>
                    <h6 className='mt-5'>Address: {address}</h6>
                    {/* <button className='btn-warning btn' onClick={() => handleAddToCart(food)} >Add To Cart</button> */}
                </div>

            </div>
            <form className='col-12 col-lg-6 py-5 ms-md-3 cart-Container px-3 mt-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='form-control mb-4' type="text" defaultValue={user.displayName} placeholder="Coustomer Name" {...register("name", { required: true })} />
                <input className='form-control mb-4' type="email" defaultValue={user.email} placeholder="email" {...register("email", { required: true })} />
                <input className='form-control mb-4' type="tel" placeholder="Mobile Number" {...register("number", { required: true, minLength: 6, maxLength: 12 })} />
                <input className='form-control mb-4' type="text" placeholder="fooName" defaultValue={foodName} {...register("foodName", { required: true })} />
                <input className='form-control mb-4' type="text" placeholder="House No Post Office" {...register("houseNoPostOffice", { required: true })} />
                <input className='form-control mb-4' type="text" placeholder="City" {...register("city", { required: true })} />

                <input className='btn btn-outline-warning text-dark ms-auto d-block' value='Place Order' type="submit" />
            </form>
        </div >
    );
};

export default FoodDetail;