import axios from 'axios';

export const putportfolio = (data, id) => {
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "PUT_PORTFOLIO"
		});

		axios({
		  method:'put',
		  url:'http://localhost:3015/portfolio/' + id,
		  data: data,
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "PUT_PORTFOLIO_OK",
				responseData: response.data,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "PUT_PORTFOLIO_ERROR",
				responseData: "error_meals",
			});		  	
		});
	};
};