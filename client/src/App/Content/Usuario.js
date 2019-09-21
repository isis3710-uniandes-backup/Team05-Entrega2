import React from "react";
import Menu from "../Menu/Menu";
import { NavLink } from "react-router-dom";

export default class Usuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Menu />

        <div
          className="uk-flex uk-flex-middle uk-flex-center uk-flex-column"
          style={{ width: "100%", minHeight: "100vh", marginTop: "-5em" }}
        >
          <div>
            <div
              className="uk-card uk-card-default"
              style={{ width: "500px", borderRadius: "2em" }}
            >
              <div className="uk-card-media-top">
                <img
                  src="https://picsum.photos/500/300"
                  alt=""
                  style={{ borderRadius: "2em 2em 0 0" }}
                />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">User Name</h3>

                <dl className="uk-description-list uk-description-list-divider">
                  <dt>email</dt>
                  <dd>user@gmail.com</dd>
                  <dt>telefono</dt>
                  <dd>32091023922</dd>
                  <dt>métodos de pago</dt>
                  <dd>
                    <ul data-uk-accordion>
                      <li>
                        <p className="uk-accordion-title" style={{fontSize: '16px'}}>
                          Efectivo
                        </p>
                        <div className="uk-accordion-content">
                          <p>
                            Opciones de eliminar o modificar
                          </p>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function MenuUsuario(props) {
  return (
    <div className="uk-flex uk-flex-middle">
      <div>
        <NavLink to="/usuario/33">
          <p>User Name</p>
        </NavLink>
      </div>
      <div>
        <img
          id="ProfileImage"
          src="https://picsum.photos/60"
          alt="Profile"
          height="60"
        />
      </div>
    </div>
  );
}

export { MenuUsuario };
