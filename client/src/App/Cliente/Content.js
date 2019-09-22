import React from "react";
import { MenuUsuario } from "./Usuario";
import Lista from "../Lista/Lista";
import Negocios from "../Admin/Negocios";
import Post from "./Post";

export default function Content(props) {
  return (
    <div id="ContentWrapper">
      <div id="MainContainer">
        <div className="uk-flex uk-flex-between" id="ContentHeader">
          <div>
            <h1 className="ContentTitle">Pedidos</h1>
          </div>
          <MenuUsuario />
        </div>

        {!props.showForm ? (
          <React.Fragment>
            <div>
              <br />
              <button
                className="uk-button uk-button-primary"
                style={{ borderRadius: "1em" }}
                onClick={_ => props.onShowForm()}
              >
                Hacer un pedido
              </button>
            </div>

            {/*  */}
            {/* PEDIDOS DE UN CLIENTE */}
            {/*  */}

            <ul data-uk-accordion style={{ padding: "0 0em" }}>
              {/* PEDIDOS EN CURSO */}
              <Lista title="Pedidos en proceso" lista={props.pendientes} />
              {/* PEDIDOS COMPLETADOS */}
              <Lista title="Pedidos realizados" lista={props.completados} />
            </ul>

            {/*  */}
            {/* TIENDAS DISPONIBLES */}
            {/*  */}

            <br />
            <br />

            <div>
              <h1 className="ContentTitle">Tiendas</h1>
            </div>

            <Negocios
              negocios={props.negocios}
              handle_onSelect={_ => console.log(".")}
              rol={props.rol}
            />
          </React.Fragment>
        ) : (
          <div>
            <Post
              onShowForm={props.onShowForm}
              handle_onPost={props.handle_onPost}
            />
          </div>
        )}
      </div>
    </div>
  );
}
