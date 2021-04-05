import axios from 'axios';
import { POSTS_ERROR, POSTS_UPDATE, POSTS_LOADING } from '../types/postsTypes';
import { USERS_FETCH } from '../types/usersTypes';

// const apiUrl = 'http://jsonplaceholder.typicode.com/posts';
const singleApiUrl = 'http://jsonplaceholder.typicode.com/posts?userId=';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';

//Load the fetch posts and also give a reference to user of his posts
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

			//Add comments of each post
			const postsWithComments = data.map(post => ({
				...post,
				comments: [],
				isOpen: false,
			}));

			//updating the posts array with the new posts
			const updateData = [...posts, postsWithComments];

			//reference to the recent loaded posts
			const postsIndex = updateData.length - 1;

			//Update users array with  posts reference of the user
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
				type: POSTS_UPDATE,
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

export const openClose = (postArray, postIndex) => async (dispatch, getState) => {
	//Get The post Picked from state
	const { posts } = getState().postsReducer;
	const postPicked = posts[postArray][postIndex];

	//fetching Comments
	const { data } = await axios.get(commentsUrl + postPicked.id);

	//Update view of the post
	const updatedPost = {
		...postPicked,
		comments: data,
		isOpen: !postPicked.isOpen,
	};

	//Set posts With the updated post
	const newPosts = [...posts];
	newPosts[postArray][postIndex] = updatedPost;

	dispatch({
		type: POSTS_UPDATE,
		payload: newPosts,
	});
};
