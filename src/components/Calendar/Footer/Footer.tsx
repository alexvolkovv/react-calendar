import React, { useCallback } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  removeTime,
  setSelectedTime,
  setToday,
} from "../../../store/reducers/calendar/CalendarSlice";

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 25px;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid ${(props) => props.theme.colors.borderColor};
`;

const Footer = () => {
  const { selectedTime } = useAppSelector((state) => state.calendarReducer);
  const dispatch = useAppDispatch();

  const removeClick = () => {
    dispatch(removeTime(selectedTime!));
    dispatch(setSelectedTime(null));
  };

  const showToday = useCallback(() => {
    dispatch(setToday());
    dispatch(setSelectedTime(null));
  }, []);

  return (
    <StyledFooter>
      <Button onClick={showToday} size={"18px"}>
        Today
      </Button>
      {selectedTime && (
        <Button onClick={removeClick} size={"18px"}>
          Delete
        </Button>
      )}
    </StyledFooter>
  );
};

export default Footer;
