const INITIAL_STATE = {
	users: [],
};

//Reducer who modified the storage based on its cases
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'fetch_users':
			return { ...state, users: action.payload };
			break;
		default:
			return state;
	}
};
