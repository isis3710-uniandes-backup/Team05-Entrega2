import React from "react";

const date_ops = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

export default function Lista(props) {
  return (
    <li style={{ marginTop: "1em" }}>
      <h3
        className="uk-accordion-title"
        style={{ fontFamily: "Oxygen", fontSize: "20px" }}
      >
        {props.title}
      </h3>

      {/* LOOP AQUI */}
      {props.lista.length ? (
        <div
          id="ContentDetail"
          className="uk-accordion-content uk-child-width-1-3@s uk-grid-match"
          data-uk-grid
        >
          {props.lista.map((x, i) => {
            return (
              <div
                key={i}
                className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body uk-margin-right"
              >
                <h3 className="uk-card-title uk-margin-remove">{x.nombre}</h3>
                <p>
                  {x.descripcion} <br />
                  <br />
                  {x.estado ? (
                    <React.Fragment>
                      <strong>Recogido el </strong> &nbsp;
                      {new Date(x.fechaRecogida).toLocaleDateString(
                        "es-ES",
                        date_ops
                      )}
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <strong>Pedido realizado el </strong> &nbsp;
                      {new Date(x.fechaGeneracion).toLocaleDateString(
                        "es-ES",
                        date_ops
                      )}
                    </React.Fragment>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          id="ContentDetail"
          className="uk-accordion-content uk-child-width-1-3@s uk-grid-match"
          data-uk-grid
        >
          <div>
            <p>No haz realizado ningún pedido.</p>
          </div>
        </div>
      )}

      <hr />
    </li>
  );
}
