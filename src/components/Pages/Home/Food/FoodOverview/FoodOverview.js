import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const FoodOverview = () => {
    return (
        <div>
            <Navbar >
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link href="#home"><strong>Brackfast</strong></Nav.Link>
                        <Nav.Link href="#features"><strong>Lunch</strong></Nav.Link>
                        <Nav.Link href="#pricing"><strong>Dinner</strong></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default FoodOverview;