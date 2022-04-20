import { render, screen, cleanup } from '@testing-library/react';
import { useDispatch, useSelector, Provider } from "react-redux";
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer' // snapshot
import Content from '../components/Home/Content'


test('--------- CONTENT TEST #1 => PAGINATION ---------', () => {
	render(<Content flightsData={{}} companiesData={{}} currentNavSelection={[]} currentSection={0}></Content>);
	const contentElement = screen.getByTestId(`content-${1}`)
	const paginationElement = screen.getByTestId(`content-${2}`)
	expect(contentElement).toBeInTheDocument();
	expect(paginationElement).toBeInTheDocument();
	expect(paginationElement).toHaveTextContent('Showing');
	expect(paginationElement).toHaveTextContent('1');
	expect(paginationElement).toHaveTextContent('to');
	expect(paginationElement).toHaveTextContent('10');
	expect(paginationElement).toHaveTextContent('of');
	expect(paginationElement).toHaveTextContent('results');
})

test('match snapshot', () => {
	const tree = renderer.create(<Content flightsData={{}} companiesData={{}} currentNavSelection={[]} currentSection={0}></Content>).toJSON();
	expect(tree).toMatchSnapshot();
})