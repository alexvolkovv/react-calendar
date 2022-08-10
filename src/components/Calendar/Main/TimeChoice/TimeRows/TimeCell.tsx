import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { TimeType } from "../../../../../models/TimeType";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";
import { setSelectedTime } from "../../../../../store/reducers/calendar/CalendarSlice";
import { isSameTime } from "../../../../../utils/isSameTime";

const StyledCell = styled.div`
  cursor: pointer;
  height: 50px;
  padding: 2px;

  &:not(:last-child) {
    border-right: 2px solid ${(props) => props.theme.colors.borderColor};
  }
`;

type InnerCellProps = {
  isSelected: boolean;
  added: boolean;
};

const InnerCell = styled.div<InnerCellProps>`
  cursor: pointer;
  height: 44px;
  transition: 0.2s all;

  &:hover {
    background-color: #b3b7ff;
  }

  background-color: ${(props) => {
    if (props.added && !props.isSelected) {
      return "#ebecff";
    }

    if (props.isSelected) {
      return "#b3b7ff";
    }
  }};
`;

type TimeCellProps = {
  currentTime: TimeType;
};

const TimeCell: FC<TimeCellProps> = ({ currentTime }) => {
  const { selectedTime, selectedTimes } = useAppSelector(
    (state) => state.calendarReducer
  );
  const isAlreadyAdded = selectedTimes.filter((timeItem) =>
    isSameTime(currentTime, timeItem)
  );
  const dispatch = useAppDispatch();

  const cellClick = useCallback(() => {
    dispatch(setSelectedTime(currentTime));
  }, []);

  return (
    <StyledCell>
      <InnerCell
        onClick={cellClick}
        isSelected={isSameTime(selectedTime, currentTime)}
        added={isAlreadyAdded.length > 0}
      />
    </StyledCell>
  );
};

export default TimeCell;
