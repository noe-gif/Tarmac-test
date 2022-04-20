import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import flightReducer from "./reducers/flights"; // our first reducer
import companiesReducer from "./reducers/companies"; // our second reducer
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
	flight: flightReducer,
	companies: companiesReducer
}); // setting up the reducer to pass it to the store

const sagaMiddleware = createSagaMiddleware(); // creates the redux saga (initialization)

const middleware = [sagaMiddleware]; /* array of middleware, these are "threads" that can be started, paused
and cancelled with redux actions */

const store = createStore(reducer, {}, applyMiddleware(...middleware)); // enhencer (none yet), apply the middlewares

// crf rootSaga.js
sagaMiddleware.run(watcherSaga);

export default store;
