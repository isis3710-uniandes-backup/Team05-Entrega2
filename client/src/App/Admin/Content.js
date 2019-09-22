import React from "react";
import { MenuUsuario } from "../Cliente/Usuario";
import Negocios from "./Negocios";
import Pedidos from "./Pedidos";
import Servicios from "./Servicios";
import Post from "./Post";

export default function Content(props) {
  return (
    <div id="ContentWrapper">
      <div id="MainContainer">
        <div className="uk-flex uk-flex-between" id="ContentHeader">
          <div>
            <h1 className="ContentTitle">Tiendas</h1>
          </div>
          <MenuUsuario />
        </div>

        {/*  */}
        {/* NEOGCIOS DE UN ADMINISTRADOR */}
        {/*  */}

        {!props.showForm ? (
          <React.Fragment>
            <Negocios
              negocios={props.negocios}
              handle_select={props.handle_select}
              onShowForm={props.onShowForm}
              rol={props.rol}
            />
            <hr />
            <br />

            {/*  */}
            {/* PEDIDOS DE UN NEGOCIO SELECCIONADO */}
            {/*  */}

            <Pedidos
              selected={props.selected}
              pedidos={props.pedidos}
              date_ops={props.date}
            />

            {/*  */}
            {/* SERVICIOS DE UN NEGOCIO SELECCIONADO */}
            {/*  */}

            <Servicios selected={props.selected} servicios={props.servicios} />
          </React.Fragment>
        ) : (
          <Post handle_onPost={props.handle_onPost}/>
        )}
      </div>
    </div>
  );
}
