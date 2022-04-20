import axios from "axios";
import envVars from '../../../env.json';

export function requestGetFlight() {
	return axios.request({
		method: "get",
		url: envVars.BASE_URL + "flights?access_key=" + envVars.API_KEY,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}