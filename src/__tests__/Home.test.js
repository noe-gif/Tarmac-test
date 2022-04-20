import { render, screen, cleanup } from '@testing-library/react';
import { useDispatch, useSelector, Provider } from "react-redux";
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import renderer from 'react-test-renderer' // snapshot
import Home from '../components/Home/Home'
import { getFlights } from "../redux/reducers/flights";
import { getCompanies } from "../redux/reducers/companies";

// gonna run after each test
afterEach(() => {
	cleanup(); // check if it's clean and that it starts from the starting point (nothing existing already)
})

test('--------- HOME TEST #1 => REACT REDUX DISPATCH DATA LOADING ---------', () => {
	render(<Provider store={store}><Home>{() => {
		let dispatch = useDispatch();
		dispatch(getFlights()).then(() => {
			const flightsData = useSelector((state) => state.flight);
			expect(flightsData).not.toBeNull
		});
		dispatch(getCompanies().then(() => {
			const companiesData = useSelector((state) => state.companies);
			expect(companiesData).not.toBeNull
		}));
	}}</Home></Provider>);
})

test('--------- HOME TEST #2 => 6 NAVIGATIONS COMPONENTS IN HOME ---------', () => {
	render(<Provider store={store}><Home></Home></Provider>);
	const HomeElement = [];
	for (let i = 0; i < 6; i++) {
		HomeElement.push(screen.getByTestId(`navigation-${1}`))
		expect(HomeElement[i]).toBeInTheDocument();
		expect(HomeElement[i]).not.toContainHTML('<a></a>')
	}
})

test('--------- HOME TEST #3 => USER COMPONENTS IN HOME ---------', () => {
	render(<Provider store={store}><Home></Home></Provider>);
	const userElement = screen.getByTestId(`user-${1}`)
	expect(userElement).toBeInTheDocument();
	expect(userElement).not.toContainHTML('<p></p>')
	expect(userElement).toHaveTextContent('Username');
	expect(userElement).toHaveTextContent('View profile');
})