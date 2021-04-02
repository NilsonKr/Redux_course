import { FETCH_USERS, LOADING, ERROR } from '../types/usersActions';

const INITIAL_STATE = {
	error: null,
	loading: false,
	users: [],
};

//Reducer who modified the storage based on its cases
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return { ...state, users: action.payload, loading: false };
			break;
		case LOADING:
			return { ...state, loading: true, error: null };
			break;
		case ERROR:
			return { ...state, loading: false, error: action.payload };
			break;
		default:
			return state;
	}
};
