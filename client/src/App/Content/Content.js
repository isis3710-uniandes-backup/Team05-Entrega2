import React from "react";

import "./Content.css";

import Lista from "../Lista/Lista";
import { MenuUsuario } from "./Usuario";

export default class Content extends React.Component {
  render() {
    return (
      <div id="ContentWrapper">
        <div id="MainContainer">
          <div className="uk-flex uk-flex-between" id="ContentHeader">
            <div>
              {/* Tienda entra por props */}
              <h1 className="ContentTitle">Pedidos Tienda A</h1>
            </div>
            <MenuUsuario />
          </div>

          <br />
          <br />
          <ul data-uk-accordion style={{padding: '0 3em'}}>
            {/* FOTOCOPIAS */}
            <Lista />
            {/* IMPRESIONES */}
            <Lista />
            {/* PLOTTER */}
            <Lista />
            {/* Materiales */}
            <Lista />
            {/* Materiales */}
            <Lista />
          </ul>
        </div>
      </div>
    );
  }
}
