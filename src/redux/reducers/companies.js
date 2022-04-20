export const GET_COMPANIES = "GET_COMPANIES";
const SET_COMPANIES = "SET_COMPANIES";

export const getCompanies = () => ({
	type: GET_COMPANIES
});

export const setCompanies = (companies) => ({
	type: SET_COMPANIES,
	companies
});

const initialState = {
	companies: undefined
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_COMPANIES:
			const { companies } = action;
			return { ...state, companies };
		default:
			return state;
	}
};
