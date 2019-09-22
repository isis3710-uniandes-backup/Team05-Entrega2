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
import Form from "../Post/Form";

import { store } from "../Store/Store";
import Admin from "../Content/Admin";

function Dashboard(props) {
  return (
    <div>
      {store.getState() === "CLIENTE" ? (
        <div>
          <Menu />
          <Content />
        </div>
      ) : (
        <div>
          <div>
            <Menu />
            <Admin />
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
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/usuario/:id" component={Usuario} />
          <Route path="/tiendas" component={Tiendas} />
          <Route path="/pedidos/post" component={Form} />
        </Switch>
      </div>
    );
  }
}

export default App;
