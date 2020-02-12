import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
// typing in typescript :  "noImplicitAny": false (tsconfig.json)

// const plus = (a:string,b:string) => a+b;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
