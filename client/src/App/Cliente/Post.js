import React from "react";

export default function Post(props) {
  return (
    <div>
      <form onSubmit={props.handle_onPost}>
        <label>Agregar un pedido</label>
        <div className="uk-margin uk-width-1-1">
          <input
            className="uk-input uk-form-width-large"
            type="text"
            placeholder="Qué servicio requieres"
            name="nombre"
          />
        </div>
        <div className="uk-margin uk-width-1-1">
          <input
            className="uk-input uk-form-width-large"
            type="text"
            placeholder="Detalles de pedido"
            name="descripcion"
          />
        </div>

        <div class="uk-margin" uk-margin>
          <div uk-form-custom="target: true">
            <input type="file" />
            <input
              class="uk-input uk-form-width-medium"
              type="text"
              placeholder="Select file"
              name="adjunto"
            />
          </div>
        </div>

        <div className="uk-margin uk-flex">
          <button className="uk-button uk-button-primary" type="submit">
            Enviar
          </button>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <button
            className="uk-button uk-button-default"
            onClick={_ => props.onShowForm()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
