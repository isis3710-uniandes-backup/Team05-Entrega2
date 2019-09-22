import React from "react";

import { Link, Redirect } from "react-router-dom";
import { store } from "../Store/Store";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDashboard: false
    };
  }

  handle_onPost(event) {
    event.preventDefault();
    const user = {
      nombre: event.traget.nombre.value,
      nombreUsuario: event.target.nombreUsuario.value,
      contrasenia: event.target.contraseia.value,
      tipo: "cliente"
    };

    fetch(store.getState().url_usuarios, {
      method: "post",
      body: JSON.stringify(user),
      cors: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          store.dispatch({
            type: "CLIENTE",
            user: user,
            state: store.getState()
          });
          this.setState((prev) => {
            return { toDashboard: !prev.toDashboard };
          })
      })
      .catch(err => console.log(err.message));
  }

  render() {
    if (this.state.toDashboard) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div
        style={{ width: "100%", height: "100vh" }}
        className="uk-flex uk-flex-center uk-flex-middle"
      >
        <form onSubmit={this.handle_onPost}>
          <h1>Registrate</h1>
          <div className="uk-margin uk-width-1-1">
            <input
              className="uk-input uk-form-width-large"
              type="text"
              placeholder="Nombre Completo"
              name="nombre"
            />
          </div>
          <div className="uk-margin uk-width-1-1">
            <input
              className="uk-input uk-form-width-large"
              type="text"
              placeholder="Nombre de usuario"
              name="nombreUsuario"
            />
          </div>

          <div className="uk-margin uk-width-1-1">
            <input
              className="uk-input uk-form-width-large"
              type="password"
              placeholder="Contraseña"
              name="contrasenia"
            />
          </div>

          <div className="uk-margin uk-flex">
            <Link to="/dashboard">
              <button className="uk-button uk-button-primary" type="submit">
                Enviar
              </button>
            </Link>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <Link to="/">
              <button className="uk-button uk-button-secondary">
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
