import React, { FC } from "react";
import styled from "styled-components";
import { DayType } from "../../../../../models/DayType";
import moment from "moment";

const StyledDayItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDayNumber = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: #ccc;
    color: white;
  }

  ${(props: DayItemProps) =>
    props.currentDay &&
    `
      background-color: ${props.theme.colors.primary};
      color: white;
  `}
`;

type DayItemProps = {
  currentDay?: boolean;
  theme?: any;
  day: DayType;
};

const DayItem: FC<DayItemProps> = (props) => {
  const letterDay = moment([
    props.day.year,
    props.day.month,
    props.day.day,
  ]).format("dd")[0];

  return (
    <StyledDayItem>
      <span>{letterDay}</span>
      <StyledDayNumber {...props}>{props.day.day}</StyledDayNumber>
    </StyledDayItem>
  );
};

export default DayItem;
