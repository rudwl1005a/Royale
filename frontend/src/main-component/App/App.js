import React from "react";
import AllRoute from "../router";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cursor from "../../components/Cursor";
import "./App.css";

const App = () => {
  return (
    <div className="App main-wrapper">
      {/* <Cursor /> */}
      <AllRoute />
    </div>
  );
};

export default App;
