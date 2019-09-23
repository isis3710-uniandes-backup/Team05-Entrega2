import React from "react";
import Menu from "../Menu/Menu";
import Content from "./Content";

import { store } from "../Store/Store";

export default class DashboardCliente extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      negocios: [],
      completados: [],
      pendientes: [],
      showForm: false
    };

    this.get_pedidos = this.get_pedidos.bind(this);
    this.get_negocios = this.get_negocios.bind(this);
    this.onShowForm = this.onShowForm.bind(this);
    this.handle_onPost = this.handle_onPost.bind(this);
    this.realizar_pedido = this.realizar_pedido.bind(this);
  }

  /**
   * Llamado al API justo cuando se carga el componente
   */
  componentDidMount() {
    this.get_negocios();
    this.get_pedidos();
  }

  /**
   * Retorna todos los negocios de la DB
   */
  get_negocios() {
    fetch(store.getState().url_negocios, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        console.log(response.status, "The response was not OK");
      })
      .then(data => {
        if (data) {
          //data = data.slice(0, 6)
          this.setState({ negocios: data });
        }
      })
      .catch(err => {
        console.log("Get Negocios Error ::", err.message);
      });
  }

  /**
   * Retorna los pedidos de un usuario
   */
  get_pedidos() {
    fetch(store.getState().url_pedidos, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        this.setState({ error: "The response was not OK." });
      })
      .then(data => {
        if (data) {
          this.setState({
            completados: data.filter(x => x.estado).slice(0, 15),
            pendientes: data.filter(x => !x.estado).slice(0, 15)
          });
        }
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  }

  /**
   * Mostrar la forma para crear un pedido
   */
  onShowForm() {
    this.setState(prev => {
      return { showForm: !prev.showForm };
    });
  }

  /**
   * Post de un pedido
   */
  handle_onPost(event) {
    event.preventDefault();
    this.setState((prev) => {
      return { showForm: !prev.showForm };
    })
    const pedido = {
      nombre: event.target.nombre.value,
      descripcion: event.target.descripcion.value,
      adjunto: event.target.adjunto.value,
      fechaGeneración: new Date()
    };

    this.realizar_pedido(pedido);
  }

  /**
   * Persistencia
   */
  realizar_pedido(pedido) {
    fetch(store.getState().url_pedidos, {
      method: "post",
      body: JSON.stringify(pedido),
      cors: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    }).catch(err => {
      console.log(err.message);
    });
  }

  render() {
    return (
      <div>
        <Menu />

        <Content
          pendientes={this.state.pendientes}
          completados={this.state.completados}
          negocios={this.state.negocios}
          rol={store.getState().rol}
          onShowForm={this.onShowForm}
          showForm={this.state.showForm}
          handle_onPost={this.handle_onPost}
        />
      </div>
    );
  }
}
