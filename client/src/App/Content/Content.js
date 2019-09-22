import React from "react";

import "./Content.css";

import Lista from "../Lista/Lista";
import { MenuUsuario } from "./Usuario";

import { Link } from 'react-router-dom'

export default class Content extends React.Component {
  render() {
    return (
      <div id="ContentWrapper">
        <div id="MainContainer">
          <div className="uk-flex uk-flex-between" id="ContentHeader">
            <div>
              <h1 className="ContentTitle">Pedidos</h1>
            </div>
            <MenuUsuario />
          </div>

          <br />
          <Link to="/pedidos/post">
                <button className="uk-button uk-button-primary" style={{borderRadius: '1em'}}>Hacer un pedido</button>
              </Link>
          <br />  
          <br />  

          <ul data-uk-accordion style={{ padding: "0 0em" }}>
            {/* PEDIDOS EN CURSO */}
            <Lista title='Pedidos en proceso' />
            {/* PEDIDOS COMPLETADOS */}
            <Lista title='Pedidos realizados' />
        
          </ul>

    

          <br/>
          <br/>

          <div>
              <h1 className="ContentTitle">Tiendas</h1>
            </div>

            <div
          id="ContentDetail"
          className="uk-accordion-content uk-child-width-1-4@s uk-grid-match"
          data-uk-grid
        >
          {/* LOOP AQUI */}
          <div>
            <div className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body">
              <h3 className="uk-card-body">Nombre Teinda</h3>
            </div>
          </div>

          <div>
            <div className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body">
              <h3 className="uk-card-body">Nombre Teinda</h3>
            </div>
          </div>

          <div>
            <div className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body">
              <h3 className="uk-card-body">Nombre Teinda</h3>
            </div>
          </div>

          <div>
            <div className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body">
              <h3 className="uk-card-body">Nombre Teinda</h3>
            </div>
          </div>


        </div>
          
        </div>
      </div>
    );
  }
}
