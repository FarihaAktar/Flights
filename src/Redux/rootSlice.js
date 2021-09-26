import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flightsData: [],
  rocketData:[],
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
    setRocketData: (state, { payload }) => {
      state.rocketData = payload
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


export const { addData, setRocketData, setLastYearData, setLastMonthData, setSuccessFlights, setFailedFlights, setUpcomingFlights, setNotUpComingFlights } = rootSlice.actions
export const loadData = (state) => state.flights.flightsData;
export const loadRocketData = (state) => state.flights.rocketData;
export const lastYearData = (state) => state.flights.dataFromLastYear;
export const lastMonthData = (state) => state.flights.dataFromLastMonth;
export const succeedFlightData = (state) => state.flights.successFlights;
export const failedFlightData = (state) => state.flights.failedFlights;
export const trueFlightData = (state) => state.flights.upcomingFlights;
export const falseFlightData = (state) => state.flights.notUpcomingFlights;
export default rootSlice.reducer;