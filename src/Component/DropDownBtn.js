import React from 'react';
import { Container, DropdownButton, Stack, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { loadData, setFailedFlights, setLastMonthData, setLastYearData, setNotUpComingFlights, setSuccessFlights, setUpcomingFlights } from '../Redux/rootSlice';

const DropDownBtn = () => {

    const flights = useSelector(loadData)
    const dispatch = useDispatch()

    // handle date function
    const handleDate = (date) => {
        if (date === "2020") {
            let lastYearData = flights.filter(flight => flight.launch_year === date)
            // console.log(data)
            // dispatch(removeData(lastYearData[0]))
            dispatch(setLastYearData(lastYearData))

        }

        if (date === 11) {
            let lastMonthData = flights.filter(flight => new Date(`${flight.launch_date_utc}`).getMonth() === date && flight.launch_year === "2020")
            console.log(lastMonthData)
            dispatch(setLastMonthData(lastMonthData))
        }
    }
    // handle Status function
    const handleStatus = (status) => {
        if (status === true) {
            let successFlightData = flights.filter(flight => flight.launch_success === status)
            dispatch(setSuccessFlights(successFlightData))
        }

        if (status === false) {
            let failedFlightData = flights.filter(flight => flight.launch_success === status)
            console.log(failedFlightData)
            dispatch(setFailedFlights(failedFlightData))
        }

    }

    // handle upcoming function
    const handleUpcoming = (status) => {
        if (status === true) {
            let trueUpcomingData = flights.filter(flight => flight.upcoming === status)
            dispatch(setUpcomingFlights(trueUpcomingData))
        }
        if (status === false) {
            let falseUpcomingData = flights.filter(flight => flight.upcoming === status)
            dispatch(setNotUpComingFlights(falseUpcomingData))
        }

    }

    return (
        <Container className='mt-3'>
            <Stack direction="horizontal" gap={4}>
                {/* launch date dropdown */}
                <DropdownButton id="dropdown-basic-button" title="Launch date">
                    <Dropdown.Item className='border-0'>
                        <Link to='/last-Week'>
                            Last Week
                        </Link>

                    </Dropdown.Item>
                    <Dropdown.Item className='border-0' onClick={() => handleDate(11)}>
                        <Link to='/last-month'>
                            Last Month
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className='border-0' onClick={() => handleDate("2020")}>
                        <NavLink to='/last-year'>
                            Last Year
                        </NavLink>
                    </Dropdown.Item>
                </DropdownButton>
                {/* launch status dropdown */}
                <DropdownButton id="dropdown-basic-button" title="Launch Status">
                    <Dropdown.Item className='mb-2 border-0' >
                        <NavLink onClick={() => handleStatus(true)} to='/success-flights'>
                            Success
                        </NavLink>
                    </Dropdown.Item>
                    <br />
                    <Dropdown.Item className='border-0' >
                        <NavLink onClick={() => handleStatus(false)} to='/failed-flights'>
                            Failure
                        </NavLink>
                    </Dropdown.Item>
                </DropdownButton>
                {/* upcoming status dropdown */}
                <DropdownButton id="dropdown-basic-button" title="Upcoming">
                    <Dropdown.Item className='mb-2 border-0' >
                        <NavLink onClick={() => handleUpcoming(true)} to='/upcoming-true'>
                            True
                        </NavLink>
                    </Dropdown.Item>
                    <br />
                    <Dropdown.Item className='border-0'>
                        <NavLink onClick={() => handleUpcoming(false)} to='upcoming-false'>
                            False
                        </NavLink>
                    </Dropdown.Item>
                </DropdownButton>
            </Stack>
        </Container>
    )
}

export default DropDownBtn
