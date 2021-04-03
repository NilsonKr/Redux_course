import axios from 'axios';
import { POSTS_ERROR, POSTS_FETCH, POSTS_LOADING } from '../types/postsTypes';

const apiUrl = 'http://jsonplaceholder.typicode.com/posts';
const singleApiUrl = 'http://jsonplaceholder.typicode.com/posts?userId=';

export const getAll = () => async dispatch => {
	dispatch({
		type: POSTS_LOADING,
	});

	try {
		const { data } = await axios.get(apiUrl);

		dispatch({
			type: POSTS_FETCH,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: POSTS_ERROR,
			payload: error.message,
		});
	}
};

export const getSingle = indexUser => async (dispatch, getState) => {
	//Using getState to get access to the users and find the id with its array position
	const { users } = getState().usersReducer;
	const uId = users[indexUser].id;

	dispatch({
		type: POSTS_LOADING,
	});

	try {
		const { data } = await axios.get(singleApiUrl + uId);

		dispatch({
			type: POSTS_FETCH,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: POSTS_ERROR,
			payload: error.message,
		});
	}
};
