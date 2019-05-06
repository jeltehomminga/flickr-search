import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from '../reducers'

//Compose to still be ablt to use Redux Devtools en Thunk
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
