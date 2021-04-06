import React from 'react';

const TasksList = props => {
	//Get Tasks of specific user determined by props
	const userTasks = { ...props.tasks[props.userId] };

	//Get the key of user's tasks
	const tasksKeys = Object.keys(userTasks);

	return (
		<React.Fragment>
			{tasksKeys.map(taskKey => (
				<div className='task'>
					{/* render task on the users tasks object position determined by taskKey  */}
					<input type='checkbox' defaultChecked={userTasks[taskKey].completed} />
					<div className='task__description'>
						<p>{userTasks[taskKey].title}</p>
					</div>
				</div>
			))}
		</React.Fragment>
	);
};

export default TasksList;
