import React, { FC } from "react";
import styled from "styled-components";
import TimeCell from "./TimeCell";
import { DayType } from "../../../../../models/DayType";

const StyledRows = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: 50px;

  &:not(:last-child) {
    border-bottom: 2px solid ${(props) => props.theme.colors.borderColor};
  }
`;

type TimeRowsProps = {
  timeValues: number[];
  days: DayType[];
};

const TimeRows: FC<TimeRowsProps> = ({ timeValues, days }) => {
  return (
    <div>
      {timeValues.map((timeValue) => (
        <StyledRows key={timeValue}>
          {days.map((day) => (
            <TimeCell key={day.day} currentTime={{ time: timeValue, day }} />
          ))}
        </StyledRows>
      ))}
    </div>
  );
};

export default TimeRows;
