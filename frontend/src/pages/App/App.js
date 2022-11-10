import React from "react";
import AllRoute from "../router";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollTop from "../../components/ScrollTop";
// import Cursor from "../../components/Cursor";
import "./App.css";

const App = () => {
  return (
    <div className="App main-wrapper">
      {/* <Cursor /> */}
      {/* <ScrollTop /> */}
      <AllRoute></AllRoute>
    </div>
  );
};

export default App;
