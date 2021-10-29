import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Heading = () => {
    const { user,
        setuser,
        signInGoogle,
        signOutUser } = useFirebase();
    console.log(user);
    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='text-white ' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-white ' as={Link} to="/servives">Services</Nav.Link>
                            <Nav.Link className='text-white ' as={Link} to="/contact">Contact us</Nav.Link>
                            <Nav.Link className='text-white ' as={Link} to="/cart">
                                <span className='absolute p-2 rounded-circle'>
                                    1
                                </span>
                                <i className="fas fa-cart-plus"></i>
                            </Nav.Link>
                            {
                                user?.email ? <Button onClick={signOutUser} variant="danger">Log out</Button> : <Button onClick={signInGoogle} variant="danger">Register</Button>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Heading;