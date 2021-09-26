import React from 'react';
import { Container, Form, FormControl, Navbar, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadData, setRocketData } from '../Redux/rootSlice';

const NavigationBar = () => {


    const history = useHistory();

    const flights = useSelector(loadData)
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        const value = e.target[0].value
        const uppercase = value.charAt(0).toUpperCase() + value.slice(1)
        // console.log(uppercase)
        let rocketData = flights.filter(flight => flight?.rocket?.rocket_name === uppercase)
        dispatch(setRocketData(rocketData));
        history.push("/rockets");

        e.preventDefault();
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Flights</Navbar.Brand>
            </Container>
            <Form className="d-flex me-4" onSubmit={(e) => handleSearch(e)}>
                <FormControl
                    type="search"
                    placeholder="Search Rocket"
                    className="mr-2"
                />
                <Button variant="danger" type="submit">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavigationBar
