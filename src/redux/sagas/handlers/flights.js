import { call, put } from "redux-saga/effects";
import { setFlights } from "../../reducers/flights";
import { requestGetFlight } from "../requests/flights";

// it will store the data in our redux store
export function* handleGetFlight(action) {
	try {
		// api request from flight.js
		const response = yield call(requestGetFlight);
		const { data } = response;
		// store inside the actual reducer
		yield put(setFlights(data));
	} catch (error) {
		let tooManyRequests = error.toString().includes("429");
		alert(tooManyRequests ? "code 429: API usage limit has been reached (100 requests)" : error);
		console.log(error);
	}
}
