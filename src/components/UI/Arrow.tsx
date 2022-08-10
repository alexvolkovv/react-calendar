import React, { FC } from "react";
import styled from "styled-components";

const StyledArrow = styled.div`
  width: 10px;
  height: 10px;
  border-top: 3px solid ${(props) => props.theme.colors.primary};
  border-left: 3px solid ${(props) => props.theme.colors.primary};
  transform: ${(props: ArrowProps) =>
    props.right ? `rotate(-225deg)` : "rotate(-45deg)"};
  cursor: pointer;

  &:hover {
    border-top: 3px solid ${(props) => props.theme.colors.primaryLighten};
    border-left: 3px solid ${(props) => props.theme.colors.primaryLighten};
  }
`;

type ArrowProps = {
  right?: boolean;
  theme?: any;
  [key: string]: any;
};

const Arrow: FC<ArrowProps> = (props) => {
  return <StyledArrow {...props} />;
};

export default Arrow;
