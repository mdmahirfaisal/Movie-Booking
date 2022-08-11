import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const linkClass = "text-decoration-none text-light fs-6s ms-3";

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
            <Container>
                <Link to="/" className='text-decoration-none text-light fs-5 fw-bold me-2'>QUADB TECH</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className={linkClass} to="/">Home</Link>
                        <Link className={linkClass} to="/bookedShow">Booked Show</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;