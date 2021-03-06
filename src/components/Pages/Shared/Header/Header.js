import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../../images/logo2.png';


const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} style={{ width: "115px", height: "36px" }} alt="" />
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
