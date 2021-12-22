import React, { Fragment } from "react";
import GlobalStyle from "../../Global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home"

export default function App() {
  return (
    <Router>
      <Fragment>
        <GlobalStyle />
        <Routes>
            <Route exact path="/" element={<Home /> } />
        </Routes>
      </Fragment>
    </Router>
  );
}
