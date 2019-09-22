import React from "react";
import { MenuUsuario } from "../Content/Usuario";
import Menu from "../Menu/Menu";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSubmit() {}

  render() {
    return (
      <div>
        <Menu />
        <div id="ContentWrapper">
          <div id="MainContainer">
            <div className="uk-flex uk-flex-between" id="ContentHeader">
              <div>
                {/* Tienda entra por props */}
                <h1 className="ContentTitle">Realizar un pedido</h1>
              </div>
              <MenuUsuario />
            </div>

            <br />
            <br />

            <div style={{ width: "100%" }} className="uk-flex uk-flex-center">
              <form
                onSubmit={this.onSubmit}
                style={{
                  width: "600px",
                  backgroundColor: "whitesmoke",
                  padding: "3em",
                  borderRadius: "1em"
                }}
                className="uk-form-stacked"
              >
                <legend>Hacer un pedido</legend>

                <div className="uk-margin">
                  <label className="uk-form-label" for="form-stacked-select">
                    Selcciona la papelería
                  </label>

                  {/* LOOP AQUI DE TIENDAS */}
                  <div className="uk-form-controls">
                    <select className="uk-select" id="form-stacked-select">
                      <option>El Mono</option>
                      <option>El Toro</option>
                      
                    </select>
                  </div>
                </div>


                <div className="uk-margin">
                  <label className="uk-form-label" for="form-stacked-select">
                    Qué necersitas
                  </label>

                  {/* LOOP AQUI DE SERVICIOS DE LA TIENDA SELECCIONADA */}
                  <div className="uk-form-controls">
                    <select className="uk-select" id="form-stacked-select">
                      <option>Fotocopias</option>
                      <option>Impresión Blanco - Negro</option>
                      <option>Impresión Color</option>
                      <option>Plotter</option>
                      <option>Compra de materiales</option>
                    </select>
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" for="form-stacked-text">
                    Descripción
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="form-stacked-text"
                      type="text"
                      placeholder="Algo quieras agregar a tu pedido"
                    />
                  </div>
                </div>

                <div className="uk-margin" uk-margin>
                  <label className="uk-form-label" for="form-stacked-text">
                    Archivo
                  </label>
                  <div uk-form-custom="target: true">
                    <input type="file" />
                    <input
                      className="uk-input uk-form-width-medium"
                      type="text"
                      placeholder="Seleciona un archivo"
                    />
                  </div>
                </div>
                <hr />
                <div className="uk-margin" uk-margin>
                  <button className="uk-button uk-button-primary" style={{borderRadius: '1em'}}>
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
