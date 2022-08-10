import React, { FC, memo } from "react";
import styled from "styled-components";

const StyledPlus = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: ${(props) => props.size || "34px"};
  cursor: pointer;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
  transition: 0.2s all;

  &:hover {
    color: ${(props) => props.theme.colors.primaryLighten};
  }
`;

type ButtonProps = {
  size?: string;
  [key: string]: any;
  children: React.ReactNode;
};

const Button: FC<ButtonProps> = memo((props) => {
  return <StyledPlus {...props}>{props.children}</StyledPlus>;
});

export default Button;
