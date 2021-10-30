import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom'

const Heading = () => {
    const { user,
        setUser,
        signInGoogle,
        signOutUser,
        isLoading,
        setIsLoading } = useAuth();
    console.log(isLoading);
    const history = useHistory();
    const location = useLocation();
    const REDIRECT_URL = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                setIsLoading(false);
                console.log(REDIRECT_URL);
                history.push(REDIRECT_URL);
            }).catch(error => alert(error.message, 'line'));
    }

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                setUser({});
                setIsLoading(false);
                history.push('/')
            }).catch((error) => {
                setIsLoading(false)
                alert('Plz Try again!!');
            });
    }

    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img className='col-lg-4 col-4' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='text-white ' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-white ' as={Link} to="/servives">Services</Nav.Link>
                            <Nav.Link className='text-white ' as={Link} to="/addfood">Contact us</Nav.Link>
                            <Nav.Link className='text-white ' as={Link} to="/cart">
                                <span className='absolute p-2 rounded-circle'>
                                    1
                                </span>
                                <i className="fas fa-cart-plus"></i>
                            </Nav.Link>
                            {
                                user.email ? [<NavDropdown key={4} title="Account & Order" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">My Order</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Mange Order</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/addFood'>Add a Food</NavDropdown.Item>
                                </NavDropdown>,

                                <h6 key={2} className='text-light my-auto mx-lg-2'>{user.displayName}</h6>,
                                    <Button key={3} onClick={handleSignOut} variant="danger">Log out</Button>

                                ] : <Button onClick={handleGoogleSignIn} variant="danger">Register</Button>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Heading;