import React from "react";
import logo from "../../assets/logo.svg";
import "./App.css";

import { Switch, NavLink, Route } from "react-router-dom";
import User from "../User/user";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <span>
          <NavLink to="/Home">Home</NavLink>
        </span>
        <span>
          <NavLink to={{ pathname: "/users", variable: { id: "abc" } }}>
            Users
          </NavLink>
        </span>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />

          <Route path="/users" render={props => <User {...props} />} />

          <Route render={_ => <h1>404 not found</h1>} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
