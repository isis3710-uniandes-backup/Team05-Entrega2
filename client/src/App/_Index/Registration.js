import React from "react";

import { Link, Redirect } from "react-router-dom";
import { store } from "../Store/Store";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    
    this.initialState = {
      nombre: "",
      nombreUsuario:"",
      contrasenia : "",
      email: "",
      tipo: ""

    }

    this.option ={
      option: "Tipo de Usuario"
    }

    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
    if(value === "cliente"){
      this.option.option= "Cliente";
    }
    if(value === "admin"){
      this.option.option = "Administrador";
    }
    
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.onFormSubmit(this.state);
    this.setState(this.initialState)
  }

  onFormSubmit(data) {
    const apiUrl = '/api/usuarios';

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
    };

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(result => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
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
        <form onSubmit={this.handleSubmit}>
          <h1>Registrate</h1>
          <div className="uk-margin uk-width-1-1">
            <input
              className="uk-input uk-form-width-large"
              type="text"
              placeholder="Nombre Completo"
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleChange}
            />
          </div>
          <div className="uk-margin uk-width-1-1">
            <input
              className="uk-input uk-form-width-large"
              type="text"
              placeholder="Correo Electronico"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="uk-margin uk-width-1-1">
            <input
              className="uk-input uk-form-width-large"
              type="text"
              placeholder="Nombre de Usuario"
              name="nombreUsuario"
              value={this.state.nombreUsuario}
              onChange={this.handleChange}
            />
          </div>
          

          <div className="uk-margin uk-width-1-1">
            <input
              className="uk-input uk-form-width-large"
              type="password"
              placeholder="Contraseña"
              name="contrasenia"
              value={this.state.contrasenia}
              onChange={this.handleChange}
            />
          </div>
          <div className="uk-margin uk-width-1-1">
            <select
              className="uk-input uk-form-width-large"
              name="tipo"
              value={this.state.email}
              onChange={this.handleChange}
            >
              <option value="">{this.option.option}</option>
              <option value="cliente" selected>Cliente</option>
              <option value="admin" >Administrador</option>    
            </select>
          </div>

          <div className="uk-margin uk-flex">
            <button className="uk-button uk-button-primary" type="submit">
            Enviar
              </button>
           
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
