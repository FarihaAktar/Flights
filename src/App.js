
import { useEffect } from 'react';
import './App.css';
import NavigationBar from './Component/NavigationBar';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addData } from './Redux/rootSlice';
import DropDownBtn from './Component/DropDownBtn';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import LastYearFlights from './Component/FLights/LastYearFlights';
import LastMonthFlights from './Component/FLights/LastMonthFlights';
import LastWeekFlights from './Component/FLights/LastWeekFlights';
import SuccessStatus from './Component/FLights/SuccessStatus';
import FailureStatus from './Component/FLights/FailureStatus';
import UpcomingTrue from './Component/FLights/UpcomingTrue';
import UpcomingFalse from './Component/FLights/UpcomingFalse';
import RocketName from './Component/FLights/RocketName';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      const sendGetRequest = async () => {
        await axios.get("https://api.spacexdata.com/v3/launches")
          // .then(res => res.json())
          .then(res => {
          //   console.log(res.data.splice(0, 20))
            dispatch(addData(res?.data))
          })
          .catch(err => {
            // Handle Error Here
            console.error(err);
          });
      }
      sendGetRequest()
  
    }, []);

  return (
    <Router>
      <div>
        <NavigationBar />
        <DropDownBtn />
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/last-month">
          <LastMonthFlights />
        </Route>
        <Route path="/last-year">
          <LastYearFlights />
        </Route>
        <Route path="/last-week">
          <LastWeekFlights />
        </Route>
        <Route path="/success-flights">
          <SuccessStatus />
        </Route>
        <Route path="/failed-flights">
          <FailureStatus />
        </Route>
        <Route path="/upcoming-true">
          <UpcomingTrue />
        </Route>
        <Route path="/upcoming-false">
          <UpcomingFalse />
        </Route>
        <Route path="/rockets">
          <RocketName />
        </Route>
        

      </Switch>
    </Router>
  );
}

export default App;
