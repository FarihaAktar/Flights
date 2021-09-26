import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { loadRocketData } from '../../Redux/rootSlice';

const RocketName = () => {

    const rocketFlights = useSelector(loadRocketData)

    return (
        <Container className='mt-5'>

        <Row className="justify-content-md-center">
            
            {
               rocketFlights.length ? rocketFlights.map(flight =>
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
                :
                <div className='fs-2 fw-bold text-muted'>
                    No Rockets Found !
                </div>
            }
        </Row>
    </Container>
    )
}

export default RocketName
