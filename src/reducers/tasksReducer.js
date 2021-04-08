import {
	TASKS_LOADING,
	TASKS_UPDATE,
	TASKS_ERROR,
	TASKS_DESCRIPTION,
	TASKS_USERQUERY,
	TASKS_NEW_UPDATE,
	OPEN_DELETE_MODAL,
} from '../types/tasksTypes';

const INITIAL_STATE = {
	loading: false,
	error: null,
	tasks: {},
	userQuery: '',
	description: '',
	isBack: false,
	isDeleteOpen: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TASKS_UPDATE:
			return {
				...state,
				loading: false,
				tasks: action.payload,
				isBack: false,
				isDeleteOpen: false,
			};
			break;
		case TASKS_LOADING:
			return { ...state, loading: true };
			break;
		case TASKS_ERROR:
			return { ...state, loading: false, error: action.payload };
			break;
		case TASKS_NEW_UPDATE:
			//Rebooting all the values to update
			return {
				...state,
				loading: false,
				tasks: {},
				userQuery: '',
				description: '',
				isBack: true,
			};
			break;
		case TASKS_USERQUERY:
			return { ...state, userQuery: action.payload };
			break;
		case TASKS_DESCRIPTION:
			return { ...state, description: action.payload };
			break;
		case OPEN_DELETE_MODAL:
			return { ...state, isDeleteOpen: action.payload };
		default:
			return state;
	}
};
