import React from "react";

import { MenuUsuario } from "../Content/Usuario";
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
              className="uk-accordion-content uk-child-width-1-4@s uk-grid-match"
              data-uk-grid
            >
              {/* LOOP AQUI */}
              <div style={{minHeight: '150px'}}>
                <div className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body uk-cover-container uk-inline">
                  <img
                    src="https://images.pexels.com/photos/6663/desk-white-black-header.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                    data-uk-cover
                  />
                  <div class="uk-overlay-default uk-position-cover"></div>
                  <h3
                    className="uk-overlay uk-position-top uk-dark"
                    style={{ zIndex: "100" }}
                  >
                    Nombre Tienda
                  </h3>
                </div>
              </div>


              <div style={{minHeight: '150px'}}>
                <div className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body uk-cover-container uk-inline">
                  <img
                    src="https://images.pexels.com/photos/6663/desk-white-black-header.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                    data-uk-cover
                  />
                  <div class="uk-overlay-default uk-position-cover"></div>
                  <h3
                    className="uk-overlay uk-position-top uk-dark"
                    style={{ zIndex: "100" }}
                  >
                    Nombre Tienda
                  </h3>
                </div>
              </div>



              <div style={{minHeight: '150px'}}>
                <div className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body uk-cover-container uk-inline">
                  <img
                    src="https://images.pexels.com/photos/6663/desk-white-black-header.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                    data-uk-cover
                  />
                  <div class="uk-overlay-default uk-position-cover"></div>
                  <h3
                    className="uk-overlay uk-position-top uk-dark"
                    style={{ zIndex: "100" }}
                  >
                    Nombre Tienda
                  </h3>
                </div>
              </div>


              <div style={{minHeight: '150px'}}>
                <div className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body uk-cover-container uk-inline">
                  <img
                    src="https://images.pexels.com/photos/6663/desk-white-black-header.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                    data-uk-cover
                  />
                  <div class="uk-overlay-default uk-position-cover"></div>
                  <h3
                    className="uk-overlay uk-position-top uk-dark"
                    style={{ zIndex: "100" }}
                  >
                    Nombre Tienda
                  </h3>
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
