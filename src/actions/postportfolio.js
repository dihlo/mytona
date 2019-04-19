import axios from 'axios';

export const postportfolio = (data) => {
	console.log('post');
	return (dispatch) => {
		axios.defaults.headers.common = {};
		dispatch({
			type: "POST_PORTFOLIO"
		});

		axios({
		  method:'post',
		  url:'http://localhost:3015/portfolio',
		  data: data
		})
		  .then(function(response) {
				console.log(response);
					dispatch({
					type: "POST_PORTFOLIO_OK",
					responseData: response.data,
				});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "POST_PORTFOLIO_ERROR",
				responseData: "error_post",
			});		  	
		});
	};
};