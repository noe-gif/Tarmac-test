import axios from "axios";
import envVars from '../../../env.json';

export function requestGetCompanies() {
	return axios.request({
		method: "get",
		url: envVars.BASE_URL + "airlines?access_key=" + envVars.API_KEY,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}