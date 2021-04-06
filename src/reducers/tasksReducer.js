import {
	TASKS_LOADING,
	TASKS_UPDATE,
	TASKS_ERROR,
	TASKS_DESCRIPTION,
	TASKS_USERQUERY,
} from '../types/tasksTypes';

const INITIAL_STATE = {
	loading: false,
	error: null,
	tasks: {},
	userQuery: '',
	description: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TASKS_UPDATE:
			return { ...state, loading: false, tasks: action.payload };
			break;
		case TASKS_LOADING:
			return { ...state, loading: true };
			break;
		case TASKS_ERROR:
			return { ...state, loading: false, error: action.payload };
			break;
		case TASKS_USERQUERY:
			return { ...state, userQuery: action.payload };
			break;
		case TASKS_DESCRIPTION:
			return { ...state, description: action.payload };
			break;
		default:
			return state;
	}
};
