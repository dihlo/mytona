import axios from 'axios';

export const getportfolio = (limit) => {
	console.log('get portfolio card');
	return (dispatch) => {
		axios.defaults.headers.common = {};
			dispatch({
			type: "GET_PORTFOLIO"
		});
		axios({
			method:'get',
			url:'http://localhost:3015/portfolio',
		})
		.then(function(response) {
			dispatch({
				type: "GET_PORTFOLIO_OK",
				responseData: response.data,
				limit: limit,
			});
		})
		.catch(function (error) {
			dispatch({
				type: "GET_PORTFOLIO_ERROR",
				responseData: "error_portfolio",
		});		  	
		});
	};
};
