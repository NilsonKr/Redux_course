import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import tasksReducer from './tasksReducer';

//package all the reducers to give it to global store

export default combineReducers({
	usersReducer,
	postsReducer,
	tasksReducer,
});
