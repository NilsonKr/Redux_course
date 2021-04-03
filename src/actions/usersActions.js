import axios from 'axios';
import { USERS_FETCH, USERS_LOADING, USERS_ERROR } from '../types/usersTypes';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

//is a asynchronus request so we gotta return  a function
export const getAll = () => async dispatch => {
	dispatch({
		type: USERS_LOADING,
	});

	try {
		const { data } = await axios.get(apiUrl);

		//trigger who will fire the change on the reducers
		dispatch({
			type: USERS_FETCH,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USERS_ERROR,
			payload: error.message,
		});
	}
};
