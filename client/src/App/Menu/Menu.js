import React from "react";

import "./Menu.css";

import { NavLink } from "react-router-dom";

export default class Menu extends React.Component {
  render() {
    return (
      <div id="MenuParent" style={{ zIndex: "100" }}>
        <div id="MenuChild">
          <NavLink to="/" className="MenuItem">
            <ion-icon size="large" name="PRINT"></ion-icon>
          </NavLink>
          <hr />
          <NavLink to="/dashboard" className="MenuItem">
            <ion-icon size="large" name="home"></ion-icon>
          </NavLink>
          <br />
          <br />
          {/* TIENDAS DE ADMIN */}
          <NavLink to="/tiendas" className="MenuItem">
            <ion-icon size="large" name="appstore"></ion-icon>
          </NavLink>
          <br />
          <br />
          {/* MEDIOS DE PAFGO DE USUARIO */}
          <ion-icon size="large" name="card"></ion-icon>
          <br />
          <br />
          <NavLink to="/usuario/44" className="MenuItem">
            <ion-icon size="large" name="person"></ion-icon>
          </NavLink>
          <br />
          <br />
          <NavLink to="/" className="MenuItem">
            <ion-icon size="large" name="log-out"></ion-icon>
          </NavLink>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
