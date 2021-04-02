import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

//is a asynchronus request so we gotta return  a function
export const fetchAll = () => async dispatch => {
	const { data } = await axios.get(apiUrl);

	//trigger who will fire the change on the reducers
	dispatch({
		type: 'fetch_users',
		payload: data,
	});
};
