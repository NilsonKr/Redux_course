import axios from 'axios';
import { FETCH_USERS, LOADING, ERROR } from '../types/usersActions';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

//is a asynchronus request so we gotta return  a function
export const fetchUsers = () => async dispatch => {
	dispatch({
		type: LOADING,
	});

	try {
		const { data } = await axios.get(apiUrl);

		//trigger who will fire the change on the reducers
		dispatch({
			type: FETCH_USERS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: error.message,
		});
	}
};
