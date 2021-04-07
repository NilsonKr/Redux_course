import React from 'react';
import { Link } from 'react-router-dom';

const TasksList = props => {
	//Get Tasks of specific user determined by props
	const userTasks = { ...props.tasks[props.userId] };

	//Get the key of user's tasks
	const tasksKeys = Object.keys(userTasks);

	return (
		<React.Fragment>
			{tasksKeys.map(tasksId => (
				<div className='task' key={tasksId}>
					{/* render task on the users tasks object position determined by tasksId  */}
					<div className='task__description'>
						<input type='checkbox' defaultChecked={userTasks[tasksId].completed} />
						<span>{userTasks[tasksId].title}</span>
					</div>
					<div className='tasks__options'>
						<Link to={`/settask/edit/${props.userId}/${tasksId}`}>
							<button className='edit--button'>Edit</button>
						</Link>
						<Link to={`/settask/edit/${props.userId}/${tasksId}`}>
							<button className='remove--button'>Remove</button>
						</Link>
					</div>
				</div>
			))}
		</React.Fragment>
	);
};

export default TasksList;
