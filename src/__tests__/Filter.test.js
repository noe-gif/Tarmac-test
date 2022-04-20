import { render, screen, cleanup } from '@testing-library/react';
import { useDispatch, useSelector, Provider } from "react-redux";
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer' // snapshot
import Filter from '../components/Home/Filter'


test('--------- FILTER TEST => COMPONENT ---------', () => {
	render(<Filter getFilter={() => { }} airlinesNames={{
		companies: [{ airline_name: '1' }, { airline_name: '2' },
		{ airline_name: '3' }, { airline_name: '4' }, { airline_name: '5' }, { airline_name: '6' }, { airline_name: '7' },
		{ airline_name: '8' }, { airline_name: '9' }, { airline_name: '10' }, { airline_name: '11' }, { airline_name: '12' },
		{ airline_name: '13' }, { airline_name: '14' }, { airline_name: '15' }, { airline_name: '16' }, { airline_name: '17' },
		{ airline_name: '18' }, { airline_name: '19' }, { airline_name: '20' }]
	}} flightsData={{}}></Filter>);
	const mainFilterElement = screen.getByTestId(`filter-${1}`)
	expect(mainFilterElement).toBeInTheDocument();
})