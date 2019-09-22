import React from "react";

export default function Servicios(props) {
  return (
    <React.Fragment>
      {props.selected ? (
        <div>
          <div>
            <h1 className="ContentTitle">Servicios {props.selected.nombre}</h1>
          </div>

          {/*  */}
          {/* LOOP SOBRE LOS SERVICIOS DE UN NEGOCIO */}
          {/*  */}

          {props.servicios.length ? (
            <dl className="uk-description-list uk-description-list-divider">
              {props.servicios.map((p, i) => {
                return (
                  <React.Fragment key={i}>
                    {p.tipo ? (
                      <React.Fragment>
                        <dt>{p.tipo}</dt>
                        <dd className="uk-flex uk-flex-between">
                          <div>{p.costo}</div>
                        </dd>
                      </React.Fragment>
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}
                  </React.Fragment>
                );
              })}
            </dl>
          ) : (
            <div>
              <p>Este negocio aún no tiene servicios.</p>
            </div>
          )}
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  );
}
