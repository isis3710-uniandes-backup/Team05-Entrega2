import React from "react";


export default function Pedidos(props) {
  return (
    <React.Fragment>
      {props.selected ? (
        <div>
          <div>
            <h1 className="ContentTitle">Pedidos {props.selected.nombre}</h1>
          </div>

          {/*  */}
          {/* LOOP SOBRE LOS PEDIDOS DE UN NEGOCIO */}
          {/*  */}

          {props.pedidos.length ? (
            <dl className="uk-description-list uk-description-list-divider">
              {props.pedidos.map((p, i) => {
                return (
                  <React.Fragment key={i}>
                    {p.nombre ? (
                      <React.Fragment>
                        <dt>{p.nombre}</dt>
                        <dd className="uk-flex uk-flex-between">
                          <div>
                            {p.descripcion} <br />
                            Pedido realizado el{" "}
                            {new Date(p.fechaGeneracion).toLocaleDateString(
                              "es-ES",
                              props.date_ops
                            )}
                            {p.estado ? (
                              <p
                                style={{
                                  fontSize: "16px",
                                  marginTop: "3px"
                                }}
                              >
                                Recogido el{" "}
                                {new Date(p.fechaRecogida).toLocaleDateString(
                                  "es-ES",
                                  props.date_ops
                                )}
                              </p>
                            ) : (
                              <span></span>
                            )}
                          </div>
                          <div>
                            {p.estado ? (
                              <button
                                className="uk-button uk-button-primary"
                                style={{ borderRadius: "1em" }}
                                disabled
                              >
                                Confirmado
                              </button>
                            ) : (
                              <button
                                className="uk-button uk-button-primary"
                                style={{ borderRadius: "1em" }}
                              >
                                Pendiente
                              </button>
                            )}
                          </div>
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
            /*
             * SI NO HAY NEGOCIOS:
             */
            <div>
              <p>Este negocio aún no tiene pedidos.</p>
            </div>
          )}
        </div>
      ) : (
        /*
         * SI NO SE HA SELECCIONADO UNA TIENDA:
         */
        <div>
          <p>Selecciona una tienda para ver sus pedidos</p>
        </div>
      )}
    </React.Fragment>
  );
}
