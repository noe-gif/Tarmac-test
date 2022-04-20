import '@testing-library/jest-dom';
import * as homeUtils from '../components/Home/Utils'
import * as arrivalsUtils from '../components/Arrivals/Utils'


test('--------- HOME UTILS TEST #1 => transformHourToFloat ---------', () => {
	expect(homeUtils.transformHourToFloat("2022-04-19T05:45:00+00:00")).toBe('05.4500');
})

test('--------- HOME UTILS TEST #2 => compare ---------', () => {
	const testArray = [{ departure: { scheduled: '2022-04-19T05:45:00+00:00' } }, { departure: { scheduled: '2022-04-19T05:44:00+00:00' } },
	{ departure: { scheduled: '2022-04-19T05:43:00+00:00' } }, { departure: { scheduled: '2022-04-19T05:42:00+00:00' } },
	{ departure: { scheduled: '2022-04-19T05:41:00+00:00' } }, { departure: { scheduled: '2022-04-19T05:40:00+00:00' } },
	{ departure: { scheduled: '2022-04-19T05:39:00+00:00' } }];
	expect(testArray.sort(homeUtils.compare)).toStrictEqual([{ departure: { scheduled: '2022-04-19T05:39:00+00:00' } }, { departure: { scheduled: '2022-04-19T05:40:00+00:00' } },
	{ departure: { scheduled: '2022-04-19T05:41:00+00:00' } }, { departure: { scheduled: '2022-04-19T05:42:00+00:00' } },
	{ departure: { scheduled: '2022-04-19T05:43:00+00:00' } }, { departure: { scheduled: '2022-04-19T05:44:00+00:00' } },
	{ departure: { scheduled: '2022-04-19T05:45:00+00:00' } }]);
})

test('--------- HOME UTILS TEST #3 => transformDateToHour ---------', () => {
	expect(homeUtils.transformDateToHour("2022-04-19T05:45:00+00:00")).toBe('05:45:00');
})

test('--------- HOME UTILS TEST #4 => numberOfResultsPerFilters ---------', () => {
	const filters = [{ airline_name: 'Qatar' }, { airline_name: 'AirFrance' }];
	const flights = { flights: { data: [{ airline: { name: 'Qatar' } }, { airline: { name: 'Qatar' } }, { airline: { name: 'AirFrance' } }] } }
	expect(homeUtils.numberOfResultsPerFilters(filters, flights)).toStrictEqual([2, 1]);
})

// -----------------------------------------------------------------------------------------

test('--------- ARRIVALS UTILS TEST #1 => timeZoneToCity ---------', () => {
	expect(arrivalsUtils.timeZoneToCity("Australia/Sidney")).toBe('Sidney');
})

test('--------- ARRIVALS UTILS TEST #2 => timeZoneToContinent ---------', () => {
	expect(arrivalsUtils.timeZoneToContinent("Europe/Berlin")).toBe('Europe');
})

test('--------- ARRIVALS UTILS TEST #3 => getStatus ---------', () => {
	expect(arrivalsUtils.getStatus('active')).toBe('#B9FFD0');
})

test('--------- ARRIVALS UTILS TEST #3 => getStatus ---------', () => {
	expect(arrivalsUtils.getLogoFromCompany('somethingThatDoesNotExist')).toBe('https://cdn.discordapp.com/attachments/965224699367927808/966001484804288572/Sans_titre.png');
})
