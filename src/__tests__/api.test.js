import axios from "axios";
import envVars from '../env.json';

const myLength = (obj) => {
	let i = 0;
	for (; obj.data[i]; i++);
	return (i)
}

test('--------- API TEST #1 => FLIGHTS ---------', async () => {
	const response = await axios.request({
		method: "get",
		url: envVars.BASE_URL + "flights?access_key=" + envVars.API_KEY,
		headers: {
			'Content-Type': 'application/json',
		},
	})
	expect(response).not.toBeNull;
	expect(myLength(response.data)).toBeGreaterThan(99);
	expect(response.status).not.toBe('429');
	expect(response).not.toContain('error');
}, 90000)


test('--------- API TEST #2 => COMPANIES ---------', async () => {
	const response = await axios.request({
		method: "get",
		url: envVars.BASE_URL + "airlines?access_key=" + envVars.API_KEY,
		headers: {
			'Content-Type': 'application/json',
		},
	})
	expect(response).not.toBeNull;
	expect(myLength(response.data)).toBeGreaterThan(99);
	expect(response.status).not.toBe('429');
	expect(response).not.toContain('error');
}, 90000)
