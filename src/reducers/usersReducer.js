import { USERS_FETCH, USERS_LOADING, USERS_ERROR } from '../types/usersTypes';

const INITIAL_STATE = {
	error: null,
	loading: false,
	users: [],
};

//Reducer who modified the storage based on its cases
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USERS_FETCH:
			return { ...state, users: action.payload, loading: false };
			break;
		case USERS_LOADING:
			return { ...state, loading: true, error: null };
			break;
		case USERS_ERROR:
			return { ...state, loading: false, error: action.payload };
			break;
		default:
			return state;
	}
};
