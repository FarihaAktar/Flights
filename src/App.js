
import { useEffect } from 'react';
import './App.css';
import NavigationBar from './Component/NavigationBar';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addData } from './Redux/rootSlice';
import FlightDetail from './Component/FlightDetail';


function App() {


  const dispatch = useDispatch()

  useEffect(() => {
    const sendGetRequest = async () => {
      await axios.get("https://api.spacexdata.com/v3/launches")
        // .then(res => res.json())
        .then(res => {
          // console.log(res.data.splice(0, 20))
          dispatch(addData(res?.data.splice(0, 19)))
        })
        .catch(err => {
          // Handle Error Here
          console.error(err);
        });
    }
    sendGetRequest()

  }, []);



  return (
    <div>
      <NavigationBar />
      <FlightDetail/>

    </div>
  );
}

export default App;
