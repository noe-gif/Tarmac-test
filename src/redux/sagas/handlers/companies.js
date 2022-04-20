import { call, put } from "redux-saga/effects";
import { setCompanies } from "../../reducers/companies";
import { requestGetCompanies } from "../requests/companies";

// it will store the data in our redux store
export function* handleGetCompanies(action) {
	try {
		// api request from flight.js
		const response = yield call(requestGetCompanies);
		const { data } = response;
		// store inside the actual reducer
		yield put(setCompanies(data));
	} catch (error) {
		let tooManyRequests = error.toString().includes("429");
		alert(tooManyRequests ? "code 429: API usage limit has been reached (100 requests)" : error);
		console.log(error);
	}
}