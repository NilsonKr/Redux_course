import axios from 'axios';
import {
	TASKS_LOADING,
	TASKS_UPDATE,
	TASKS_ERROR,
	TASKS_DESCRIPTION,
	TASKS_USERQUERY,
	TASKS_NEW_UPDATE,
} from '../types/tasksTypes';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

export const getAll = () => async dispatch => {
	//Fetching Tasks

	dispatch({
		type: TASKS_LOADING,
	});

	try {
		const { data } = await axios.get(apiUrl);

		const tasks = {};

		//Fill Tasks object
		data.map(
			task =>
				//Set tasks by userId
				(tasks[task.userId] = {
					//Immutability to avoid overWrite
					...tasks[task.userId],
					//Set each task by its id
					[task.id]: {
						...task,
					},
				})
		);

		dispatch({
			type: TASKS_UPDATE,
			payload: tasks,
		});
	} catch (error) {
		dispatch({
			type: TASKS_ERROR,
			payload: error.message,
		});
	}
};

export const setQuery = (name, value) => dispatch => {
	//Defining what value change on the state (There's only 2 values)
	const dispatchType = name === 'userQuery' ? TASKS_USERQUERY : TASKS_DESCRIPTION;

	dispatch({
		type: dispatchType,
		payload: value,
	});
};

export const saveTask = newTask => async dispatch => {
	dispatch({
		type: TASKS_LOADING,
	});

	try {
		const { data } = await axios.post(apiUrl, newTask);

		dispatch({
			type: TASKS_NEW_UPDATE,
		});
	} catch (error) {
		dispatch({
			type: TASKS_ERROR,
			payload: error.message,
		});
	}
};

export const updateTask = taskUpdated => async dispatch => {
	console.log(taskUpdated);
	dispatch({
		type: TASKS_LOADING,
	});

	const taskId = `/${taskUpdated.id}`;

	try {
		const { data } = await axios.put(apiUrl + taskId, taskUpdated);

		dispatch({
			type: TASKS_NEW_UPDATE,
		});
	} catch (error) {
		dispatch({
			type: TASKS_ERROR,
			payload: error.message,
		});
	}
};

export const setCompleted = (userTask, taskId) => async (dispatch, getState) => {
	const { tasks } = getState().tasksReducer;
	const taskPicked = tasks[userTask][taskId];

	const taskUpdated = {
		...taskPicked,
		completed: !taskPicked.completed,
	};

	//Inmutabilitie
	const newTasks = { ...tasks };
	newTasks[userTask] = { ...tasks[userTask] };
	newTasks[userTask][taskId] = taskUpdated;

	dispatch({
		type: TASKS_UPDATE,
		payload: newTasks,
	});
};
