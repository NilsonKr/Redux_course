import React from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../actions/tasksActions';

import './styles/NewTask.css';

const { setQuery } = tasksActions;

const NewTask = props => {
	//Change query on the props
	const changeQuery = ev => {
		const name = ev.target.name;
		const value = ev.target.value;

		props.setQuery(name, value);
	};

	return (
		<div className='newtask__container'>
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
			<button className='savetask--button'>Save Task</button>
		</div>
	);
};

const mapStateToProps = reducers => reducers.tasksReducer;

//Always have to be an object not a function that return a object ._.
const mapDispatchToProps = {
	setQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
