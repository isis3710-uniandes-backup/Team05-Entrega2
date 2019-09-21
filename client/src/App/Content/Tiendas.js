import React from "react";

import { MenuUsuario } from "../Content/Usuario";
import Lista from "../Lista/Lista";
import Menu from "../Menu/Menu";

export default class Tiendas extends React.Component {
  render() {
    return (
      <div>
        <Menu />

        <div id="ContentWrapper">
          <div id="MainContainer">
            <div className="uk-flex uk-flex-between" id="ContentHeader">
              <div>
                {/* Tienda entra por props */}
                <h1 className="ContentTitle">Tiendas</h1>
              </div>
              <MenuUsuario />
            </div>

            <br />
            <br />
            {/* Tiendas */}
  
            <div
              id="ContentDetail"
              className="uk-child-width-1-3@s uk-grid-match"
              data-uk-grid
            >
              {/* LOOP AQUI */}
              <div>
                <div className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body">
                  <h3 className="uk-card-title">Default</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div>
                <div className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body AddCard">
                  <h3 className="uk-card-body">Agregar una Tienda</h3>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
