import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import styled from "styled-components";
import WeekPagination from "./WeekPagination/WeekPagination";
import WeekDays from "./Days/WeekDays";
import {
  nextWeek,
  prevWeek,
  setSelectedTime,
} from "../../../../store/reducers/calendar/CalendarSlice";

const WeekChoiceWrap = styled.div`
  padding: 10px 10px 10px 50px;
  background-color: ${(props) => props.theme.colors.background};
  border-top: 2px solid ${(props) => props.theme.colors.borderColor};
  border-bottom: 2px solid ${(props) => props.theme.colors.borderColor};
`;

const WeekChoice = () => {
  const { daysInCurrentWeek, currentDay, selectedMonth, selectedYear } =
    useAppSelector((state) => state.calendarReducer);
  const dispatch = useAppDispatch();

  const prev = useCallback(() => {
    dispatch(prevWeek());
    dispatch(setSelectedTime(null));
  }, []);

  const next = useCallback(() => {
    dispatch(nextWeek());
    dispatch(setSelectedTime(null));
  }, []);

  return (
    <WeekChoiceWrap>
      <WeekDays days={daysInCurrentWeek} currentDay={currentDay} />
      <WeekPagination
        currentMonth={selectedMonth}
        currentYear={selectedYear}
        nextWeek={next}
        prevWeek={prev}
      />
    </WeekChoiceWrap>
  );
};

export default WeekChoice;
