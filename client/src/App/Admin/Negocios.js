import React from "react";

export default function Negocios(props) {
  return (
    <React.Fragment>
      {props.rol === "ADMIN" ? (
        <div>
          <br />
          <button
            className="uk-button uk-button-primary"
            style={{ borderRadius: "1em" }}
            onClick={_ => props.onShowForm()}
          >
            Agregar una tienda
          </button>
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}

      {/*  */}
      {/* LOOP SOBRE LOS NEGOCIOS */}
      {/*  */}

      {props.negocios.length ? (
        <div
          id="ContentDetail"
          className="uk-accordion-content uk-child-width-1-4@s uk-grid-match"
          data-uk-grid
          style={{ minHeight: "220px" }}
        >
          {props.negocios.map((n, i) => {
            return (
              <div
                key={i.toString()}
                className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body uk-cover-container uk-inline"
                onClick={_ => props.handle_select(i)}
                style={{
                  cursor: "pointer",
                  width: "20%",
                  margin: "0 2em 2em 2em",
                  minHeight: "200px"
                }}
              >
                <img
                  src="https://images.pexels.com/photos/6663/desk-white-black-header.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                  data-uk-cover
                />
                <div className="uk-overlay-default uk-position-cover"></div>
                <h3
                  className="uk-overlay uk-position-top uk-dark"
                  style={{ zIndex: "100" }}
                >
                  {n.nombre}
                  <p style={{ fontSize: "14px" }}>{n.direccion}</p>
                </h3>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {props.rol === "ADMIN" ? (
            <p>No tienes ningun negocio registrado aún.</p>
          ) : (
            <p>Aún no hay tiendas registradas</p>
          )}
        </div>
      )}

      {/*  */}
      {/* END LOOP AQUI */}
      {/*  */}
    </React.Fragment>
  );
}
