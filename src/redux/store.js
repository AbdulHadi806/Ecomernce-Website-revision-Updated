import { applyMiddleware, compose, createStore } from "redux"
import Reducer from "./reducer.js"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)))

export default store