import {combineReducers} from 'redux';
import Getportfolio from './getportfolio';
import Modal from './modal';
import Postportfolio from './postportfolio';
import Putportfolio from './putportfolio';
import Delportfolio from './delportfolio';

const allReducers = combineReducers ({
	getportfolio: Getportfolio,
	modal: Modal,
	postportfolio: Postportfolio,
	putportfolio: Putportfolio,
	delportfolio: Delportfolio,
});

export default allReducers;