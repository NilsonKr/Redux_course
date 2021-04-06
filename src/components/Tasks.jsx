import React from 'react';
import { connect } from 'react-redux';

import Loader from './Loader';
import Error from './Error';
import TasksList from './TasksList';

const Tasks = props => {
	if (props.error) {
		return (
			<div className='mainContainer'>
				<Error message={props.error} />
			</div>
		);
	}

	if (props.loading) {
		return (
			<div className='mainContainer'>
				<Loader />
			</div>
		);
	}

	//Keys of users from tasks object
	const tasksUserId = Object.keys(props.tasks);

	return (
		<React.Fragment>
			{tasksUserId.map(user_id => (
				<div className='tasks__user' key={user_id}>
					{/* For each user key render their specific tasks on tasksList */}
					<h2>User # {user_id}</h2>
					<TasksList userId={user_id} tasks={props.tasks} />
				</div>
			))}
		</React.Fragment>
	);
};

const mapStateToProps = reducers => reducers.tasksReducer;

export default connect(mapStateToProps)(Tasks);
