export const GET_FLIGHT = "GET_FLIGHT";
const SET_FLIGHT = "SET_FLIGHT";

export const getFlights = () => ({
	type: GET_FLIGHT
});

export const setFlights = (flights) => ({
	type: SET_FLIGHT,
	flights
});

const initialState = {
	flights: undefined
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_FLIGHT:
			const { flights } = action;
			return { ...state, flights };
		default:
			return state;
	}
};
