import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export const fetchAll = () => async dispatch => {
	const { data } = await axios.get(apiUrl);

	dispatch({
		type: 'fetch_users',
		payload: data,
	});
};
