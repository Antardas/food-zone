import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ food }) => {
    const { _id, foodName, description, price, foodImg } = food;
    const detailUrl = `/fooddetail/${_id}`

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={foodImg} />
                <Card.Body><Card.Title>{foodName}</Card.Title>
                    <Card.Text>
                        {description.length > 50 ? description.slice(0, 50 - 1 ) + "..." : description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className='d-flex justify-content-between'>
                        <Link to={detailUrl}><Button>Buy Now</Button></Link>

                        <button className='btn btn-outline-danger'><span>$</span>{price}</button>

                    </div>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default Service;