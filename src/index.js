import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const store = createStore (allReducers, applyMiddleware(thunk));
const customHistory = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={customHistory}>
			<App/>
		</Router>
	</Provider>
,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
