import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({ food }) => {
    const { _id, foodName, description, price, foodImg, deliveryStar, dinningStart } = food;
    const handleBuyNow = (id) => {
        console.log(id);
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={foodImg} />
                <Card.Body><Card.Title>{foodName}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 50)}
                    </Card.Text>
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
                </Card.Body>
                <Card.Footer>
                    <div className='d-flex justify-content-between'>
                        <Button onClick={() => handleBuyNow(_id)}>Buy Now</Button>

                        <button className='btn btn-outline-danger'><span>$</span>{price}</button>

                    </div>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default Service;