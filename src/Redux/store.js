import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootSlice'



const store = configureStore({
    reducer:  {
      flights: rootReducer,
    },
  })
  
  export default store