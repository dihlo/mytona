import axios from "axios";

export const delportfolio = id => {
  return dispatch => {
    axios.defaults.headers.common = {};
    dispatch({
      type: "DEL_PORTFOLIO"
    });
    axios({
      method: "delete",
      url: "http://localhost:3015/portfolio/" + id
    })
      .then(function(response) {
        dispatch({
          type: "DEL_PORTFOLIO_OK",
          payload: id
        });
      })
      .catch(function(error) {
        dispatch({
          type: "DEL_PORTFOLIO_ERROR"
        });
      });
  };
};
