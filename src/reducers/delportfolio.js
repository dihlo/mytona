const INITIAL_STATE = {
  portfolioData: {
    deletedata: {},
    deleteloading: false
  }
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DEL_PORTFOLIO":
      state.portfolioData.deleteloading = true;
      return state;
    case "DEL_PORTFOLIO_OK":
      state.portfolioData.deleteloading = false;
      state.portfolioData.deletedata = action.responseData;
      return state;
    case "DEL_PORTFOLIO_ERROR":
      state.portfolioData.deleteloading = false;
      state.portfolioData.deleteerror = action.responseData;
      return state;
    default:
      return state;
  }
}
