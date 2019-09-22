import React from "react";
import { store } from "../Store/Store";
import { Link } from 'react-router-dom';

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
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div>
        <Link to="/dashboard" >
        <button onClick={this.handle_longin}>Ingresar</button>
        </Link>

        <Link to="/dashboard" >
        <button onClick={this.handle_longin_admin}>Admin</button>
        </Link>
        
      </div>
    );
  }
}
