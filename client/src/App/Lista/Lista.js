import React from "react";

export default class Lista extends React.Component {
  constructor(props) {
    super(props);

    this.state = props;
  }
  render() {
    return (
      <li style={{ marginTop: "1em" }}>
        <h3
          className="uk-accordion-title"
          style={{ fontFamily: "Oxygen", fontSize: "20px" }}
        >
          {this.state.title}
        </h3>
        <div
          id="ContentDetail"
          className="uk-accordion-content uk-child-width-1-3@s uk-grid-match"
          data-uk-grid
        >
          {/* LOOP AQUI */}
          <div>
            <div className="DetailCard uk-card uk-card-default uk-card-hover uk-card-body">
              <h3 className="uk-card-title">Pedido 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>

        </div>
        <hr />
      </li>
    );
  }
}
