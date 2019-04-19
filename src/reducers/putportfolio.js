const INITIAL_STATE = {
	portfolioData: {
		data: {},
		loading: false,		
	}
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "PUT_PORTFOLIO":
		state.portfolioData.loading = true;
		return state;
		case "PUT_PORTFOLIO_OK":
		state.portfolioData.loading = false;
		state.portfolioData.data = action.responseData;
		return state;
		case "PUT_PORTFOLIO_ERROR":
		state.portfolioData.loading = false;
		state.portfolioData.error = action.responseData;
		return state;
	default:
		return state;
	}
}

