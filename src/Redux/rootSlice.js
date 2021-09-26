import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flightsData: [],
  dataFromLastYear: [],
  dataFromLastMonth: [],
  dataFromLastWeek: [],
  successFlights: [],
  failedFlights: [],
  upcomingFlights: [],
  notUpcomingFlights: []
}

export const rootSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.flightsData = payload
    },
    setLastYearData: (state, { payload }) => {
      state.dataFromLastYear = payload
    },
    setLastMonthData: (state, { payload }) => {
      state.dataFromLastMonth = payload
    },
    setLastWeekData: (state, { payload }) => {
      state.dataFromLastWeek = payload
    },
    setSuccessFlights: (state, { payload }) => {
      state.successFlights = payload
    },
    setFailedFlights: (state, { payload }) => {
      state.failedFlights = payload
    },
    setUpcomingFlights: (state, { payload }) => {
      state.upcomingFlights = payload
    },
    setNotUpComingFlights: (state, { payload }) => {
      state.notUpcomingFlights = payload
    },
    // removeData: (state, { payload }) => {
    //   if (payload.launch_year === '2020') {
    //     // state.flightsData = [];
    //     state.dataFromLastWeek = [];
    //     state.dataFromLastMonth = [];
    //     state.successFlights = [];
    //     state.failedFlights = [];
    //     state.upcomingFlights = [];
    //     state.notUpcomingFlights = []
    //   }

    //   if (new Date(`${payload.launch_date_utc}`).getMonth() === 11) {
    //     // state.flightsData = [];
    //     state.dataFromLastWeek = [];
    //     state.dataFromLastYear = [];
    //     state.successFlights = [];
    //     state.failedFlights = [];
    //     state.upcomingFlights = [];
    //     state.notUpcomingFlights = []
    //   }
    // }
  },
})


export const { addData, setLastYearData, setLastMonthData, setSuccessFlights, setFailedFlights} = rootSlice.actions
export const loadData = (state) => state.flights.flightsData;
export const lastYearData = (state) => state.flights.dataFromLastYear;
export const lastMonthData = (state) => state.flights.dataFromLastMonth;
export const succeedFlightData = (state) => state.flights.successFlights;
export const failedFlightData = (state) => state.flights.failedFlights;
export default rootSlice.reducer;