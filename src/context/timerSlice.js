import { createSlice } from "@reduxjs/toolkit";
import moment from "moment"


const initialState = {
    timeLeft: calculateTimeLeft("2024-07-07T23:59:59")
}

function calculateTimeLeft(targetDate) {
    const difference = moment(targetDate).diff(moment());
    const duration = moment.duration(difference);
    return{
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
    };
}

const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        updateTimeLeft: (state, action) => {
            state.timeLeft = calculateTimeLeft(action.payload)
        }
    }
})

export const {updateTimeLeft} = timerSlice.actions

export default timerSlice.reducer