import React from 'react';
import {Container, Navbar } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Flights</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
