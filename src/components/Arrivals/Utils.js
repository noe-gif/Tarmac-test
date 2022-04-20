/*
					📜
		   
	************************************
	*                                  *
	*     UTILS FUNCTIONS FILE         *
	*                                  *
	************************************

*/

import companiesData from './CompaniesData.json';

// Australia/Sidney to Sidney
export const timeZoneToCity = (timeZone) => {
	let city = '';
	let index = false;

	for (let letter of timeZone) {
		if (letter === '/') index = true;
		city += index === true ? (letter === '/' ? '' : letter) : '';
	}
	return (city)
}

// Europe/Berlin to Europe
export const timeZoneToContinent = (timeZone) => {
	let city = '';
	let index = true;

	for (let letter of timeZone) {
		if (letter === '/') index = false;
		city += index === true ? (letter === '/' ? '' : letter) : '';
	}
	return (city)
}

// returns red if the status is cancelled for instance
export const getStatus = (status) => {
	const statusArray = [
		['active', '#B9FFD0'],
		['scheduled', '#FFE1B9'],
		['cancelled', '#FFB9B9'],
		['landed', '#B9C1FF']
	]

	const result = statusArray.filter(offset => offset[0] == status);
	return result[0][1]
}

// returns logo of company name depending on the .json data
export const getLogoFromCompany = (companyName) => {
	for (let i = 0; companiesData.data[i]; i++) {
		if (companyName == companiesData.data[i].AirlineName) {
			return (companiesData.data[i].logoUrl);
		}
	}
	return ('https://cdn.discordapp.com/attachments/965224699367927808/966001484804288572/Sans_titre.png')
}
