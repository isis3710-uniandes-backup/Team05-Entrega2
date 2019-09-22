import { createStore } from "redux";

function reducer(state = { rol: "ANON" }, action) {
  switch (action.type) {
    case "ADMIN":
      state.rol = "ADMIN";
      return state;
    case "CLIENTE":
      state.rol = "CLIENTE";
      return state;
    case "SET":
      state.user = action.user;
      return state;
    default:
      state.rol = "ANON";
      return state;
  }
}

const initialState = {
  rol: "ANON",
  user: {},
  date: {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  },
  url_negocios: "/api/negocios", //"http://localhost:5000/api/negocios",
  url_servicios: "/api/servicios",
  url_pedidos: "/api/pedidos",
  url_ususarios: "/api/usuarios"
};
const store = createStore(reducer, initialState);

export { store };
