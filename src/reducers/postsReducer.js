import { POSTS_FETCH, POSTS_LOADING, POSTS_ERROR } from '../types/postsTypes';

const INITIAL_STATE = {
	error: null,
	loading: false,
	posts: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case POSTS_FETCH:
			return { ...state, posts: action.payload, loading: false };
			break;
		case POSTS_LOADING:
			return { ...state, loading: true, error: null };
			break;
		case POSTS_ERROR:
			return { ...state, loading: false, error: action.payload };
			break;
		default:
			return state;
	}
};
