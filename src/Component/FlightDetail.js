import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { loadData } from '../Redux/rootSlice';

const FlightDetail = () => {

    const flights = useSelector(loadData)
    console.log(flights)

    return (
        <Container className='mt-5'>
            <Row className="justify-content-md-center">

                {
                    flights ? flights.map(flight =>
                        <Col>
                            <Card className='mb-5' border="success" style={{ width: '18rem' }}>
                                <Card.Header>{flight.rocket.rocket_name}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{flight.launch_year}</Card.Title>
                                    <Card.Text className='text-muted'>
                                        <span className='fw-bold'> Launch Status : </span>
                                        {flight?.launch_success !== true ? 'Failure' : 'Success' }
                                        
                                    </Card.Text>
                                    <Card.Subtitle className='text-muted'>
                                        <span className='fw-bold'> Upcoming : </span>
                                        {flight?.upcoming !== true ? 'False' : 'True' }
                                        
                                    </Card.Subtitle>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                        :
                        null
                }


            </Row>
        </Container>
    )
}

export default FlightDetail;
