import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './food-detail.css'

const FoodDetail = ({ handleAddToCart}) => {
    const { id } = useParams();
    const [food, setFood] = useState({});
    const { _id, foodName, description, price, foodImg, deliveryStar, dinningStart, address } = food;
    useEffect(() => {
        axios.get(`http://localhost:5000/foods/${id}`)
            .then(res => {
                setFood(res.data);
            })
    }, []);
/* let  [count, setCount] = useState(0)
    const handleAddToCart = () => {
        setCount(++count);
        console.log(count);
    } */


    if (!food?._id) {
        return <Spinner animation="border" className='mx-auto mt-3' variant="warning" />
    }
    return (
        <div>
            <div className='col-5 mx-auto mt-5 py-5 px-4 cart-Container'>
                <div className='mx-auto'>
                    <img className='mx-auto w-100 block' src={foodImg} alt={foodName} />
                </div>
                <div>
                    <h3>{foodName}</h3>
                    <p>{description}</p>
                    <div className='d-flex justify-content-evenly'>
                        <div>
                            <span className='bg-warning px-2 rounded'>{dinningStart} <small><i className="fas fa-star"></i></small></span>
                            <small> | DINNING</small>

                        </div>
                        <div>
                            <span className='bg-warning px-2 rounded'>{deliveryStar} <small><i className="fas fa-star"></i></small></span>
                            <small> | DELIVERY</small>
                        </div>
                    </div>
                    <h6>Address: {address}</h6>
                    <button className='btn-warning btn' >Add To Cart</button>
                    
                </div>

            </div>
        </div >
    );
};

export default FoodDetail;