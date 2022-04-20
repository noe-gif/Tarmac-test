import { render, screen, cleanup } from '@testing-library/react';
import { useDispatch, useSelector, Provider } from "react-redux";
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer' // snapshot
import Flights from '../components/Arrivals/Arrivals'


test('--------- ARRIVALS TEST COMPONENTS ---------', () => {
	const posts = [{
		airline: { name: '' }, flight: { number: 0 }, arrival: { timezone: '' }, departure: { scheduled: '' },
		flight_status: '', arrival: { timezone: '' }, departure: { scheduled: '' }, flight_status: ''
	},
	{ airline: { name: '' }, flight: { number: 0 }, arrival: { timezone: '' }, departure: { scheduled: '' }, flight_status: '' },
	{ airline: { name: '' }, flight: { number: 0 }, arrival: { timezone: '' }, departure: { scheduled: '' }, flight_status: '' },
	{ airline: { name: '' }, flight: { number: 0 }, arrival: { timezone: '' }, departure: { scheduled: '' }, flight_status: '' },
	{ airline: { name: '' }, flight: { number: 0 }, arrival: { timezone: '' }, departure: { scheduled: '' }, flight_status: '' },
	{ airline: { name: '' }, flight: { number: 0 }, arrival: { timezone: '' }, departure: { scheduled: '' }, flight_status: '' },
	{ airline: { name: '' }, flight: { number: 0 }, arrival: { timezone: '' }, departure: { scheduled: '' }, flight_status: '' },
	{ airline: { name: '' }, flight: { number: 0 }, arrival: { timezone: '' }, departure: { scheduled: '' }, flight_status: '' },
	{ airline: { name: '' }, flight: { number: 0 }, arrival: { timezone: '' }, departure: { scheduled: '' }, flight_status: '' },
	{ airline: { name: '' }, flight: { number: 0 }, arrival: { timezone: '' }, departure: { scheduled: '' }, flight_status: '' }]
	render(<Flights posts={posts} ></Flights>);

	for (let i = 0; i < posts.length; i++) {
		const arrivalElement = screen.getByTestId(`arrivals-${i}`)
		expect(arrivalElement).toBeInTheDocument();
		expect(arrivalElement).not.toHaveTextContent('');

	}
})