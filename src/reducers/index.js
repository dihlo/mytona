import {combineReducers} from 'redux';
import Getportfolio from './getportfolio';
import Modal from './modal';


const allReducers = combineReducers ({
	getportfolio: Getportfolio,
	modal: Modal,
});

export default allReducers;