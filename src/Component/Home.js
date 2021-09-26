import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addData } from '../Redux/rootSlice';
import FlightDetails from './FLights/FlightDetails';

const Home = () => {

    return (
        <>
            <FlightDetails/>
        </>
    )
}

export default Home
