import React from "react";

import { Link } from 'react-router-dom';

export default function Post(props) {
  return (
    <div>
      <form onSubmit={props.handle_onPost}>
        <label>Agregar un negocio</label>
        <div className="uk-margin uk-width-1-1">
          <input
            className="uk-input uk-form-width-large"
            type="text"
            placeholder="Nombre del negocio"
            name="nombre"
          />
        </div>
        <div className="uk-margin uk-width-1-1">
          <input
            className="uk-input uk-form-width-large"
            type="text"
            placeholder="Dirección del negocio"
            name="direccion"
          />
        </div>

        <div className="uk-margin">
          <p>Servicios</p>
          <div className="uk-form-controls uk-form-controls-text">
            <label>
              <input
                className="uk-checkbox"
                type="checkbox"
                name="servicio"
                value="Impresión"
              />
              &nbsp;&nbsp;Impresión
            </label>
            <br />
            <label>
              <input
                className="uk-checkbox"
                type="checkbox"
                name="servicio"
                value="Fotocopiado"
              />
              &nbsp;&nbsp;Fotocopiado
            </label>
            <br />
            <label>
              <input
                className="uk-checkbox"
                type="checkbox"
                name="servicio"
                value="Plotter"
              />
              &nbsp;&nbsp;Plotter
            </label>
            <br />
            <label>
              <input
                className="uk-checkbox"
                type="checkbox"
                name="servicio"
                value="Materiales"
              />
              &nbsp;&nbsp;Materiales
            </label>
          </div>
        </div>

        <div className="uk-margin uk-flex">
          <button className="uk-button uk-button-primary" type="submit">
            Enviar
          </button>
   
        </div>
      </form>
    </div>
  );
}
