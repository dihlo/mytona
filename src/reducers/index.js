import {combineReducers} from 'redux';
import Getportfolio from './getportfolio';

const allReducers = combineReducers ({
	getportfolio: Getportfolio,
});

export default allReducers;