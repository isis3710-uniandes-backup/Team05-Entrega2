import React from "react";
import "./App.css";

import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";

import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Usuario from "../Cliente/Usuario";

import { store } from "../Store/Store";
import Dashboard from "../Admin/Dashboard";
import DashboardCliente from "../Cliente/Dashboard";
import Registration from "./Registration";

function Display(props) {
  return (
    <div>
      {store.getState().rol === "CLIENTE" ? (
        <div>
          <DashboardCliente />
        </div>
      ) : (
        <div>
          <div>
            <Dashboard />
          </div>
        </div>
      )}
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Display} />
          <Route path="/usuario/:id" component={Usuario} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </div>
    );
  }
}

export default App;
