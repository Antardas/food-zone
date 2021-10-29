import React from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {
    return (
        <div className='container mt-5 mb-3'>
            <h1 className='mb-4'>Services</h1>
            <Row xs={2} md={4} className="g-4">
               <Service></Service>
               <Service></Service>
               <Service></Service>
               <Service></Service>
               <Service></Service>
               <Service></Service>
               <Service></Service>
               <Service></Service>
               <Service></Service>
               <Service></Service>
            </Row>
        </div>
    );
};

export default Services;