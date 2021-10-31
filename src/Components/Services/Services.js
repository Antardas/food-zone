import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {
    const [foods, setFoods] = useState([])
// Get all foods from DB
    useEffect(() => {
        axios.get('https://agile-woodland-88969.herokuapp.com/foods')
            .then(res => {
                setFoods(res.data);
            }).catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div id='services' className='container mt-5 mb-3'>
            <h1 className='mb-4'>Services</h1>
            <Row xs={2} md={4} className="g-4">
                {
                    foods[0] ? foods.map(food => <Service key={food._id} food={food}></Service>) : <Spinner animation="border" className='mx-auto mt-3' variant="warning" />
                }
            </Row>
        </div>
    );
};

export default Services;