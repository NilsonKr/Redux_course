import { TASKS_LOADING, TASKS_UPDATE, TASKS_ERROR } from '../types/tasksTypes';
import axios from 'axios';

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
