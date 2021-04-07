import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const NewTask = props => {
	//Getting the  methods to update the query and send a post
	const { changeQuery, saveTask } = props;

	const isAllow = () => {
		const { loading, userQuery, description } = props;

		if (loading) {
			return true;
		}
		if (!userQuery || !description) {
			return true;
		}

		return false;
	};

	return (
		<React.Fragment>
			<h2>Set New Task</h2>
			<label htmlFor='' className='newtask__input'>
				<span>User Id: </span>
				<input
					type='number'
					name='userQuery'
					value={props.userQuery}
					onChange={changeQuery}
				/>
			</label>
			<label htmlFor='' className='newtask__input'>
				<span>Description: </span>
				<input
					type='text'
					name='description'
					value={props.description}
					onChange={changeQuery}
				/>
			</label>
			<button className='savetask--button' onClick={saveTask} disabled={isAllow()}>
				Save Task
			</button>
		</React.Fragment>
	);
};

const mapStateToProps = reducers => reducers.tasksReducer;

export default connect(mapStateToProps)(NewTask);
