import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import moment from "moment";
import { isNumbersValues } from "../../../utils/isNumberValues";
import { useAppDispatch } from "../../../hooks/redux";
import { TimeType } from "../../../models/TimeType";
import {
  addNewTime,
  setSelectedTime,
} from "../../../store/reducers/calendar/CalendarSlice";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const StyledTitle = styled.h1`
  font-weight: 400;
  font-size: 24px;
`;

const Header = () => {
  const dispatch = useAppDispatch();

  const addNewEventClick = () => {
    const eventTime: string | null = prompt(
      "Enter event time: YYYY-MM-DD HH:mm:ss"
    );
    const newDate = moment(eventTime);

    if (!newDate.isValid()) {
      return;
    }

    const month: number = newDate.month();
    const day: number = +newDate.format("DD");
    const year: number = newDate.year();
    const time: number = +newDate.format("HH");

    if (!isNumbersValues(month, day, year, time)) {
      return;
    }

    const selectedTime: TimeType = {
      time: time,
      day: {
        day: day,
        year,
        month,
      },
    };

    dispatch(setSelectedTime(null));
    dispatch(addNewTime(selectedTime));
  };

  return (
    <StyledHeader>
      <StyledTitle>Interview Calendar</StyledTitle>
      <Button onClick={addNewEventClick}>+</Button>
    </StyledHeader>
  );
};

export default Header;
