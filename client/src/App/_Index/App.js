import React from "react";
import "./App.css";

import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";

import { Switch, NavLink, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "../Menu/Menu";
import Content from "../Content/Content";

function App() {
  return (
    <div id="App">
      <Menu />

      <Content />
    </div>
  );
}

export default App;
