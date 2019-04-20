const INITIAL_STATE = {
  portfolioData: {
    data: [],
    loading: false,
    error: "",
    limit: 5,
    pagesCount: 1
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_PORTFOLIO":
      return {
        ...state,
        portfolioData: { ...state.portfolioData, loading: true }
      };
    case "GET_PORTFOLIO_OK":
      let pagesCount = 1;
      pagesCount = Math.ceil(action.responseData.length / action.limit);
      let arr = action.responseData.reverse();
      return {
        ...state,
        portfolioData: {
          ...state.portfolioData,
          data: arr,
          loading: false,
          pagesCount: pagesCount
        }
      };
    case "GET_PORTFOLIO_ERROR":
      return {
        ...state,
        portfolioData: {
          ...state.portfolioData,
          error: action.responseData,
          loading: false
        }
      };
    default:
      return state;
  }
}
