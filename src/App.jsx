import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import Header from "./Components/Header";
import Purchases from "./Components/Purchases";

const App = () => (
  <div className="min-h-screen">
    <Header/>
    <Purchases/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
