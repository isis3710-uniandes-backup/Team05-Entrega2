import React from "react";
import { store } from "../Store/Store";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';

export default class Home extends React.Component {
  handle_longin(event) {
    store.dispatch({
      type: "CLIENTE",
      state: store.getState()
    });
  }

  handle_longin_admin(event) {
    store.dispatch({
      type: "ADMIN",
      state: store.getState()
    });
  }

  componentDidMount() {
    //store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div className="uk-light wrap uk-background-norepeat uk-background-cover uk-background-center-center uk-cover-container uk-background-secondary">
        <img
          sizes="100vw"
          data-src="https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          src="https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          data-uk-cover
          data-uk-img
        />
        <div
          className="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-position-z-index uk-position-relative"
          data-uk-height-viewport="min-height: 400"
        >
          <div className="uk-position-top">
            <div className="uk-container uk-container-small">
              <nav
                className="uk-navbar-container uk-navbar-transparent"
                data-uk-navbar
              >
                <div className="uk-navbar-left">
                  <div className="uk-navbar-item">
                    <a className="uk-logo" href="#">
                      <img src={logo} alt="Logo" width="80" />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div
            className="uk-container uk-container-small uk-flex-auto uk-text-center"
            data-uk-scrollspy="target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300"
          >
            <h1
              className="uk-heading-primary animate uk-invisible"
              style={{ fontWeight: "700" }}
            >
              Imprime donde quieras, Recoge cuando gustes
            </h1>
            <div className="uk-width-4-5@m uk-margin-auto animate uk-invisible">
              <p className="lead">
                La mejor forma de encargar tus impresiones a tu tienda preferida y 
                recogerlas cuando quieras. ¡Evita las filas y únete ahora!
              </p>
            </div>
            <div
              className="uk-margin-medium-top animate uk-invisible"
              data-uk-margin
              data-uk-scrollspy-className="uk-animation-fade uk-invisible"
            >
              <div><Link to="/dashboard" >

<a
  className="uk-button uk-button-primary uk-button-medum uk-width-1-3 uk-width-auto@s"
  data-uk-icon="arrow-right"
  title="Learn More"
  onClick={_ => this.handle_longin()}
>
  Ingresar como cliente
</a>
</Link></div>


              <br/>

            <div>
            <Link to="/dashboard" >

<a
  className="uk-button uk-button-primary uk-button-medium uk-width-1-3 uk-width-auto@s"
  data-uk-icon="check"
  title="Learn More"
  onClick={_ => this.handle_longin_admin()}
>
  Ingresar como administrador de un negocio
</a>
</Link>
            </div>

              <br/>

             <div>
             <Link to="/registration" >

<a
  className="uk-button uk-button-primary uk-button-medium uk-width-1-3 uk-width-auto@s"
  data-uk-icon="check"
  title="Learn More"
>
  Registrate
</a>
</Link>
             </div>

            </div>
          </div>

          <div className="uk-position-bottom-center uk-position-small">
            <span className="uk-text-small uk-text-center">
              © 2019 |{" "}
              <a
                href="https://github.com/zzseba78/Kick-Off"
                title="Created by KickOff"
              >
                Created by KickOff
              </a>{" "}
              | Built with{" "}
              <a
                href="http://getuikit.com"
                title="Visit UIkit 3 site"
                target="_blank"
                data-uk-tooltip
              >
                <span data-uk-icon="uikit"></span>
              </a>
            </span>
          </div>
        </div>

        <div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: false">
          <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
            <button
              className="uk-offcanvas-close uk-close uk-icon"
              type="button"
              data-uk-close
            ></button>
            <ul className="uk-nav uk-nav-default">
              <li className="uk-active">
                <a href="#">Active</a>
              </li>
              <li className="uk-parent">
                <a href="#">Parent</a>
                <ul className="uk-nav-sub">
                  <li>
                    <a href="#">Sub item</a>
                  </li>
                  <li>
                    <a href="#">Sub item</a>
                  </li>
                </ul>
              </li>
              <li className="uk-nav-header">Header</li>
              <li>
                <a href="#js-options">
                  <span
                    className="uk-margin-small-right uk-icon"
                    data-uk-icon="icon: table"
                  ></span>{" "}
                  Item
                </a>
              </li>
              <li>
                <a href="#">
                  <span
                    className="uk-margin-small-right uk-icon"
                    data-uk-icon="icon: thumbnails"
                  ></span>{" "}
                  Item
                </a>
              </li>
              <li className="uk-nav-divider"></li>
              <li>
                <a href="#">
                  <span
                    className="uk-margin-small-right uk-icon"
                    data-uk-icon="icon: trash"
                  ></span>{" "}
                  Item
                </a>
              </li>
            </ul>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
