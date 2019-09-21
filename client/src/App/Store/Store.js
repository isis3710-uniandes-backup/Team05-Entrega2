import { createStore } from "redux";

function reducer(state = "ANON", action) {
    switch (action.type) {
      case "ADMIN":
        return "ADMIN";
      case "CLIENTE":
        return "CLIENTE";
      default:
        return state;
    }
  }

const initialState = "ANON";
const store = createStore(reducer, initialState);

export { store };
