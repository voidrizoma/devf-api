import React, { Fragment } from "react";
import GlobalStyle from "../../Global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Fragment>
        <GlobalStyle />
      </Fragment>
    </Router>
  );
}
