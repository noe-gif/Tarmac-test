import { takeLatest } from "redux-saga/effects";
import { handleGetFlight } from "./handlers/flights";
import { handleGetCompanies } from "./handlers/companies";
import { GET_FLIGHT } from "../reducers/flights";
import { GET_COMPANIES } from "../reducers/companies";

// generator function (do async stuff in a easier way) -> it will constently be running in the background and listenning 
export function* watcherSaga() {
	/* this is going to be looking if any actions have been dispatched and if yes map
	it to the handler functions that make the API requests */
	yield takeLatest(GET_FLIGHT, handleGetFlight);
	yield takeLatest(GET_COMPANIES, handleGetCompanies);
}