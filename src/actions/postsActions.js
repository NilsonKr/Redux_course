import axios from 'axios';
import { POSTS_ERROR, POSTS_FETCH, POSTS_LOADING } from '../types/postsTypes';
import { USERS_FETCH } from '../types/usersTypes';

// const apiUrl = 'http://jsonplaceholder.typicode.com/posts';
const singleApiUrl = 'http://jsonplaceholder.typicode.com/posts?userId=';

export const getSingle = indexUser => async (dispatch, getState) => {
	//Using getState to get access to the users and find the id with its array position
	const { users } = getState().usersReducer;
	const { error } = getState().usersReducer;
	const { posts } = getState().postsReducer;

	//If theres not any error or posts of the user , fetch posts and update the user
	if (!error && !('postsIndex' in users[indexUser])) {
		const uId = users[indexUser].id;

		dispatch({
			type: POSTS_LOADING,
		});

		try {
			const { data } = await axios.get(singleApiUrl + uId);

			//updating the posts array with the new posts
			const updateData = [...posts, data];
			const postsIndex = updateData.length - 1;

			//Update the users array with the posts of the user
			const updateUsers = [...users];
			updateUsers[indexUser] = {
				...updateUsers[indexUser],
				postsIndex,
			};

			dispatch({
				type: USERS_FETCH,
				payload: updateUsers,
			});

			dispatch({
				type: POSTS_FETCH,
				payload: updateData,
			});
		} catch (error) {
			dispatch({
				type: POSTS_ERROR,
				payload: error.message,
			});
		}
	}
};
