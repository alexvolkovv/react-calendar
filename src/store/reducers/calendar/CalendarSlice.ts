import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { getTimeValues } from "../../../utils/getTimeValues";
import { getDaysInMonth } from "../../../utils/getDaysInMonth";
import { getWeeksInMonth } from "../../../utils/getWeeksInMonth";
import { getCurrentWeek } from "../../../utils/getCurrentWeek";
import { getDaysInWeek } from "../../../utils/getDaysInWeek";
import { DayType } from "../../../models/DayType";
import { isSameTime } from "../../../utils/isSameTime";
import { TimeType } from "../../../models/TimeType";

type CalendarState = {
  selectedTime: TimeType | null;
  selectedTimes: TimeType[];
  daysInCurrentWeek: DayType[];
  selectedMonth: number;
  selectedYear: number;
  timeValues: number[];
  daysInMonth: number;
  weeksInMonth: number;
  currentWeek: number;
  currentDay: DayType;
};

const currentYear = moment().year();
const currentMonth = moment().month();
const currentDay = +moment().format("DD");

const initialState: CalendarState = {
  timeValues: getTimeValues(7, 21),
  selectedTime: null,
  selectedTimes: [],
  selectedMonth: currentMonth,
  selectedYear: currentYear,
  daysInMonth: getDaysInMonth(currentMonth, currentYear),
  weeksInMonth: getWeeksInMonth(currentMonth, currentYear),
  currentWeek: getCurrentWeek(currentMonth, currentDay, currentYear),
  currentDay: {
    day: currentDay,
    month: currentMonth,
    year: currentYear,
  },
  daysInCurrentWeek: getDaysInWeek(
    currentMonth,
    getCurrentWeek(currentMonth, currentDay, currentYear),
    currentYear
  ),
};

export const counterSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setSelectedTime(state, action: PayloadAction<TimeType | null>) {
      if (action.payload === null) {
        state.selectedTime = null;

        return;
      }

      if (isSameTime(action.payload, state.selectedTime)) {
        state.selectedTime = null;
      } else {
        state.selectedTime = action.payload;
      }
    },
    addNewTime(state, action: PayloadAction<TimeType>) {
      const newTime = action.payload;

      state.selectedTimes = state.selectedTimes.filter(
        (time) => !isSameTime(time, newTime)
      );

      state.selectedTimes.push(newTime);
    },
    removeTime(state, action: PayloadAction<TimeType>) {
      state.selectedTimes = state.selectedTimes.filter(
        (time) => !isSameTime(time, action.payload)
      );
    },
    nextWeek(state) {
      if (state.currentWeek === state.weeksInMonth) {
        if (state.selectedMonth === 11) {
          state.selectedMonth = 0;
          state.selectedYear++;
        } else {
          state.selectedMonth++;
        }

        state.weeksInMonth = getWeeksInMonth(
          state.selectedMonth,
          state.selectedYear
        );
        state.daysInMonth = getDaysInMonth(
          state.selectedMonth,
          state.selectedYear
        );
        state.currentWeek = getCurrentWeek(
          state.selectedMonth,
          1,
          state.selectedYear
        );
      } else {
        state.currentWeek++;
      }

      state.daysInCurrentWeek = getDaysInWeek(
        state.selectedMonth,
        state.currentWeek,
        state.selectedYear
      );
    },
    prevWeek(state) {
      if (state.currentWeek === 1) {
        if (state.selectedMonth === 0) {
          state.selectedMonth = 11;
          state.selectedYear--;
        } else {
          state.selectedMonth--;
        }

        state.weeksInMonth = getWeeksInMonth(
          state.selectedMonth,
          state.selectedYear
        );
        state.daysInMonth = getDaysInMonth(
          state.selectedMonth,
          state.selectedYear
        );
        state.currentWeek = getCurrentWeek(
          state.selectedMonth,
          state.daysInMonth,
          state.selectedYear
        );
      } else {
        state.currentWeek--;
      }

      state.daysInCurrentWeek = getDaysInWeek(
        state.selectedMonth,
        state.currentWeek,
        state.selectedYear
      );
    },
    setToday(state) {
      state.selectedMonth = state.currentDay.month;
      state.selectedYear = state.currentDay.year;

      state.weeksInMonth = getWeeksInMonth(
        state.selectedMonth,
        state.selectedYear
      );
      state.daysInMonth = getDaysInMonth(
        state.selectedMonth,
        state.selectedYear
      );
      state.currentWeek = getCurrentWeek(
        state.selectedMonth,
        state.currentDay.day,
        state.selectedYear
      );

      state.daysInCurrentWeek = getDaysInWeek(
        state.selectedMonth,
        state.currentWeek,
        state.selectedYear
      );
    },
  },
});

export const {
  setSelectedTime,
  addNewTime,
  removeTime,
  nextWeek,
  prevWeek,
  setToday,
} = counterSlice.actions;
export default counterSlice.reducer;
