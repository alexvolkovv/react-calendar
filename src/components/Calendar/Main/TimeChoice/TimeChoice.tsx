import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import TimeValues from "./TimeValues/TimeValues";
import { useAppSelector } from "../../../../hooks/redux";
import TimeRows from "./TimeRows/TimeRows";

const TimeWrapper = styled.div`
  display: flex;
`;

const OverflowWrapper = styled.div`
  height: 400px;
  overflow-y: auto;
`;

const RowsWrapper = styled.div`
  width: 100%;
`;

const TimeChoice = () => {
  const { timeValues, daysInCurrentWeek } = useAppSelector(
    (state) => state.calendarReducer
  );
  const overflowWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    overflowWrapperRef.current?.scrollTo(0, 0);
  }, [daysInCurrentWeek]);

  return (
    <OverflowWrapper ref={overflowWrapperRef}>
      <TimeWrapper>
        <TimeValues values={timeValues} />

        <RowsWrapper>
          <TimeRows timeValues={timeValues} days={daysInCurrentWeek} />
        </RowsWrapper>
      </TimeWrapper>
    </OverflowWrapper>
  );
};

export default TimeChoice;
