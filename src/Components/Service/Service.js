import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = () => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src="https://b.zmtcdn.com/data/pictures/1/19211101/ba1d13d506801211a77a0357f382c620.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        <p>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </p>
                        <small className='block'> <b>Delivery time</b>
                            Your order will be delivered in 20 minutes.</small>
                    </Card.Text>
                    <div className='d-flex justify-content-evenly'>
                        <div>
                            <span className='bg-warning px-2 rounded'>3.8</span>
                            <small> | DINNING</small>

                        </div>
                        <div>
                            <span className='bg-warning px-2 rounded'>3.8</span>
                            <small> | DELIVERY</small>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <div className='d-flex justify-content-between'>
                        <Button>Buy Now</Button>

                        <button className='btn btn-outline-danger'><span>$</span>70</button>

                    </div>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default Service;