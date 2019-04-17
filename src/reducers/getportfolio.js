const INITIAL_STATE = {
	portfolioData: {
		data: [],
		loading: false,
		error: '',
	},
}

export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "GET_PORTFOLIO":
		return {...state, portfolioData:{...state.portfolioData, loading: true}};
		case "GET_PORTFOLIO_OK":
		return {...state, portfolioData:{...state.portfolioData, data: action.responseData, loading: false}};
		case "GET_PORTFOLIO_ERROR":
		return {...state, portfolioData:{...state.portfolioData, error: action.responseData, loading: false}};
	default:
		return state;
	}
}


