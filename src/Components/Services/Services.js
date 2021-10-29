import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/foods')
            .then(res => {

                setFoods(res.data);
            }).catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div className='container mt-5 mb-3'>
            <h1 className='mb-4'>Services</h1>
            <Row xs={2} md={4} className="g-4">
                {
                    foods.map(food => <Service key={food._id} food={food}></Service>)
}
            </Row>
        </div>
    );
};

export default Services;