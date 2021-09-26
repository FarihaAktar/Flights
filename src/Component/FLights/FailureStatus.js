import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { failedFlightData } from '../../Redux/rootSlice';

const FailureStatus = () => {

    const failedFlights = useSelector(failedFlightData)

    return (
        <Container className='mt-5'>
            <Row className="justify-content-md-center">
                {
                    failedFlights.map(flight =>
                        <Col key={flight.mission_name}>
                            <Card className='mb-5 p-3 shadow bg-body rounded' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={flight.links.mission_patch_small} />

                                <Card.Body>
                                    <Card.Title className='fs-4 fw-bold'>{flight.rocket.rocket_name} - ({flight.launch_year})</Card.Title>
                                    <Card.Text className='text-muted'>
                                        <span className='fw-bold'> Launch Status : </span>
                                        {flight?.launch_success !== true ? 'Failure' : 'Success'}

                                    </Card.Text>
                                    <Card.Subtitle className='text-muted'>
                                        <span className='fw-bold'> Upcoming Status : </span>
                                        {flight?.upcoming !== true ? 'False' : 'True'}

                                    </Card.Subtitle>

                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }

            </Row>
        </Container>
    )
}

export default FailureStatus
