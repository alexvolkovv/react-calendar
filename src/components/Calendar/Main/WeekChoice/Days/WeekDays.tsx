import React, { FC, memo } from "react";
import DayItem from "./DayItem";
import styled from "styled-components";
import { DayType } from "../../../../../models/DayType";

const StyledDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

type WeekDaysProps = {
  days: DayType[];
  currentDay: DayType;
};

const WeekDays: FC<WeekDaysProps> = memo(({ days, currentDay }) => {
  return (
    <div>
      <StyledDays>
        {days.map((day) => (
          <DayItem
            key={day.day}
            currentDay={
              currentDay.day === day.day &&
              currentDay.month === day.month &&
              currentDay.year === day.year
            }
            day={day}
          />
        ))}
      </StyledDays>
    </div>
  );
});

export default WeekDays;
