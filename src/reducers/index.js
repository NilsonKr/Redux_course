import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

//package all the reducers to give it to global store

export default combineReducers({
	usersReducer,
});
