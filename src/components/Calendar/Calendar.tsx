import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const StyledCalendar = styled.div`
  width: 740px;
  margin: 0 auto;

  @media (max-width: 740px) {
    width: 100vw;
  }
`;

const Calendar = () => {
  return (
    <StyledCalendar>
      <Header />
      <Main />
      <Footer />
    </StyledCalendar>
  );
};

export default Calendar;
