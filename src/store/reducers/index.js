import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ promise: promiseReducer, city: cityReducer }),
  applyMiddleware(thunk)
);

function promiseReducer(state = {}, action) {
  if (["LOGOUT", "LOGIN"].includes(action.type)) return {};
  if (action.type === "PROMISE") {
    const { name = "default", status, payload, error } = action;
    if (status) {
      return {
        ...state,
        [name]: {
          status,
          payload:
            (status === "PENDING" && state[name] && state[name].payload) ||
            payload,
          error,
        },
      };
    }
  }

  return state;
}

function cityReducer(state = {}, action) {

  if (localStorage.forecast) {
    state = JSON.parse(localStorage.forecast);
  }

  if (action.type === "CITYTOSTORE") {
    state = { ...state, [action.city.cityName]: action.city.cityData };
    localStorage.forecast = JSON.stringify(state);
    return { ...state };
  }

  if (action.type === "CITYOUTSTORE") {
    delete state[action.city];
    localStorage.forecast = JSON.stringify(state);
    return { ...state };
  }

  return state;
}

export { store };
