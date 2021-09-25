import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    flightsData: []
  }

  export const rootSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
      addData:(state, {payload}) =>{
          state.flightsData = payload
      }
    },
  })
  

  export const { addData } = rootSlice.actions
  export const loadData = (state) => state.flights.flightsData;
  export default rootSlice.reducer;