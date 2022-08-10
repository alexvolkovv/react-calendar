import React, { FC } from "react";
import styled from "styled-components";

const StyledTimeValues = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50px;
  justify-content: flex-end;
  margin-right: 5px;

  div {
    height: 50px;
    color: #bdbdbd;
    &:not(:first-child) {
      transform: translateY(-10px);
    }
  }
`;

type TimeValues = {
  values: number[];
};

const TimeValues: FC<TimeValues> = ({ values }) => {
  return (
    <StyledTimeValues>
      {values.map((value) => (
        <div key={value}>{value}:00</div>
      ))}
    </StyledTimeValues>
  );
};

export default TimeValues;
