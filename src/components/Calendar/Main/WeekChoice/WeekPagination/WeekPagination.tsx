import React, { FC, memo } from "react";
import styled from "styled-components";
import moment from "moment";
import Arrow from "../../../../UI/Arrow";

const StyledWeekPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 40px;
`;

type WeekPaginationProps = {
  currentMonth: number;
  currentYear: number;
  prevWeek: () => void;
  nextWeek: () => void;
};

const WeekPagination: FC<WeekPaginationProps> = memo(
  ({ nextWeek, prevWeek, currentYear, currentMonth }) => {
    const monthWord = moment([currentYear, currentMonth]).format("MMMM");

    return (
      <StyledWeekPagination>
        <Arrow onClick={prevWeek} />
        <div>
          {monthWord} {currentYear}
        </div>
        <Arrow right={true} onClick={nextWeek} />
      </StyledWeekPagination>
    );
  }
);

export default WeekPagination;
