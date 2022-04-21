/*
					📜
		   
	************************************
	*                                  *
	*     UTILS FUNCTIONS FILE         *
	*                                  *
	************************************

*/

/* function to stack up css classes on a component */
export function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

/* 2022-04-19T05:45:00+00:00 to 05.45 */
export function transformHourToFloat(time) {
	var string = time.slice(11, 19)
	string = string.slice(0, 5) + string.slice(6);
	string = string.replace(':', '.').replace(/[^\d.-]/g, '');
	return (string);
}

/* sort an array chronogically according to the departure scheduled  */
export const compare = (a, b) => {
	var time1 = parseFloat(transformHourToFloat(a.departure.scheduled));
	var time2 = parseFloat(transformHourToFloat(b.departure.scheduled));
	if (time1 < time2) return -1;
	if (time1 > time2) return 1;
	return 0;
}

/* 2022-04-20T06:05:00+00:00 to 06:05:00 */
export function transformDateToHour(time) {
	var string = time.slice(11, 19)
	return (string);
}

/* get number of occurence of flights from each companies. ex : Qatar ariways (8 flights) */
export const numberOfResultsPerFilters = (filters, flights) => {
	let resultsPerFilter = [];
	let counter = 0;

	for (let i = 0; filters[i]; i++) {
		counter = 0;
		for (let y = 0; flights.flights && flights.flights.data[y]; y++) {
			if (filters[i].airline_name === flights.flights.data[y].airline.name) {
				counter++;
			}
		}
		resultsPerFilter.push(counter);
	}
	return (resultsPerFilter);
}