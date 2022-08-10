import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Arial, sans-serif;
  }
`;

const theme = {
  colors: {
    primary: "#FF3132",
    primaryLighten: "rgba(255, 68, 0, 0.57)",
    background: "#F6F6F6",
    borderColor: "#e3e3e3",
  },
};

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);
