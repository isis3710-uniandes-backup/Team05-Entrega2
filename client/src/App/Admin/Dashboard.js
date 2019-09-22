import React from "react";

import { store } from "../Store/Store";
import Menu from "../Menu/Menu";
import Content from "./Content";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      negocios: [],
      pedidos: [],
      servicios: [],
      showForm: false
    };

    this.handle_select = this.handle_select.bind(this);
    this.get_negocios = this.get_negocios.bind(this);
    this.get_pedidos_negocio = this.get_pedidos_negocio.bind(this);
    this.get_servicos_negocio = this.get_servicos_negocio.bind(this);

    this.handle_onPost = this.handle_onPost.bind(this);
    this.onShowForm = this.onShowForm.bind(this);
  }

  /**
   * Llamado al API justo cuando se carga el componente
   */
  componentDidMount() {
    this.get_negocios();
  }

  /**
   * Optiene el negocio seleccionado por el usuario administrador
   */
  handle_select(i) {
    this.setState({
      selected: this.state.negocios[i],
      showForm: false
    });
    // * No entiendo qué pasa pero funciona :)
    if (!this.state.selected) {
      this.setState({
        selected: this.state.negocios[i]
      });
    }
    this.get_pedidos_negocio();
    this.get_servicos_negocio();
  }

  /**
   * POST de un nuevo Negocio del administrador
   */
  handle_onPost(event) {
    event.preventDefault();
    const negocio = {
      nombre: event.target.nombre.value,
      direccion: event.target.direccion.value
    };
    let servicios = [];
    event.target.servicio.forEach(serv => {
      servicios.push({
        tipo: serv.value,
        costo: 100
      });
    });

    fetch(store.getState().url_negocios, {
      method: "post",
      body: JSON.stringify(negocio),
      cors: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    })
      .then(res => {
        if (res.status !== 500) {
          const id = this.state.negocios.filter(
            x => x.nombre === negocio.nombre
          );
          console.log(id);
          this.agregar_servicios(servicios, id);
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  /**
   * POST de un nuevo Negocio del administrador
   */
  handle_onService(event) {
    event.preventDefault();
    let servicios = [];
    event.target.servicio.forEach(serv => {
      servicios.push({
        tipo: serv.value,
        costo: 100
      });
    });
    
    this.agregar_servicios(servicios, this.state.selected._id);
      
  }

  /**
   * mostrar Form para crear un negocio
   */
  onShowForm() {
    this.setState(prev => {
      return { showForm: !prev.showForm, selected: undefined };
    });
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
          this.setState({ negocios: data });
        }
      })
      .catch(err => {
        console.log("Get Negocios Error ::", err.message);
      });
  }

  /**
   * Retorna los pedidos de un negocio de la DB
   */
  get_pedidos_negocio() {
    const _idNegocio = this.state.selected
      ? this.state.selected._id
      : undefined;
    if (_idNegocio) {
      fetch(`http://localhost:5000/api/negocios/${_idNegocio}/pedidos`, {
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
            this.setState({ pedidos: data });
          }
        })
        .catch(err => {
          console.log("Get Negocios Error ::", err.message);
        });
    }
  }

  /**
   * Retorna los servicios de un negocio de la DB
   */
  get_servicos_negocio() {
    const _idNegocio = this.state.selected
      ? this.state.selected._id
      : undefined;
    if (_idNegocio) {
      fetch(`http://localhost:5000/api/negocios/${_idNegocio}/servicios`, {
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
            this.setState({ servicios: data });
          }
        })
        .catch(err => {
          console.log("Get Negocios Error ::", err.message);
        });
    }
  }

  agregar_servicios(servicios, _idNegocio) {
    servicios.forEach(x => {
      x._idNegocio = _idNegocio;
      x._idPedido = "5d8575906146dd2eb85fee7b";
      fetch(store.getState().url_servicios, {
        method: "post",
        body: JSON.stringify(x),
        cors: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000"
        }
      }).catch(err => {
        console.log(err.message);
      });
    });
  }

  render() {
    return (
      <div>
        <Menu />

        <Content
          negocios={this.state.negocios}
          handle_select={this.handle_select}
          selected={this.state.selected}
          pedidos={this.state.pedidos}
          servicios={this.state.servicios}
          date={store.getState().date}
          handle_onPost={this.handle_onPost}
          onShowForm={this.onShowForm}
          showForm={this.state.showForm}

          rol={store.getState().rol}
        />
      </div>
    );
  }
}
