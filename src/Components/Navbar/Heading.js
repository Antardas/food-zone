import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const Heading = () => {
    return (
        <div>
            <Navbar bg="primary" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/servives">Services</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
                            <Nav.Link as={Link} to="/cart"><i class="fas fa-cart-plus"></i></Nav.Link>
                            
                        </Nav>
                        <Button variant="dark">Register</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Heading;