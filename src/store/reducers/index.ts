import { combineReducers } from "@reduxjs/toolkit";
import calendarReducer from "./calendar/CalendarSlice";

export const reducers = combineReducers({
  calendarReducer,
});
