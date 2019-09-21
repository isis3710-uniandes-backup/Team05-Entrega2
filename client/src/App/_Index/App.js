import React from "react";
import "./App.css";

import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";

import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Menu from "../Menu/Menu";
import Content from "../Content/Content";
import Usuario from "../Content/Usuario";
import Tiendas from "../Content/Tiendas";

function Dashboard() {
  return (
    <div>
      <Menu />
      <Content />
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/usuario/:id" component={Usuario} />
          <Route path="/tiendas" component={Tiendas} />
        </Switch>
      </div>
    );
  }
}

export default App;
